---
title: "Mudança pequena, sem spec"
sidebar_label: "Mudança pequena, sem spec"
description: "3 · Workflows · W1 · parcial Mudança pequena, sem spec Quando: o trabalho cabe numa sessão. A spec só compensa quando o trabalho atravessa …"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "workflows/fluxo-principal-idea-ate-entrega"
pagination_next: "workflows/esforco-grande-mapa-primeiro"
---

*3 · Workflows · W1 · parcial*

# Mudança pequena, sem spec

Quando: o trabalho cabe numa sessão. A spec só compensa quando o trabalho atravessa sessões.

**Cadeia:** [`/grill-with-docs`](/guias/matt-pocock/skills/the-main-flow#grill-with-docs) → [`/implement`](/guias/matt-pocock/skills/the-main-flow#implement) → [`/code-review`](/guias/matt-pocock/skills/the-main-flow#code-review) → [`/retro`](/guias/matt-pocock/skills/the-main-flow#retro)

**Verificado:** o ask-matt diz que é possível pular a spec em build pequeno. **Revisto em 04/11:** o SKILL.md do implement diz "Implement the work described by the user in the spec or tickets" e só busca no tracker se você passar uma referência de ticket (v1.3.2, #1196). Ou seja, a referência é opcional. **Ainda não verificado:** se ele aceita bem só o contexto da conversa, sem spec nem ticket escritos.

### Comandos no playbook AI-First

Para uma mudança que cabe numa sessão, o playbook ainda recomenda story, branch e review humano. O atalho mais próximo é o Tutorial C / `bmad-build` direto na story:

```text
/bmad-build Fix <link da issue>
```

O quality gate continua na frente do commit: [passo 08](/playbook/ai-first/tutoriais/passo-08/). Outros fluxos: [guia BMAD](/guias/bmad/outros-fluxos/).

[← Fluxo principal: ideia até entrega](/guias/matt-pocock/workflows/fluxo-principal-idea-ate-entrega/)

[Esforço grande, mapa primeiro →](/guias/matt-pocock/workflows/esforco-grande-mapa-primeiro/)
