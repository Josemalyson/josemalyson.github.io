---
title: "Repository tree"
sidebar_label: "Repository tree"
description: "Árvore Árvore do repositório (padrão BMAD 6.12.4) text repo/ ├── AGENTS.md bloco bmad:context + regra do loop de autocorreção ├── .githooks…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "gates"
pagination_next: "passo-00"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Árvore*

# Árvore do repositório (padrão BMAD 6.12.4)

```text
repo/
├── AGENTS.md                  # bloco bmad:context + regra do loop de autocorreção
├── .githooks/                 # pre-commit (14 categorias) e commit-msg, gerados pela skill
├── go.mod, *.go               # código do exemplo (Go)
├── _bmad/                     # config, scripts, manifest e custom/ (versionado)
│   └── custom/                # overrides (*.toml); *.user.toml fica fora do git
├── _bmad-output/              # versionado
│   ├── planning-artifacts/
│   │   ├── briefs/brief-<projeto>-<data>/brief.md
│   │   ├── prds/prd-<projeto>-<data>/prd.md
│   │   ├── architecture/architecture-<projeto>-<data>/ARCHITECTURE-SPINE.md
│   │   ├── epics.md
│   │   └── implementation-readiness.md
│   └── implementation-artifacts/
│       ├── sprint-status.yaml
│       ├── spec-1-1-<slug>.md
│       ├── deferred-work.md
│       └── epic-1-retro-<data>.md
├── .claude/skills/            # Claude Code: bmad-* e pre-commit-quality-gate
├── .agents/skills/            # Cursor, Codex, Devin e outros agentes: idem
├── evals/
├── scripts/
└── .github/workflows/
```

O quality gate de pre-commit (v0.4) vem do repositório público [custom-skills](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate). O loop de autocorreção está no `AGENTS.md`: até 3 tentativas, sem `--no-verify`, e handoff humano na 3ª falha.

No playbook: [Tutoriais operacionais](/playbook/ai-first/tutoriais/indice/).

[← Gates do playbook × sign-offs](/guias/bmad/gates/)

[00 · Pré-requisitos →](/guias/bmad/passo-00/)
