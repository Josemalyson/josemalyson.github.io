---
title: "Build paralelo de uma spec inteira"
sidebar_label: "Build paralelo de uma spec inteira"
description: "3 · Workflows · W6 · verificado Build paralelo de uma spec inteira Quando: a spec já virou muitos tickets, e vários são independentes. Cade…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "workflows/esforco-grande-mapa-primeiro"
pagination_next: "workflows/trabalho-que-chegou-de-fora"
---

*3 · Workflows · W6 · verificado*

# Build paralelo de uma spec inteira

Quando: a spec já virou muitos tickets, e vários são independentes.

**Cadeia:** [`/to-tickets`](/guias/matt-pocock/skills/the-main-flow#to-tickets) → [`/implement-spec`](/guias/matt-pocock/skills/engineering#implement-spec) → [`/retro`](/guias/matt-pocock/skills/the-main-flow#retro)

**Sai com:** um integration branch com todos os tickets. O implement-spec roda o code-review sozinho no fim. **Exige:** harness que rode subagentes em paralelo com worktrees. Sem isso, é só um implement mais lento. **Fonte:** SKILL.md do implement-spec e página dele.

### Comandos no playbook AI-First

O playbook limita o agente por story e exige árvore limpa e branch coerente no `bmad-build`. Não rode dois builds no mesmo checkout.

```text
/bmad-build
```

Contexto: [passo 19](/playbook/ai-first/tutoriais/passo-19/) e [guia BMAD](/guias/bmad/passo-19/).

[← Esforço grande, mapa primeiro](/guias/matt-pocock/workflows/esforco-grande-mapa-primeiro/)

[Trabalho que chegou de fora →](/guias/matt-pocock/workflows/trabalho-que-chegou-de-fora/)
