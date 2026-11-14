---
title: "06 · Reference Skills"
sidebar_label: "06 · Reference Skills"
description: "4 · As 27 skills 06 · Reference Skills A camada reutilizável que outras skills chamam. Raramente se usa sozinha. Agrupadas nos 6 grupos do …"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "skills/productivity"
pagination_next: "skills/em-progresso"
---

*4 · As 27 skills*

# 06 · Reference Skills

A camada reutilizável que outras skills chamam. Raramente se usa sozinha.

Agrupadas nos 6 grupos do próprio Matt em [aihero.dev/skills](https://www.aihero.dev/skills). Cada card traz o que eu li na fonte indicada.

### `grilling` · primitiva

A entrevista em rodadas por trás de grill-me, grill-with-docs, triage, wayfinder e improve-codebase-architecture.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | chamada por outra skill. As portas de entrada são [grill-me](/guias/matt-pocock/skills/productivity#grill-me) e [grill-with-docs](/guias/matt-pocock/skills/the-main-flow#grill-with-docs) |
| Próximo | devolve o controle a quem chamou |
| Sai com | respostas que alimentam o artefato da skill que chamou |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-grilling)

### `pr` · agente pode chamar

Define a forma do corpo de um Pull Request: um Summary visual, Evidence de que funciona, e Merge Danger (porta de mão única ou dupla).

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | ao escrever o corpo de um PR, depois do code-review |
| Próximo | [retro](/guias/matt-pocock/skills/the-main-flow#retro) |
| Sai com | corpo de PR em Markdown. Não é página HTML |

</div>

fonte: página + CHANGELOG 1.3.0 [fonte original](https://www.aihero.dev/skills-pr)

### `codebase-design` · agente pode chamar

O vocabulário para desenhar módulos profundos: módulo, interface, profundidade, seam, adaptador, alavancagem, localidade.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | ao desenhar um módulo. Usado pelo improve-codebase-architecture |
| Próximo | volta a quem chamou |
| Sai com | vocabulário e princípios. Não cria arquivo |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-codebase-design)

### `domain-modeling` · agente pode chamar

Desafia termos ambíguos e registra o vocabulário e as decisões difíceis de reverter, à medida que o modelo muda.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | termo inconsistente, ou decisão arquitetural difícil de reverter. Ler o GLOSSARY.md não conta |
| Próximo | volta a quem chamou, em geral [grill-with-docs](/guias/matt-pocock/skills/the-main-flow#grill-with-docs) |
| Sai com | GLOSSARY.md; ADR só quando passa nos 3 testes (difícil de reverter, sem contexto óbvio, trade-off real) |

</div>

fonte: página + SKILL.md [fonte original](https://www.aihero.dev/skills-domain-modeling)

### `tdd` · agente pode chamar

Material de referência para vermelho, verde, uma fatia vertical de cada vez. Não é um condutor de fases.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | feature ou bug que você quer fazer com teste primeiro |
| Próximo | [code-review](/guias/matt-pocock/skills/the-main-flow#code-review) |
| Sai com | testes e implementação em fatias. O passo de refatoração foi removido da skill; a refatoração fica no code-review. Issue #589 aberta |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-tdd)


### Comandos no playbook AI-First

O playbook não invoca uma skill de referência isolada: o `bmad-build` já descreve o plano, e o review humano cobre o diff. O contrato do repositório está no [AGENTS.md (passo 07)](/playbook/ai-first/tutoriais/passo-07/) e o checklist de review em [Outros fluxos](/playbook/ai-first/tutoriais/outros-fluxos/).

[← 05 · Productivity Skills](/guias/matt-pocock/skills/productivity/)

[Em progresso →](/guias/matt-pocock/skills/em-progresso/)
