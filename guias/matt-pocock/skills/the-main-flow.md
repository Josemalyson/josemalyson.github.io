---
title: "02 · The Main Flow"
sidebar_label: "02 · The Main Flow"
description: "4 · As 27 skills 02 · The Main Flow A espinha ideia → entrega, em ordem. Agrupadas nos 6 grupos do próprio Matt em aihero.dev/skills (https…"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "skills/getting-started"
pagination_next: "skills/shaping"
---

*4 · As 27 skills*

# 02 · The Main Flow

A espinha ideia → entrega, em ordem.

Agrupadas nos 6 grupos do próprio Matt em [aihero.dev/skills](https://www.aihero.dev/skills). Cada card traz o que eu li na fonte indicada.

### `/grill-with-docs` · você digita

Entrevista sobre a mudança e registra vocabulário e decisões à medida que avança. Uma sessão só.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | mudança de código que cabe numa sessão. Mais de uma sessão: [wayfinder](/guias/matt-pocock/skills/shaping#wayfinder) |
| Próximo | [to-spec](/guias/matt-pocock/skills/the-main-flow#to-spec) se passar de uma sessão, [implement](/guias/matt-pocock/skills/the-main-flow#implement) se não |
| Sai com | GLOSSARY.md; docs/adr/ quando a decisão passa nos 3 critérios. Precisa de domain-modeling e grilling instalados |

</div>

fonte: página da skill + SKILL.md [fonte original](https://www.aihero.dev/skills-grill-with-docs)

### `/to-spec` · você digita

Transforma uma conversa já alinhada numa spec e publica no tracker. Só vale o custo quando o trabalho atravessa sessões.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | decisões fechadas, ou mapa do [wayfinder](/guias/matt-pocock/skills/shaping#wayfinder) fechado (passe o número do mapa) |
| Próximo | [to-tickets](/guias/matt-pocock/skills/the-main-flow#to-tickets) na mesma janela, sem limpar o contexto |
| Sai com | spec no tracker. Tickets são descartáveis, a spec não |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-to-spec)

### `/to-tickets` · você digita

Quebra spec, plano ou conversa em tickets tracer-bullet, cada um com suas dependências.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | spec publicada, ou conversa já decidida |
| Próximo | [implement](/guias/matt-pocock/skills/the-main-flow#implement), ou [implement-spec](/guias/matt-pocock/skills/engineering#implement-spec) para build paralelo |
| Sai com | tickets agent-ready. **Não passe por triage.** |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-to-tickets)

### `/implement` · você digita

Constrói um ticket em código, com teste primeiro, e fecha com code-review. Um ticket por chamada.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | um ticket, na branch em que você já está. Não cria branch nem pergunta |
| Próximo | [code-review](/guias/matt-pocock/skills/the-main-flow#code-review) |
| Sai com | commits na branch atual |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-implement)

### `/code-review` · agente pode chamar

Revisa a mudança desde um ponto fixo em dois eixos, Standards e Spec, com subagentes separados. Há outro /code-review, do Claude Code, que caça bugs. Este não faz isso.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | mudança que você considera pronta, antes do commit final |
| Próximo | [retro](/guias/matt-pocock/skills/the-main-flow#retro), ou [pr](/guias/matt-pocock/skills/reference#pr) se for abrir PR |
| Sai com | relatório com ## Standards e ## Spec. Standards usa o CODING_STANDARDS.md do repo mais uma linha base de code smells |

</div>

fonte: SKILL.md + página da skill [fonte original](https://www.aihero.dev/skills-code-review)

### `/retro` · você digita

Olha para a sessão e propõe mudanças no ambiente do agente, não no código: checks, padrões, arquivos de orientação. Só propõe.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | fim do fluxo principal, ou depois de [diagnosing-bugs](/guias/matt-pocock/skills/engineering#diagnosing-bugs) para ver o que teria evitado o bug |
| Próximo | nenhum fixo |
| Sai com | propostas de ajuste no ambiente. Carrega o writing-for-agents antes de escrever |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-retro)


### Comandos no playbook AI-First

A espinha ideia → entrega no playbook usa os skills BMAD, não os do Matt. A correspondência aproximada:

<div class="table-wrap">

| Matt Pocock | Playbook / BMAD |
| --- | --- |
| `/grill-with-docs` | `/bmad-product-brief` e `/bmad-prd` |
| `/to-spec` | `/bmad-prd` e `/bmad-architecture` |
| `/to-tickets` | `/bmad-create-epics-and-stories` e `/bmad-sprint-planning` |
| `/implement` | `/bmad-build` |
| `/code-review` | `/bmad-code-review` e review humano |
| `/retro` | `/bmad-retrospective` |

</div>

Trilha completa: [guia BMAD](/guias/bmad/) · [playbook](/playbook/ai-first/tutoriais/indice/).

[← 01 · Getting Started](/guias/matt-pocock/skills/getting-started/)

[03 · Shaping →](/guias/matt-pocock/skills/shaping/)
