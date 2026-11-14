---
title: "22 · Independent code review"
sidebar_label: "22 · Independent code review"
description: "5. Verificação Objetivo Segunda revisão agentica, em chat novo, de preferência com outro modelo. Entrada Chat novo. Comando exato text…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-21"
pagination_next: "tutoriais/passo-23"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

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


Guia de bolso: [passo 22 no guia BMAD](/guias/bmad/passo-22/).

[← 21 · Local verification](/playbook/ai-first/tutoriais/passo-21)

[23 · Walkthrough for the human review →](/playbook/ai-first/tutoriais/passo-23)
