# Harrison Kangaho - Portfolio Guide

Prepared 1 November 2026.

## The idea

**Thoughtful design. Useful software.** The page positions Harrison as a developer and product designer who connects engineering, interface design and real user needs. It is designed for prospective employers, collaborators and clients.

## The page

1. Introduction: headline, original GitHub portrait, location and a work link.
2. Experience highlights: résumé-grounded EMR reach, mockups and requirements.
3. Recent and selected work: Asmahaney Saad, Kwikfloat and Sandy Collections appear first, followed by Stre@mline EMR, Testimony App and Hats Off Animation. Filters and project details make exploration optional.
4. About and toolkit: software, design and collaboration skills.
5. Experience: engineering and product design at Stre@mline plus Computer Science education.
6. Contact: email, copy address, GitHub and LinkedIn.

## Visual direction

| Token | Value | Use |
| --- | --- | --- |
| Paper | #F4F3EC | Page background |
| Ink | #24372F | Text, primary buttons |
| Forest | #263E33 | About section |
| Lime | #D7ED8B | Portrait note, contact accent |
| Coral | #DF785A | Small marks, focus outline |
| Muted | #626B61 | Supporting copy |

Arial/Helvetica keeps body text familiar and portable. Georgia italics soften the display headlines. Generous spacing and a simple grid keep the work prominent. All fonts use local fallbacks; no external font request is needed.

## VS Code quick start

Extract the ZIP and open `harrison-portfolio.code-workspace`. Open `dist/index.html` directly in a browser or run:

```bash
python -m http.server 5500 --directory dist
```

Visit http://localhost:5500. No dependency installation or build command is required.

## Maintain the portfolio

- Change visible copy and card metadata in `dist/index.html`.
- Change colours and responsive layout in `dist/styles.css`.
- Change project stories in the `projects` object in `dist/script.js`.
- Keep the card's `data-project` key and story key identical.
- Keep categories and the All work count current when adding projects.
- Replace cover illustrations with approved screenshots when ready.
- Publish only the contents of `dist/` to any static host. Keep asset paths relative.

## Source boundaries

The saved résumé and current public GitHub sources provide the main evidence. LinkedIn supplied limited indexed profile context; direct Instagram access was restricted, so Aneta's publicly indexed first-party portfolio advice informed structure. Education dates follow the résumé. Covers are labelled illustrations. Detailed source links are in `CONTENT_SOURCES.md`.

## Validation

The final handover includes a static portable page, source files and this guide. Syntax, local references and anchor targets were checked. Browser QA covers desktop and narrow layouts, project filtering, project details, keyboard dismissal and focus return. The site uses email links rather than a contact backend. This standalone repository is prepared for a public GitHub Pages deployment; the existing hosted Site keeps its current access settings.
