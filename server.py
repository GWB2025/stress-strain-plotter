import http.server
import datetime
import json
import socketserver
import threading
import webbrowser
from http import HTTPStatus
from pathlib import Path
from urllib.parse import urlparse

HOST = "127.0.0.1"
PORT = 8000
LOG_ENDPOINT = "/__log"
LOG_FILE = Path(__file__).resolve().with_name("stress-stain.log")
MAX_LOG_BYTES = 5_000_000
MAX_REQUEST_BYTES = 1_000_000
LOG_LOCK = threading.Lock()


def rotate_log_if_needed(path: Path) -> None:
    if not path.exists():
        return
    if path.stat().st_size < MAX_LOG_BYTES:
        return

    timestamp = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
    rotated = path.with_name(f"{path.stem}-{timestamp}{path.suffix}")
    path.rename(rotated)


class StressStrainHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "application/javascript",
    }

    def do_POST(self) -> None:
        path = urlparse(self.path).path
        if path != LOG_ENDPOINT:
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        length = int(self.headers.get("content-length", "0"))
        if length <= 0:
            self.send_error(HTTPStatus.BAD_REQUEST, "Missing request body.")
            return
        if length > MAX_REQUEST_BYTES:
            self.send_error(HTTPStatus.REQUEST_ENTITY_TOO_LARGE, "Log payload too large.")
            return

        body = self.rfile.read(length)
        try:
            payload = json.loads(body.decode("utf-8"))
        except Exception:
            self.send_error(HTTPStatus.BAD_REQUEST, "Invalid JSON payload.")
            return

        events = payload.get("events") if isinstance(payload, dict) else None
        if events is None:
            events = [payload]
        if not isinstance(events, list):
            self.send_error(HTTPStatus.BAD_REQUEST, "Invalid events payload.")
            return

        now = datetime.datetime.now(datetime.timezone.utc).isoformat()
        remote = self.client_address[0] if self.client_address else None
        user_agent = self.headers.get("user-agent")

        with LOG_LOCK:
            rotate_log_if_needed(LOG_FILE)
            with LOG_FILE.open("a", encoding="utf-8") as handle:
                for event in events:
                    record = {
                        "serverReceivedAt": now,
                        "remote": remote,
                        "userAgent": user_agent,
                        "event": event,
                    }
                    handle.write(json.dumps(record, ensure_ascii=False) + "\n")

        self.send_response(HTTPStatus.NO_CONTENT)
        self.end_headers()


class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True

if __name__ == "__main__":
    web_dir = Path(__file__).resolve().parent
    handler = lambda *args, **kwargs: StressStrainHandler(*args, directory=str(web_dir), **kwargs)

    with ThreadingTCPServer((HOST, PORT), handler) as httpd:
        print(f"Serving {web_dir} at http://{HOST}:{PORT}/index.html")
        print(f"Logging enabled at POST {LOG_ENDPOINT} -> {LOG_FILE}")
        webbrowser.open(f"http://{HOST}:{PORT}/index.html")
        httpd.serve_forever()
