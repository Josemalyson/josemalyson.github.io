---
title: "Passo que só um humano executa"
sidebar_label: "Passo que só um humano executa"
description: "3 · Workflows · W13 · verificado Passo que só um humano executa Quando: credencial, painel externo, migração ou cutover. Algo que o agente …"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "workflows/fechamento-de-pr"
pagination_next: "workflows/pesquisa-em-background-enquanto-voce-segue"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*3 · Workflows · W13 · verificado*

# Passo que só um humano executa

Quando: credencial, painel externo, migração ou cutover. Algo que o agente não consegue fazer sozinho.

**Cadeia:** [`/wizard`](/guias/matt-pocock/skills/engineering#wizard)

**Sai com:** script Bash guiado. O agente não roda o script de ponta a ponta, porque ele abre navegador e espera você.

### Comandos no playbook AI-First

O playbook marca gates humanos: aprovação de PRD e spine, review do diff, merge. O agente não faz push e nao mistura autor e revisor. [Passo 27](/playbook/ai-first/tutoriais/passo-27/) · [guia BMAD](/guias/bmad/passo-27/).

[← Fechamento de PR](/guias/matt-pocock/workflows/fechamento-de-pr/)

[Pesquisa em background enquanto você segue →](/guias/matt-pocock/workflows/pesquisa-em-background-enquanto-voce-segue/)
