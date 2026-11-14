---
title: "07 · Contexto do repositório (AGENTS.md)"
sidebar_label: "07 · Contexto do repositório (AGENTS.md)"
description: "Setup Objetivo Registrar as regras do playbook para todo agente que abrir o repositório. Entrada Chat novo. Comando exato text /bmad-projec…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-06"
pagination_next: "passo-08"
---

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

Versão completa no playbook: [passo 07](/playbook/ai-first/tutoriais/passo-07/).

[← 06 · Pedir orientação ao BMAD](/guias/bmad/passo-06/)

[08 · Quality gate: instalar a skill e gerar os hooks →](/guias/bmad/passo-08/)
