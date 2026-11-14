---
title: "Pré-requisito"
sidebar_label: "Pré-requisito"
description: "3 · Workflows · W0 · uma vez · verificado Pré-requisito Quando: primeira vez em cada repositório. Não é passo da cadeia, é o que todas as o…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "workflows/retro-devolve-aprendizado-para-as-instrucoes"
pagination_next: "skills/getting-started"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*3 · Workflows · W0 · uma vez · verificado*

# Pré-requisito

Quando: primeira vez em cada repositório. Não é passo da cadeia, é o que todas as outras assumem.

**Cadeia:** [`/setup-matt-pocock-skills`](/guias/matt-pocock/skills/getting-started#setup-matt-pocock-skills)

**Sai com:** docs/agents/issue-tracker.md e docs/agents/domain.md, mais triage-labels.md se o triage estiver instalado, e uma seção "Agent skills" no CLAUDE.md ou AGENTS.md. Ele mostra o que vai escrever e espera você confirmar.


### Comandos no playbook AI-First

O equivalente de configurar o repositório uma vez, no playbook, é a sequência de setup: instalar o BMAD, gravar o `AGENTS.md` e instalar o quality gate.

```text
npx bmad-method@6.12.4 install
/bmad-project-context set up AGENTS.md
/pre-commit-quality-gate Gere .githooks/pre-commit e .githooks/commit-msg para este repositório.
```

[Passos 00–10](/playbook/ai-first/tutoriais/passo-00/) · [guia BMAD](/guias/bmad/passo-00/).

[← Retro devolve aprendizado para as instruções](/guias/matt-pocock/workflows/retro-devolve-aprendizado-para-as-instrucoes/)

[01 · Getting Started →](/guias/matt-pocock/skills/getting-started/)
