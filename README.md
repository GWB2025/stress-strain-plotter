# Stress-Strain Plotter

A browser-based app for plotting engineering and true stress-strain curves, fitting elastic/plastic regions, and generating analysis outputs for materials workflows (including ANSYS-style plastic strain tables).

## Features

- Paste or upload CSV/TSV data as strain, stress pairs.
- Optional header handling and line-numbered data display.
- Plot engineering and true stress-strain curves.
- Compute Young's Modulus (auto elastic-region fit), Yield (0.2%), and UTS.
- Select ranges by stress or by line numbers (with helper buttons).
- Region fit plot with selectable regression models: None, Linear, Quadratic, Cubic, Exponential.
- Plastic-region analysis with cubic fit (true stress-strain) and R2.
- Power hardening (K, n) fit with log-log visualization (when valid).
- Plastic strain output for ANSYS (with user-supplied E) and CSV export.
- Data table with derived columns and a data-column plot with regression overlays.

## Data Format

Input expects strain and stress numeric pairs:

- Example (comma or tab separated):
  - 0,0
  - 0.01,120
  - 0.02,215

Rules:
- Pairs are read as strain then stress.
- Commas, tabs, or new lines can separate values.
- If the file has a header, check "Data includes header row".

## Running the App

1. Start the local server:

   python server.py

2. Open the URL shown in the terminal, typically:

   http://127.0.0.1:8000/index.html

## Key Controls

- Stress units: choose Pa / MPa / GPa for the stress column.
- Plot stress range: filters the top plot by stress values.
- Fit line range: selects data rows for region regression.
- Select to yield / UTS / plastic region: quick range helpers.
- Regression (Region fit): chooses the regression overlay and formula display.
- Data column plot: plot derived columns vs strain with optional regression.

## Plastic Region Output (ANSYS)

For plastic-region export:

- Enter Elastic modulus E (same units as stress).
- Set a strain step to generate evenly spaced true strain values.
- The app computes true stress via the cubic fit and plastic strain via:

  plastic_strain = true_strain - true_stress / E

- The first row is offset to zero based on Yield (0.2%) rounded to a whole number.
- Click "Save plastic CSV" to download.

## Reference Dataset

The repo includes Al2024-T351.csv as a built-in reference dataset.

## Files of Interest

- index.html: UI layout.
- styles.css: styling.
- app.js: core logic (parsing, plotting, fits, calculations).
- server.py: simple static server for local use.

## Notes

- The app uses least-squares regression for linear fits (Excel SLOPE/LINEST equivalent).
- Log-log power hardening fits require plastic-region data (post-yield).

## License

Licensed under the MIT License. See LICENSE.
