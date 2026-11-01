# Harrison Kangaho - Portfolio

A simple, responsive portfolio showcasing software development and design, built with HTML, CSS and JavaScript.

## Featured work

- Asmahaney Saad - professional personal-brand website.
- Kwikfloat - mobile money business management across MTN and Airtel.
- Sandy Collections - clothing and accessories retail management.
- Stre@mline EMR - collaborative healthcare software development and product design.
- Testimony App - recording and transcription project.
- Hats Off Animation - creative-studio website.

## Run locally

Open `harrison-portfolio.code-workspace` in VS Code. Open `dist/index.html` directly, or run:

```bash
python -m http.server 5500 --directory dist
```

Visit `http://localhost:5500`. No dependency installation or build is required.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes `dist/` whenever a commit is pushed to `main`, or when the workflow is started manually.

Before the first deployment, enable GitHub Pages for the repository and set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**. The deployment URL appears in the `github-pages` environment and the completed deployment job. The site is public when hosted on GitHub Pages.

## Edit the site

| File | Purpose |
| --- | --- |
| `dist/index.html` | Visible content, project cards, skills, experience and contact links |
| `dist/styles.css` | Colours, typography, responsive layout and cover illustrations |
| `dist/script.js` | Project details, filtering and email-copy interaction |
| `dist/assets/` | Original profile portrait and favicon |
| `docs/CONTENT_SOURCES.md` | Sources and editorial notes |
| `docs/PORTFOLIO_GUIDE.md` | Editable handover guide |

When adding a project, keep its `data-project` key and matching story key in `script.js` identical. Update the category, project count and cover numbering. Set `linkLabel` for website links; repository links use the default GitHub label.

Project covers are labelled portfolio illustrations. Email opens the visitor's mail application; copying an email address works on HTTPS or localhost. The site has no backend, API keys, analytics service or remote fonts.

## Contact

[GitHub](https://github.com/KangahoH) · [LinkedIn](https://www.linkedin.com/in/harrison-kangaho-a1893b385/) · [Email](mailto:harrison.kangaho28@gmail.com)
