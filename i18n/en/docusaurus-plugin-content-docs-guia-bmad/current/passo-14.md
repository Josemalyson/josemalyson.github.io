---
title: "14 · Spec: architecture (spine)"
sidebar_label: "14 · Spec: architecture (spine)"
description: "2. Spec Objetivo Registrar só as decisões que divergiriam se tomadas separadamente. Entrada Chat novo. O padrão do skill é Coaching; peça F…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-13"
pagination_next: "passo-15"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*2. Spec*

### Objetivo

Registrar só as decisões que divergiriam se tomadas separadamente.

### Entrada

Chat novo. O padrão do skill é Coaching; peça Fast path para caber no tempo.

### Comando exato

```text
/bmad-architecture create the architecture a partir do PRD. Stack: Go, net/http da biblioteca padrão. Fast path.
```

### Resultado esperado [APROXIMADO]

```text
Decisões AD-n com alternativas pesadas e tags [ASSUMPTION].
```

### Artefatos

_bmad-output/planning-artifacts/architecture/architecture-&lt;projeto>-&lt;data>/ARCHITECTURE-SPINE.md (decisões AD-n; não há arquivos ADR)

### Checkpoint

Tech Lead aprova as AD-n.

### Doc oficial

[Design UX and Architecture](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/design-ux-and-architecture.md)

Versão completa no playbook: [passo 14](/playbook/ai-first/tutoriais/passo-14/).

[← 13 · Spec: PRD (validate)](/guias/bmad/passo-13/)

[15 · Decomposição: épicos e stories →](/guias/bmad/passo-15/)
