import http.server
import socketserver
import webbrowser
from pathlib import Path

HOST = "127.0.0.1"
PORT = 8000

if __name__ == "__main__":
    web_dir = Path(__file__).resolve().parent
    handler = http.server.SimpleHTTPRequestHandler
    handler.extensions_map.update({".js": "application/javascript"})

    with socketserver.TCPServer((HOST, PORT), handler) as httpd:
        print(f"Serving {web_dir} at http://{HOST}:{PORT}/index.html")
        webbrowser.open(f"http://{HOST}:{PORT}/index.html")
        httpd.serve_forever()
