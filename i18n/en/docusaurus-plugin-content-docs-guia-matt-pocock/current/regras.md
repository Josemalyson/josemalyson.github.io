---
title: "2 · Composition rules"
sidebar_label: "2 · Composition rules"
description: "2 · Regras de composição Regras de composição Antes dos workflows, o que vale sobre como as skills se conectam. Vem das notas de versão e d…"
hide_title: true
published: "2026-11-14"
reading_minutes: 3
pagination_prev: "escolha-a-rota"
pagination_next: "workflows/fluxo-principal-idea-ate-entrega"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*2 · Regras de composição*

# Regras de composição

Antes dos workflows, o que vale sobre como as skills se conectam. Vem das notas de versão e das páginas, não de suposição.

- **Skill chama skill pela Skill tool, não por nome.** Na v1.3 o Matt trocou "rode /grilling" por "chame a Skill tool com grilling", porque nomear outra skill em texto não garantia que ela carregasse. verificado

- **Uma skill voltada a você não chama outra voltada a você.** A nota v1.3 diz que uma skill não pode chamar uma skill acionada pelo usuário. Quem orquestra precisa ser o humano. verificado

- **Instalar uma skill sozinha pode não funcionar.** `grill-me` e `grill-with-docs` dependem de `grilling`, e `grill-with-docs` também depende de `domain-modeling`. verificado

- **Tickets gerados pelo to-tickets não passam por triage.** Eles já nascem prontos para agente. O triage é para trabalho que chegou de fora. verificado

- **Wayfinder não constrói.** Ele mapeia e faz handoff. Ao fechar o mapa, você passa o número dele para o to-spec. verificado

- **Não rode implement em paralelo no mesmo checkout.** A página do implement cita um relato de commits caindo na sessão errada. Para build paralelo, use implement-spec. verificado

- **Subagente começa com contexto novo, nunca com fork da conversa.** Desde a v1.3.2, implement-spec, code-review, codebase-design, improve-codebase-architecture, wayfinder, research, grilling e chief-of-staff dizem isso de forma explícita. Alguns harnesses (Codex) fazem fork por padrão e jogam fora o contexto limpo que justifica o subagente. Fonte: commit [7739eae](https://github.com/mattpocock/skills/commit/7739eae) (#1341). verificado

- **Tickets do to-tickets viram sub-issues da issue de origem.** O `## Blocked by` some quando os bloqueios já são arestas nativas do tracker. Fonte: CHANGELOG 1.3.2 (#1188). verificado

[← 1 · Escolha a rota](/guias/matt-pocock/escolha-a-rota/)

[Fluxo principal: ideia até entrega →](/guias/matt-pocock/workflows/fluxo-principal-idea-ate-entrega/)
