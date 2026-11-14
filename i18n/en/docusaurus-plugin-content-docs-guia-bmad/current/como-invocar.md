---
title: "How to invoke a skill"
sidebar_label: "How to invoke a skill"
description: "Como invocar Como invocar um skill em cada agente Os blocos deste guia usam o prefixo / . No Codex, troque por $ . Os skills são arquivos S…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "introducao"
pagination_next: "caso-de-exemplo"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Como invocar*

# Como invocar um skill em cada agente

Os blocos deste guia usam o prefixo `/`. No Codex, troque por `$`. Os skills são arquivos `SKILL.md` portáveis no padrão [Agent Skills](https://agentskills.io/specification) e podem ser customizados em `_bmad/custom/<skill>.toml`.

<div class="table-wrap">

| Agente | Onde o skill fica | Como invocar | Fonte |
| --- | --- | --- | --- |
| Claude Code | `.claude/skills/` | `/bmad-build` | [documentação](https://code.claude.com/docs/en/skills) |
| Cursor | `.agents/skills/` | `/` no chat do Agent, depois `bmad-build` | [documentação](https://cursor.com/docs/context/skills) |
| Codex | `.agents/skills/` | `$bmad-build` | [documentação](https://developers.openai.com/codex/skills) |
| Devin e outros | `.agents/skills/` (Devin também lê `.claude/skills/`) | skill pelo nome; no Devin CLI, `/bmad-build` | [documentação](https://docs.devin.ai/product-guides/skills) |

</div>

**Nomes atuais** na v6.12.4: o PRD é `bmad-prd` (intents create, update, validate) e a arquitetura é `bmad-architecture`. Nomes antigos, como `bmad-create-prd`, só existem com `--shims` na instalação (50 skills em vez de 29, testado em 14/11/2026).

Regras de condução: cada skill roda em **chat novo**. O `bmad-build` exige **árvore limpa** e **branch coerente**, faz commit local e **nunca faz push**.

No playbook: [Tutoriais operacionais](/playbook/ai-first/tutoriais/indice/).

[← Introdução](/guias/bmad/)

[Caso de exemplo →](/guias/bmad/caso-de-exemplo/)
