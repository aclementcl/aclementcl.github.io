# aclemente.dev

Personal portfolio site for Alejandro Clemente.

## Stack

- Static site served from `docs/`
- HTML, CSS, vanilla JavaScript
- JSON content source
- Typst source for resume generation
- GitHub Pages deployment via GitHub Actions

## Project Structure

- `docs/index.html`: main page shell
- `docs/content.json`: editable site content
- `docs/person.schema.json`: structured data for SEO
- `docs/script.js`: content rendering and metadata injection
- `docs/styles/main.css`: layout and base UI
- `docs/styles/photo.css`: profile photo styles
- `docs/styles/ambient.css`: animated background styles
- `docs/resumes/*.typ`: resume source files
- `docs/resumes/*.pdf`: generated resume output
- `.github/workflows/deploy-pages.yml`: Pages CI/CD pipeline

## Local Development

Serve the `docs/` directory over HTTP:

```bash
npx serve docs
```

Then open the local URL returned by the command.

## Resume PDF

The resume source of truth is the Typst file in `docs/resumes/`.

Build PDFs locally with:

```bash
node scripts/build-resumes.mjs
```

Requirements:

- `node`
- `typst`

The generated PDFs are ignored by Git and are rebuilt during deploy.

## Deployment

Deployment is handled by GitHub Actions on push to `main`.

Workflow:

1. Validate `docs/content.json`
2. Validate `docs/script.js`
3. Build resume PDFs from Typst
4. Publish `docs/` to GitHub Pages

In GitHub repository settings:

1. Go to `Settings` -> `Pages`
2. Set `Source` to `GitHub Actions`

## SEO

The site includes:

- `robots.txt`
- `sitemap.xml`
- canonical URL
- Open Graph tags
- Twitter meta tags
- `Person` schema in JSON-LD

## Domain

Custom domain is configured with:

- `docs/CNAME`
