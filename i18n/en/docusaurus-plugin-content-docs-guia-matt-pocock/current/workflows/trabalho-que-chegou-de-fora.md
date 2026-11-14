---
title: "Trabalho que chegou de fora"
sidebar_label: "Trabalho que chegou de fora"
description: "3 · Workflows · W4 · parcial Trabalho que chegou de fora Quando: issue ou relato de outra pessoa. O triage é a porta de entrada, não o cami…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "workflows/build-paralelo-de-uma-spec-inteira"
pagination_next: "workflows/revisao-periodica-de-arquitetura"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*3 · Workflows · W4 · parcial*

# Trabalho que chegou de fora

Quando: issue ou relato de outra pessoa. O triage é a porta de entrada, não o caminho do que você planejou.

**Cadeia:** [`/triage`](/guias/matt-pocock/skills/engineering#triage) → [`/implement`](/guias/matt-pocock/skills/the-main-flow#implement)

**Verificado:** a saída do triage e a rota de trabalho que chegou de fora. **Dedução:** se o relato for um bug, passar pelo diagnosing-bugs antes do implement. A página do triage não diz isso expressamente.

### Comandos no playbook AI-First

Trabalho que chega de uma issue externa entra como story, com evidências e sem PII no prompt. No BMAD:

```text
/bmad-build Fix <link da issue>
```

Fluxo completo: [Tutorial C](/playbook/ai-first/tutoriais/outros-fluxos/) e [guia BMAD](/guias/bmad/outros-fluxos/).

[← Build paralelo de uma spec inteira](/guias/matt-pocock/workflows/build-paralelo-de-uma-spec-inteira/)

[Revisão periódica de arquitetura →](/guias/matt-pocock/workflows/revisao-periodica-de-arquitetura/)
