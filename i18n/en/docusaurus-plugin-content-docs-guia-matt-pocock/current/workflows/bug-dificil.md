---
title: "Bug difícil"
sidebar_label: "Bug difícil"
description: "3 · Workflows · W7 · verificado Bug difícil Quando: falha intermitente, regressão ou causa desconhecida. Cadeia: /diagnosing-bugs (/guias/m…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "workflows/revisao-periodica-de-arquitetura"
pagination_next: "workflows/standalones-prototipo-pesquisa-e-decisao"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*3 · Workflows · W7 · verificado*

# Bug difícil

Quando: falha intermitente, regressão ou causa desconhecida.

**Cadeia:** [`/diagnosing-bugs`](/guias/matt-pocock/skills/engineering#diagnosing-bugs) → [`/retro`](/guias/matt-pocock/skills/the-main-flow#retro)

**Sai com:** reprodução que passou a verde, teste de regressão e correção. A página diz que o ask-matt manda você ao retro depois do diagnóstico. Segredos são redigidos antes de qualquer saída.

### Comandos no playbook AI-First

Bug no playbook: reproduzir fora de produção, teste que falha antes da correção, correção mínima, review humano.

```text
/bmad-build Fix <link da issue>
```

Branch no formato `fix/S-xxx`, chat novo. [Tutorial C](/playbook/ai-first/tutoriais/outros-fluxos/) · [guia BMAD](/guias/bmad/outros-fluxos/).

[← Revisão periódica de arquitetura](/guias/matt-pocock/workflows/revisao-periodica-de-arquitetura/)

[Standalones: protótipo, pesquisa e decisão →](/guias/matt-pocock/workflows/standalones-prototipo-pesquisa-e-decisao/)
