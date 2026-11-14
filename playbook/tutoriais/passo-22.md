---
title: "22 · Code review independente"
sidebar_label: "22 · Code review independente"
description: "5. Verificação Objetivo Segunda revisão agentica, em chat novo, de preferência com outro modelo. Entrada Chat novo. Comando exato text…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-21"
pagination_next: "tutoriais/passo-23"
---

*5. Verificação*

### Objetivo

Segunda revisão agentica, em chat novo, de preferência com outro modelo.

### Entrada

Chat novo.

### Comando exato

```text
/bmad-code-review Review the current branch against _bmad-output/implementation-artifacts/spec-1-1-<slug>.md
```

### Resultado esperado [APROXIMADO]

```text
Achados com severidade (low/medium/high), roteados para patch, defer ou decision needed. Você decide se aplica os patches.
```

### Artefatos

Patches aplicados (se aprovados); itens adiados em _bmad-output/implementation-artifacts/deferred-work.md

### Checkpoint

Nenhum achado high aberto.

### Doc oficial

[Review a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/review-a-change.md)

[← 21 · Verificação local](/playbook/ai-first/tutoriais/passo-21)

[23 · Walkthrough para o review humano →](/playbook/ai-first/tutoriais/passo-23)
