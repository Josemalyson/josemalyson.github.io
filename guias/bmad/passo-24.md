---
title: "24 · Trailers da página 05 no commit do agente"
sidebar_label: "24 · Trailers da página 05 no commit do agente"
description: "5. Verificação Objetivo Adicionar Story e AI-Assisted ao commit local do bmad-build (ainda sem push, amend seguro). Entrada Raiz do reposit…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-23"
pagination_next: "passo-25"
---

*5. Verificação*

### Objetivo

Adicionar Story e AI-Assisted ao commit local do bmad-build (ainda sem push, amend seguro).

### Entrada

Raiz do repositório.

### Comando exato

```text
git commit --amend --no-edit --trailer "Story: S-001" --trailer "AI-Assisted: bmad+<agente>"
git log -1 --format='%s%n%n%b'
```

### Resultado esperado [REAL]

```text
feat(saldo): GET /contas/{id}/saldo com dados sintéticos

Story: S-001
AI-Assisted: bmad+<agente>
```

### Artefatos

Commit reescrito localmente.

### Checkpoint

Trailers presentes; nada foi enviado ao remoto antes. O amend também passa pelos hooks: no ensaio, os 16 steps e o commit-msg deram PASS de novo.

### Doc oficial

[git interpret-trailers](https://git-scm.com/docs/git-interpret-trailers)

Versão completa no playbook: [passo 24](/playbook/ai-first/tutoriais/passo-24/).

[← 23 · Walkthrough para o review humano](/guias/bmad/passo-23/)

[25 · Push do branch →](/guias/bmad/passo-25/)
