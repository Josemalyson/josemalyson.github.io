---
title: "05 · Story branch"
sidebar_label: "05 · Story branch"
description: "Setup Objetivo Criar o branch com o Story ID antes de qualquer artefato. Entrada Raiz do repositório. Comando exato text git switch -c feat…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-04"
pagination_next: "passo-06"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Setup*

### Objetivo

Criar o branch com o Story ID antes de qualquer artefato.

### Entrada

Raiz do repositório.

### Comando exato

```text
git switch -c feat/S-001-consulta-saldo
```

### Resultado esperado [REAL]

```text
Switched to a new branch 'feat/S-001-consulta-saldo'
```

### Artefatos

Branch local.

### Checkpoint

O nome carrega o Story ID (página 05). bmad-build confere se o branch combina com a tarefa.

### Doc oficial

[Build a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/build-a-change.md)

Versão completa no playbook: [passo 05](/playbook/ai-first/tutoriais/passo-05/).

[← 04 · Commit da instalação](/guias/bmad/passo-04/)

[06 · Pedir orientação ao BMAD →](/guias/bmad/passo-06/)
