---
title: "04 · Engineering"
sidebar_label: "04 · Engineering"
description: "4 · As 27 skills 04 · Engineering Mantém o código e o backlog saudáveis. Gera trabalho para o fluxo. Agrupadas nos 6 grupos do próprio Matt…"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "skills/shaping"
pagination_next: "skills/productivity"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*4 · As 27 skills*

# 04 · Engineering

Mantém o código e o backlog saudáveis. Gera trabalho para o fluxo.

Agrupadas nos 6 grupos do próprio Matt em [aihero.dev/skills](https://www.aihero.dev/skills). Cada card traz o que eu li na fonte indicada.

### `/improve-codebase-architecture` · você digita

Varre o código atrás de módulos rasos (interface quase tão complexa quanto o que esconde) e apresenta candidatos num relatório HTML.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | revisão periódica, fora da cadeia, ou antes de um refactor |
| Próximo | grilling sobre o candidato que você escolher |
| Sai com | relatório HTML. Não implementa nada |

</div>

fonte: página + SKILL.md [fonte original](https://www.aihero.dev/skills-improve-codebase-architecture)

### `diagnosing-bugs` · agente pode chamar

Seis fases: construir um loop de reprodução, minimizar, formular hipóteses, instrumentar, corrigir com teste de regressão, limpar.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | bug difícil, intermitente ou regressão de performance |
| Próximo | [retro](/guias/matt-pocock/skills/the-main-flow#retro), para perguntar o que teria evitado o bug |
| Sai com | reprodução que passou a verde, correção e teste de regressão. Segredos são redigidos |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-diagnosing-bugs)

### `/triage` · você digita

Move issues de outras pessoas por uma máquina de estados até virarem brief pronto para agente, pergunta ao relator, ou fechamento com motivo.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | issue ou relato de outra pessoa. **Não** para tickets gerados pelo to-tickets |
| Próximo | [implement](/guias/matt-pocock/skills/the-main-flow#implement) quando estiver pronto |
| Sai com | issue com um papel de categoria e um de estado. Exige o setup e o vocabulário de rótulos |

</div>

fonte: página + SKILL.md [fonte original](https://www.aihero.dev/skills-triage)

### `wizard` · agente pode chamar

Gera um script Bash interativo que conduz você por um procedimento manual: abre URLs, pede os valores, grava em .env e em secrets do GitHub.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | passo que só um humano pode executar |
| Próximo | volta ao fluxo que estava parado |
| Sai com | script Bash. O agente não o executa de ponta a ponta |

</div>

fonte: página + SKILL.md [fonte original](https://www.aihero.dev/skills-wizard)

### `/implement-spec` · você digita

Constrói a spec inteira em paralelo. Cada ticket vai para um subagente em worktree próprio, e os resultados entram num integration branch.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | spec e tickets prontos, com vários independentes. Substitui o implement |
| Próximo | o code-review roda sozinho no fim |
| Sai com | um integration branch com a spec inteira. PR rascunho só se o tracker fechar trabalho por PR, ou se você pedir, e só depois do primeiro merge (nota v1.3.0). Desde a v1.3.2, cada ticket ganha um implementer subagent novo, com contexto limpo; o merger subagent não precisa ser novo (commit a496f55). Exige harness com subagentes paralelos |

</div>

fonte: SKILL.md + página [fonte original](https://www.aihero.dev/skills-implement-spec)


### Comandos no playbook AI-First

Manutenção, bug e revisão de arquitetura no playbook:

```text
/bmad-architecture
/bmad-build Fix <link da issue>
/bmad-code-review
```

[Outros fluxos](/playbook/ai-first/tutoriais/outros-fluxos/) · [guia BMAD](/guias/bmad/outros-fluxos/).

[← 03 · Shaping](/guias/matt-pocock/skills/shaping/)

[05 · Productivity Skills →](/guias/matt-pocock/skills/productivity/)
