---
title: "07 · Repository context (AGENTS.md)"
sidebar_label: "07 · Repository context (AGENTS.md)"
description: "Setup Objetivo Registrar as regras do playbook para todo agente que abrir o repositório. Entrada Chat novo. Comando exato text…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-06"
pagination_next: "tutoriais/passo-08"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Setup*

### Objetivo

Registrar as regras do playbook para todo agente que abrir o repositório.

### Entrada

Chat novo.

### Comando exato

```text
/bmad-project-context set up AGENTS.md. Regras: sem acesso a produção, sem PII, dados sintéticos, branch no formato <tipo>/S-NNN-<slug>, todo commit com o trailer Story: S-001, testes com go vet ./... e go test ./...
```

### Resultado esperado [APROXIMADO]

```text
Bloco proposto para aprovação, gravado entre <!-- bmad:context --> e <!-- /bmad:context --> no AGENTS.md. O skill nunca faz commit.
```

### Artefatos

AGENTS.md (e, para Claude Code, proposta de @AGENTS.md no CLAUDE.md).

### Checkpoint

git diff AGENTS.md revisado por humano.

### Doc oficial

[Set and Maintain Project Context](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/existing-codebases/set-and-maintain-project-context.md)

[← 06 · Ask BMAD for guidance](/playbook/ai-first/tutoriais/passo-06)

[08 · Quality gate: install the skill and generate the hooks →](/playbook/ai-first/tutoriais/passo-08)
