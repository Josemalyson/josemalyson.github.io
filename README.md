# josemalyson.github.io

Source for [josemalyson.github.io](https://josemalyson.github.io/). Docusaurus 3.10, default locale `pt-BR`, English at `/en/`.

```bash
npm ci
npm start
npm run build
```

The repository root also contains the built HTML (`index.html`, `docs/`, `en/`, `trilhas/`, `assets/`, `img/`) so GitHub Pages can serve the site from the `main` branch. `trailingSlash` is `true`: every route is `path/index.html`, the canonical URL ends with `/`, and GitHub Pages 301s the no-slash URL to that canonical. Do not also emit `path.html`. A sibling file and directory (`trilhas.html` next to `trilhas/`) makes `/trilhas/` 404.

After a source change, rebuild and copy the output before pushing:

```bash
npm run build
rm -rf assets en img trilhas videos tutoriais playbook/ai-first
rm -f index.html 404.html sitemap.xml
find docs -name '*.html' -delete
cp -a build/. .
```

`docs/aws/bedrock.md` stays; the generated page is `docs/aws/bedrock/index.html`.

## Add a tutorial card

Edit `src/data/site.ts` and append an object to `tutorials`:

- `version`: published version, or `null` for an article without one
- `date`: `YYYY-MM-DD`
- `href`: absolute URL or an internal path such as `/tutoriais/...` or `/docs/...`
- `repo`: repository URL, or `null`
- `title` and `summary`: both `pt-BR` and `en`

A long tutorial can be a Markdown file in `tutoriais/`. That folder is a second docs plugin, so `/tutoriais/<slug>` uses the same article layout as Bedrock. The English file, when the full text stays in Portuguese, goes in `i18n/en/docusaurus-plugin-content-docs-tutoriais/current/`.

Then rebuild and sync the site output as above.

The AI-First playbook (v0.4) is a docs section at `/playbook/ai-first/` (English at `/en/playbook/ai-first/`). Source pages live in `playbook/`. The sidebar is `sidebarsPlaybook.ts`. English titles and the intro note live in `i18n/en/docusaurus-plugin-content-docs-playbook/current/`; the body of each page stays in Portuguese. `/tutoriais/ai-first-playbook` redirects to the intro. The repository and PDF stay at https://github.com/Josemalyson/ai-first-playbook.

Previous and next follow the reading order (fundamentals, then steps 00–28), even where the sidebar groups the guardrail steps together. To add a step, create `playbook/tutoriais/passo-NN.md`, mirror it under the English folder with an English title, and add the id to `sidebarsPlaybook.ts`.

## Add a learning trail

1. Put the self-contained lab at `static/trilhas/<slug>/index.html`. Strip employer and client names, private paths, vault notes, internal tooling, and agent ids before committing. The file must not call private hosts. External assets must be `https`.
2. Append the trail to the matching theme in `src/data/trails.ts`. Set `href` to `/trilhas/<slug>/`. Themes follow the study order 00–09.
3. If a new file is a shorter copy of a trail already in the list, keep the more complete one.
4. Rebuild and sync.

The index at `/trilhas/` reads that list, grouped by theme. The lab itself is a static HTML file, so the link is a normal `<a href>`, not a client-side route.

## Add a video

Append one object to `src/data/videos.json`. The `/videos/` page reads that file only.

- `id`: the 11-character YouTube id. The thumbnail is `https://i.ytimg.com/vi/<id>/hqdefault.jpg`.
- `url`: `https://www.youtube.com/watch?v=<id>`
- `title`, `channel`, `category`: `category` must be one of the eight existing themes, or a new theme name (it becomes its own group, in the order it first appears).
- `summary_pt`: Portuguese summary, kept as written.
- `collected_at`: `YYYY-MM-DD`, or `""` when there is no date.
- `source`: where the item was collected. The page does not show this field.

Then rebuild and sync the site output as above.

## Open source and references

`projects` in `src/data/site.ts` is work published by Josemalyson Oliveira. Third-party tools belong in `references`, with the author and the upstream repository, not a fork.

## Bedrock URLs

The 2024 article stays at `/docs/aws/bedrock/` and `/en/docs/aws/bedrock/`. The no-slash URLs redirect there.
