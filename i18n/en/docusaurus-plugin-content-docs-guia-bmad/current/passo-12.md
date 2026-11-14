---
title: "12 · Spec: PRD (create)"
sidebar_label: "12 · Spec: PRD (create)"
description: "2. Spec Objetivo Transformar o brief em requisitos funcionais (IDs estáveis) e não funcionais. Entrada Chat novo. Comando exato text /bmad-…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-11"
pagination_next: "passo-13"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*2. Spec*

### Objetivo

Transformar o brief em requisitos funcionais (IDs estáveis) e não funcionais.

### Entrada

Chat novo.

### Comando exato

```text
/bmad-prd create. Fast path. Use o brief em _bmad-output/planning-artifacts/briefs/.
```

### Resultado esperado [APROXIMADO]

```text
PRD com FRs e NFRs; decisões técnicas no addendum.
```

### Artefatos

_bmad-output/planning-artifacts/prds/prd-&lt;projeto>-&lt;data>/prd.md, addendum.md e .memlog.md (trilha de decisões, append-only)

### Checkpoint

Todo requisito do brief aparece no PRD.

### Doc oficial

[Define Requirements and a Specification](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/define-requirements-and-a-specification.md)

Versão completa no playbook: [passo 12](/playbook/ai-first/tutoriais/passo-12/).

[← 11 · Discovery: product brief](/guias/bmad/passo-11/)

[13 · Spec: PRD (validate) →](/guias/bmad/passo-13/)
