# TFE Document Center

A standalone static website for The FLOX Entertainment. It runs directly on GitHub Pages and does not require a backend, database, API key, build step, or third-party service.

## Files
- `index.html` — page structure
- `styles.css` — responsive dark corporate interface
- `app.js` — templates, document creation, local storage, preview and print

## Run locally
Open `index.html` in a modern browser.

## Publish with GitHub Pages
1. Create or open a GitHub repository.
2. Upload `index.html`, `styles.css`, and `app.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then save.
6. Wait for GitHub Pages to publish the site. Open the Pages URL shown in Settings → Pages.

## Important limitations
This is intentionally a browser-only version:
- Documents are stored in the current browser using `localStorage`.
- Data is not shared between employees, devices, or browsers.
- Profile and approver selection are labels only, not verified identities.
- Approval statuses are not cryptographically signed or legally authenticated.
- Use **Print / Save PDF** from a document preview to print or save a PDF.

For shared employee accounts, verified permissions, audit trails and legally meaningful approvals, a backend would be required. This build does not connect to any external service.
