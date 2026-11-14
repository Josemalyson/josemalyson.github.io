---
title: "Fluxo principal: ideia até entrega"
sidebar_label: "Fluxo principal: ideia até entrega"
description: "3 · Workflows · W2 · a espinha · verificado Fluxo principal: ideia até entrega Quando: mudança de código que você decidiu fazer e que pode p…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "regras"
pagination_next: "workflows/mudanca-pequena-sem-spec"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*3 · Workflows · W2 · a espinha · verificado*

# Fluxo principal: ideia até entrega

Quando: mudança de código que você decidiu fazer e que pode passar de uma sessão.

**Cadeia:** [`/grill-with-docs`](/guias/matt-pocock/skills/the-main-flow#grill-with-docs) → [`/to-spec`](/guias/matt-pocock/skills/the-main-flow#to-spec) → [`/to-tickets`](/guias/matt-pocock/skills/the-main-flow#to-tickets) → [`/implement`](/guias/matt-pocock/skills/the-main-flow#implement) → [`/code-review`](/guias/matt-pocock/skills/the-main-flow#code-review) → [`/retro`](/guias/matt-pocock/skills/the-main-flow#retro)

**Sai com:** GLOSSARY.md e ADRs · spec no tracker · tickets agent-ready · commits na branch atual · relatório do review · sugestões de ajuste no ambiente.
**Fonte:** página do grill-with-docs, to-spec, to-tickets, implement, retro, e a nota v1.3.

### Comandos no playbook AI-First

Este é o fluxo longo, da ideia à entrega. No playbook ele é o Tutorial A, com BMAD Method 6.12.4 e o quality gate de pre-commit.

```text
/bmad-product-brief
/bmad-prd
/bmad-architecture
/bmad-create-epics-and-stories
/bmad-sprint-planning
/bmad-build
/bmad-code-review
/bmad-retrospective
```

Antes do primeiro `/bmad-build`, o playbook instala o gate:

```text
/pre-commit-quality-gate Gere .githooks/pre-commit e .githooks/commit-msg para este repositório.
```

Leia o passo a passo no [guia de bolso BMAD](/guias/bmad/) ou no [playbook](/playbook/ai-first/tutoriais/indice/).

[← 2 · Regras de composição](/guias/matt-pocock/regras/)

[Mudança pequena, sem spec →](/guias/matt-pocock/workflows/mudanca-pequena-sem-spec/)
