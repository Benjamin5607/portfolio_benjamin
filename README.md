# Wonbin S. — Portfolio

Personal portfolio website for Wonbin Shim, organized around professional experience, AI product work, and the **Eccentric Lab** project system.

## Live Preview

Production:

```text
https://benjamin5607.github.io/portfolio_benjamin/
```

Open `index.html` in a browser, or serve locally:

```bash
npx serve .
```

## Current Highlight

The portfolio currently positions **Zerro AI OS** as the flagship Production Lab project:

- Bring Your Own AI Workspace OS
- Live web app at `zerroai.space`
- Zerro Dev Studio web + Windows Desktop v0.2.8
- Local CLI path through `zerro-dev-studio`
- Secure API Hub with Vercel proxy + HttpOnly key vault
- Token dashboard, MCP tools, connected research/data utilities, and NOW / ONCE / REPEAT scheduling

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your site will be live at `https://Benjamin5607.github.io/portfolio_benjamin/`

## Structure

- `index.html` — Main page
- `styles.css` — Styling
- `profile.js` — LinkedIn profile data (English source of truth)
- `i18n.js` — UI translations (EN/KO/ZH/JA) and profile translations
- `projects.js` — Project data (categories, descriptions, tech stacks, links)
- `projects-i18n.js` — Localized project descriptions and featured stack details
- `script.js` — i18n, rendering & interactions

## Language Support

Use the **EN / KO / ZH / JA** switcher in the navigation bar. Preference is saved in `localStorage`.

## Customize

Edit `profile.js` for LinkedIn profile data and `projects.js` for project entries. UI strings live in `i18n.js`.
