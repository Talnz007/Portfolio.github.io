# Talha Niazi Portfolio

Static GitHub Pages portfolio for Talha Niazi, tailored from the downloaded Framer visual direction while keeping the content grounded in the existing repository notes.

## Live Files

- `index.html` - production page
- `assets/css/portfolio.css` - Framer-inspired responsive styling
- `assets/js/portfolio.js` - mobile navigation, section highlighting, and reveal animations
- `assets/Talha_Niazi_Resume.pdf` - local resume download

The legacy `assets/css/main.css`, `assets/js/functions-min.js`, and `assets/js/custom-functions.js` remain in the repository for recoverability, but the new page does not load them.

## Local Preview

```bash
cd docs
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Validation

Run from the repository root:

```bash
node tests/validate-portfolio.mjs
```

See `TESTING.md` for the full validation checklist.
