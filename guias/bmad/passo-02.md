---
title: "02 · Instalar o BMAD fixado e sem prompts"
sidebar_label: "02 · Instalar o BMAD fixado e sem prompts"
description: "Setup Objetivo Instalar o módulo BMad Method (bmm) para os agentes da equipe, com versão fixada. Entrada Raiz do repositório. Comando exato…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-01"
pagination_next: "passo-03"
---

*Setup*

### Objetivo

Instalar o módulo BMad Method (bmm) para os agentes da equipe, com versão fixada.

### Entrada

Raiz do repositório.

### Comando exato

```text
npx bmad-method@6.12.4 install --directory . --modules bmm \
  --tools claude-code,cursor,codex \
  --communication-language "Portuguese (Brazil)" \
  --document-output-language "Portuguese (Brazil)" --yes
```

### Resultado esperado [REAL]

```text
◆  ✅ Python UV check pass (uv 0.13.7 detected).
◆  claude-code configured: 29 skills → .claude/skills
◆  cursor configured: 29 skills → .agents/skills
╭─BMAD is ready to use!──────────────────────╮
│  ✓  BMad Core Module (v6.12.4, installed)  │
│  ✓  BMad Method (v6.12.4, installed)       │
│  ✓  codex (29 skills → .agents/skills)     │
│  Installed to: <repo>/_bmad                │
```

### Artefatos

_bmad/ (config, scripts, manifest, custom/), _bmad-output/ (vazio), .claude/skills/bmad-* (29), .agents/skills/bmad-* (29).

### Checkpoint

_bmad/_config/manifest.yaml mostra version: 6.12.4. IDs de ferramenta: npx bmad-method@6.12.4 install --list-tools.

### Doc oficial

[Install BMad (v6.12)](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/start/install-bmad.md)

Versão completa no playbook: [passo 02](/playbook/ai-first/tutoriais/passo-02/).

[← 01 · Repositório GitHub e módulo Go](/guias/bmad/passo-01/)

[03 · Conferir os skills instalados →](/guias/bmad/passo-03/)
