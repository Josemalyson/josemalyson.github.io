---
title: "03 · Shaping"
sidebar_label: "03 · Shaping"
description: "4 · As 27 skills 03 · Shaping Responde uma pergunta aberta e produz uma decisão que alimenta o fluxo. Agrupadas nos 6 grupos do próprio Mat…"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "skills/the-main-flow"
pagination_next: "skills/engineering"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*4 · As 27 skills*

# 03 · Shaping

Responde uma pergunta aberta e produz uma decisão que alimenta o fluxo.

Agrupadas nos 6 grupos do próprio Matt em [aihero.dev/skills](https://www.aihero.dev/skills). Cada card traz o que eu li na fonte indicada.

### `/wayfinder` · você digita

Mapeia um esforço grande demais para uma sessão como um mapa de decisões, e resolve uma decisão de cada vez.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | esforço que passa de uma sessão e cuja rota é incerta. Se couber numa sessão, use [grill-with-docs](/guias/matt-pocock/skills/the-main-flow#grill-with-docs) |
| Próximo | [to-spec](/guias/matt-pocock/skills/the-main-flow#to-spec) com o número do mapa |
| Sai com | mapa + decision tickets com label wayfinder:`<tipo>`. Faz handoff, não constrói |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-wayfinder)

### `prototype` · agente pode chamar

Responde uma pergunta de design com código que não vai para produção. Estado ou lógica vira um HTML único; UI vira variações alternáveis numa rota.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | pergunta de estado, lógica ou UI. Também usado pelo wayfinder |
| Próximo | volta para quem chamou |
| Sai com | **Conflito de fontes:** o CHANGELOG 1.3.0 diz que o protótipo fica num branch `prototype/<nome>`, com ponteiro na issue. O site atual (aihero.dev/skills) diz "código que você depois apaga". Não resolvi qual vale. Confira o SKILL.md do commit que você instalar |

</div>

fonte: página + SKILL.md [fonte original](https://www.aihero.dev/skills-prototype)

### `research` · agente pode chamar

Responde uma dúvida lendo fontes primárias (docs oficiais, código, specs, APIs) e grava um Markdown com citações. Roda em background.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | dúvida que precisa de fonte, não de opinião. Também usado pelo wayfinder |
| Próximo | [grill-with-docs](/guias/matt-pocock/skills/the-main-flow#grill-with-docs) ou [to-spec](/guias/matt-pocock/skills/the-main-flow#to-spec) |
| Sai com | um Markdown com citações, na pasta de notas do repo |

</div>

fonte: página + docs/research.md [fonte original](https://www.aihero.dev/skills-research)


### Comandos no playbook AI-First

Para mapear um esforço grande ou pesquisar antes de escrever código, o playbook usa brief, PRD e spine:

```text
/bmad-product-brief
/bmad-prd
/bmad-architecture
```

[Passos 11-14](/playbook/ai-first/tutoriais/passo-11/).

[← 02 · The Main Flow](/guias/matt-pocock/skills/the-main-flow/)

[04 · Engineering →](/guias/matt-pocock/skills/engineering/)
