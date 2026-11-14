# josemalyson.github.io

Source for [josemalyson.github.io](https://josemalyson.github.io/). Docusaurus 3.10, default locale `pt-BR`, English at `/en/`.

```bash
npm ci
npm start
npm run build
```

The repository root also contains the built HTML (`index.html`, `docs/`, `en/`, `trilhas/`, `assets/`, `img/`) so GitHub Pages can serve the site from the `main` branch. After a source change, rebuild and copy the output before pushing:

```bash
npm run build
rm -rf assets en img trilhas
rm -f index.html 404.html sitemap.xml
cp -a build/. .
# GitHub Pages cannot serve trilhas.html and the trilhas/ directory together.
mv trilhas.html trilhas/index.html
mv en/trilhas.html en/trilhas/index.html
```

`docs/aws/bedrock.md` stays; the generated page is `docs/aws/bedrock.html`.

## Add a tutorial card

Edit `src/data/site.ts` and append an object to `tutorials`:

- `version`: published version, or `null` for an article without one
- `date`: `YYYY-MM-DD`
- `href`: absolute URL or an internal path such as `/docs/...`
- `repo`: repository URL, or `null`
- `title` and `summary`: both `pt-BR` and `en`

Then rebuild and sync the site output as above.

## Add a learning trail

1. Put the self-contained lab at `static/trilhas/<slug>/index.html`. Strip private paths, vault notes, internal tooling, and agent ids before committing. The file must not call private hosts.
2. Append an object to `trails` in `src/data/site.ts`. Set `href` to `/trilhas/<slug>/`. Include version, date, level, duration, and a one-paragraph summary in both languages.
3. Rebuild and sync.

The index at `/trilhas` reads that list. The lab itself is a static HTML file, so the link is a normal `<a href>`, not a client-side route.

## Bedrock URLs

The 2024 article stays at `/docs/aws/bedrock` and `/en/docs/aws/bedrock`.
