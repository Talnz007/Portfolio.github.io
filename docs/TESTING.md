# Testing

This portfolio is a static GitHub Pages site. The validation test checks the main HTML contract without adding package dependencies.

## Run the static validation

```bash
node tests/validate-portfolio.mjs
```

The test verifies:

- Required portfolio sections and content are present.
- Local CSS, JavaScript, resume, and image assets exist.
- Anchor links resolve to real section IDs.
- Duplicate IDs are not introduced.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- The new page does not depend on the old jQuery slider scripts.

## Manual smoke test

```bash
cd docs
python3 -m http.server 8000
```

Open `http://localhost:8000` and check desktop plus mobile widths. Verify navigation, resume download, project links, contact links, and responsive layout.
