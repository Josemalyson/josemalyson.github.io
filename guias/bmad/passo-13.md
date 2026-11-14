---
title: "13 · Spec: PRD (validate)"
sidebar_label: "13 · Spec: PRD (validate)"
description: "2. Spec Objetivo Obter um relatório de achados sem alterar o PRD. Entrada Chat novo. Comando exato text /bmad-prd validate o PRD em _bmad-o…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-12"
pagination_next: "passo-14"
---

*2. Spec*

### Objetivo

Obter um relatório de achados sem alterar o PRD.

### Entrada

Chat novo.

### Comando exato

```text
/bmad-prd validate o PRD em _bmad-output/planning-artifacts/prds/
```

### Resultado esperado [APROXIMADO]

```text
Relatório de achados; o PRD não muda.
```

### Artefatos

Relatório HTML + .md na pasta do PRD.

### Checkpoint

Negócio e Tech Lead aprovam. Mudança no PRD só via bmad-prd update; nunca editar prd.md à mão.

### Doc oficial

[Plan Inside an Organization](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/plan-inside-an-organization.md)

Versão completa no playbook: [passo 13](/playbook/ai-first/tutoriais/passo-13/).

[← 12 · Spec: PRD (create)](/guias/bmad/passo-12/)

[14 · Spec: arquitetura (spine) →](/guias/bmad/passo-14/)
