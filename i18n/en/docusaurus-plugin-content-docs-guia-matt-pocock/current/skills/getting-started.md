---
title: "01 · Getting Started"
sidebar_label: "01 · Getting Started"
description: "4 · As 27 skills 01 · Getting Started Configure uma vez, depois se oriente. Agrupadas nos 6 grupos do próprio Matt em aihero.dev/skills (ht…"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "workflows/pre-requisito"
pagination_next: "skills/the-main-flow"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*4 · As 27 skills*

# 01 · Getting Started

Configure uma vez, depois se oriente.

Agrupadas nos 6 grupos do próprio Matt em [aihero.dev/skills](https://www.aihero.dev/skills). Cada card traz o que eu li na fonte indicada.

### `/setup-matt-pocock-skills` · você digita

Lê o git remote, o CLAUDE.md e o GLOSSARY.md, propõe o que encontrou e espera sua confirmação antes de escrever.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | primeira vez num repositório |
| Próximo | [grill-with-docs](/guias/matt-pocock/skills/the-main-flow#grill-with-docs) ou [triage](/guias/matt-pocock/skills/engineering#triage) |
| Sai com | docs/agents/issue-tracker.md, domain.md, triage-labels.md (se houver triage), seção "Agent skills". Desde outubro, também cria os rótulos de triagem no tracker (commit #1197, título do commit) |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-setup-matt-pocock-skills)

### `/ask-matt` · roteador

Recebe sua situação e devolve a skill ou sequência, com os pontos onde as decisões são suas. Não grava nada. Desde outubro, lê as skills instaladas antes de rotear (commit b645f47, título do commit).

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | não sabe a skill, ou duas parecem iguais |
| Próximo | depende da resposta |
| Sai com | recomendação de rota, sem arquivos |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-ask-matt)


### Comandos no playbook AI-First

O equivalente de configurar o repositório uma vez, no playbook, é a sequência de setup: instalar o BMAD, gravar o `AGENTS.md` e instalar o quality gate.

```text
npx bmad-method@6.12.4 install
/bmad-project-context set up AGENTS.md
/pre-commit-quality-gate Gere .githooks/pre-commit e .githooks/commit-msg para este repositório.
```

[Passos 00-10](/playbook/ai-first/tutoriais/passo-00/) · [guia BMAD](/guias/bmad/passo-00/).

[← Pré-requisito](/guias/matt-pocock/workflows/pre-requisito/)

[02 · The Main Flow →](/guias/matt-pocock/skills/the-main-flow/)
