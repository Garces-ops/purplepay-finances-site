# PurplePay Finances (static site)
Free student budgeting templates and guides. Deployed with GitHub Pages.

## Local edits
Open any `.html` or `assets/css/style.css` file, edit, and commit. No build step required.

## Enable the contact form
Replace `https://formspree.io/f/your-id` in `contact.html` with your Formspree endpoint (free tier). If not using Formspree, the page includes a `mailto:` fallback.

## Add more downloads
Place files in `assets/templates/` and add a new card in `templates.html`. Keep filenames lowercase with hyphens.

## Images
Replace `assets/img/hero.jpg` with your own (1600x600+). You can grab a placeholder from Unsplash.

## Deploy (GitHub Pages)
Settings → Pages → Build from `main` branch `/root`. Your site will be live at `https://<username>.github.io/`.
