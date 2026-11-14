---
title: "Fechamento de PR"
sidebar_label: "Fechamento de PR"
description: "3 · Workflows · W12 · verificado Fechamento de PR Quando: a mudança passou no review e vai virar Pull Request. Cadeia: /code-review (/guias…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "workflows/aprender-um-tema"
pagination_next: "workflows/passo-que-so-um-humano-executa"
---

*3 · Workflows · W12 · verificado*

# Fechamento de PR

Quando: a mudança passou no review e vai virar Pull Request.

**Cadeia:** [`/code-review`](/guias/matt-pocock/skills/the-main-flow#code-review) → [`/pr`](/guias/matt-pocock/skills/reference#pr) → [`/retro`](/guias/matt-pocock/skills/the-main-flow#retro)

**Sai com:** corpo do PR com Summary (um visual), Evidence e Merge Danger (porta de mão única ou dupla). O ask-matt roteia o pr como fechamento do PR. **Fonte:** CHANGELOG 1.3.0 e página do pr.

### Comandos no playbook AI-First

Fechamento no playbook: trailers no commit, push, PR na interface web, CI e merge humano.

```text
git interpret-trailers --trailer "Story: S-001" --trailer "AI-Assisted: <skill>"
```

[Passos 24-27](/playbook/ai-first/tutoriais/passo-24/) · [guia BMAD](/guias/bmad/passo-24/).

[← Aprender um tema](/guias/matt-pocock/workflows/aprender-um-tema/)

[Passo que só um humano executa →](/guias/matt-pocock/workflows/passo-que-so-um-humano-executa/)
