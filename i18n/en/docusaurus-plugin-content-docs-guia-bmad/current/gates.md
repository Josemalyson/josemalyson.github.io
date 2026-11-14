---
title: "Playbook gates and BMAD sign-offs"
sidebar_label: "Gates"
description: "Gates Gates do playbook × sign-offs do BMAD O BMAD define momentos de sign-off que produzem um documento revisável ( Plan Inside an Organiz…"
hide_title: true
published: "2026-11-14"
reading_minutes: 3
pagination_prev: "caso-de-exemplo"
pagination_next: "arvore"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Gates*

# Gates do playbook × sign-offs do BMAD

O BMAD define momentos de sign-off que produzem um documento revisável ([Plan Inside an Organization](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/plan-inside-an-organization.md)). O playbook coloca os seus gates nesses pontos em vez de criar gates novos.

<div class="table-wrap">

| Fase | Gate do playbook | Sign-off BMAD | Skill | Artefato |
| --- | --- | --- | --- | --- |
| 1. Discovery | Problema e prioridade aceitos | — | `bmad-product-brief` | `_bmad-output/planning-artifacts/briefs/…/brief.md` |
| 2. Spec | Spec aprovada | PRD validate | `bmad-prd` (create, validate) | `_bmad-output/planning-artifacts/prds/…/prd.md` |
| 2. Spec | Spec aprovada | Architecture spine review | `bmad-architecture` | `_bmad-output/planning-artifacts/architecture/…/ARCHITECTURE-SPINE.md` |
| 3. Decomposição | Viabilidade e risco revisados | Readiness gate | `bmad-create-epics-and-stories`, `bmad-sprint-planning` | `epics.md`, `implementation-readiness.md`, `sprint-status.yaml` |
| 4. Implementação | Agente limitado; humano acompanha exceções | Aprovação do plano (`bmad-build`) | `bmad-build` | `spec-1-1-<slug>.md` + commit local |
| 5. Verificação | Review humano obrigatório | — | `bmad-code-review`, `bmad-walkthrough` | Review Triage Log, `deferred-work.md` |
| 6. Entrega | Gate de mudança | — | fora do BMAD: push, PR web, CI, merge humano | PR no GitHub |
| Fim do épico | Resultado validado | Retrospective verdict | `bmad-retrospective` | `epic-1-retro-<data>.md` |

</div>

A discussão mais ampla dos ciclos está em [Fundamentos · Ciclos e gates](/playbook/ai-first/fundamentos/ciclos-e-gates/).

[← Caso de exemplo](/guias/bmad/caso-de-exemplo/)

[Árvore do repositório →](/guias/bmad/arvore/)
