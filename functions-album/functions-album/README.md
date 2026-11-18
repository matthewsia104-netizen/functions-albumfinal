# Functions in the Wild — MHF4U Functions Album

Static site (no build step) for the MHF4U Real-World Functions Culminating Task.
Live at: https://matthewsia104-netizen.github.io/functions-album/

## Fill in your work
Everything you write lives in **`data/functions.js`** — equations, the two-point
algebraic derivation, both commentary paragraphs, domain/range and your
Desmos screen-recording link. Empty fields show a dashed "to do" box on the page.
Group names go in `members`.

Photos and Desmos overlays are in `assets/img/` (`<function>-photo.jpg`, `<function>-graph.jpg`).

## Publish (GitHub Pages)
```bash
git add .
git commit -m "Update album"
git push origin main
```
Repo → Settings → Pages → Deploy from branch → `main` / root.

## Preview locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
