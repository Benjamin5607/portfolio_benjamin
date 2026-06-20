# Wonbin S. — Portfolio

Personal portfolio website showcasing projects, experience, and skills.

## Live Preview

Open `index.html` in a browser, or serve locally:

```bash
npx serve .
```

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your site will be live at `https://Benjamin5607.github.io/portfolio/`

## Structure

- `index.html` — Main page
- `styles.css` — Styling
- `profile.js` — LinkedIn profile data (English source of truth)
- `i18n.js` — UI translations (EN/KO/ZH/JA) and profile translations
- `projects.js` — Project data (categories, descriptions, tech stacks, links)
- `script.js` — i18n, rendering & interactions

## Language Support

Use the **EN / KO / ZH / JA** switcher in the navigation bar. Preference is saved in `localStorage`.

## Customize

Edit `profile.js` for LinkedIn profile data and `projects.js` for project entries. UI strings live in `i18n.js`.
