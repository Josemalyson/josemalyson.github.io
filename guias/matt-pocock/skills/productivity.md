---
title: "05 · Productivity Skills"
sidebar_label: "05 · Productivity Skills"
description: "4 · As 27 skills 05 · Productivity Skills Fluxos para você, não para o código. Agrupadas nos 6 grupos do próprio Matt em aihero.dev/skills …"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "skills/engineering"
pagination_next: "skills/reference"
---

*4 · As 27 skills*

# 05 · Productivity Skills

Fluxos para você, não para o código.

Agrupadas nos 6 grupos do próprio Matt em [aihero.dev/skills](https://www.aihero.dev/skills). Cada card traz o que eu li na fonte indicada.

### `/grill-me` · você digita

Entrevista sobre um plano ou decisão até cada ramo importante estar resolvido. Não precisa de repositório.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | decisão fora de um repositório: negócio, escrita, o que fazer a seguir |
| Próximo | termina na decisão |
| Sai com | decisão, sem arquivos. Precisa de grilling instalado |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-grill-me)

### `/handoff` · você digita

Escreve um arquivo portátil com o que a próxima sessão precisa: objetivo, contexto, skills sugeridas e ponteiros para os artefatos.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | o trabalho precisa trocar de harness, pasta ou pessoa. Para só encurtar, use /compact |
| Próximo | a nova sessão lê o arquivo e retoma |
| Sai com | arquivo de handoff. Corrigido em outubro (commit #1184): o arquivo deixou de sumir quando o diretório temporário é limpo entre sessões |

</div>

fonte: página + nota v1.2 [fonte original](https://www.aihero.dev/skills-handoff)

### `/to-questionnaire` · você digita

Transforma uma decisão que depende de outra pessoa num questionário Markdown. Pergunta sobre o envio, não sobre o assunto.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | a resposta está com um stakeholder ou especialista |
| Próximo | a resposta volta para a decisão bloqueada |
| Sai com | to-questionnaire-`<slug>`.md no diretório atual |

</div>

fonte: página + SKILL.md [fonte original](https://www.aihero.dev/skills-to-questionnaire)

### `/teach` · você digita

Ensina um tema em várias sessões que se constroem umas sobre as outras, com a pasta como workspace. Não faz parte do fluxo de engenharia.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | você quer dominar um assunto |
| Próximo | a sessão seguinte, na mesma pasta |
| Sai com | MISSION.md, RESOURCES.md, lessons/, reference/, learning-records/ |

</div>

fonte: página da skill [fonte original](https://www.aihero.dev/skills-teach)

### `/wait-what` · você digita

Reexplica a última mensagem do agente, em linguagem simples e no vocabulário do seu GLOSSARY.md. Três linhas de skill.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | você não entendeu uma mensagem. Funciona em qualquer conversa |
| Próximo | a conversa segue do ponto onde parou |
| Sai com | nenhum arquivo, só a reexplicação |

</div>

fonte: página da skill + nota v1.2 [fonte original](https://www.aihero.dev/skills-wait-what)

### `writing-for-agents` · agente pode chamar

Regras para escrever o que um agente vai ler: skills, AGENTS.md, CLAUDE.md, specs e tickets.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | ao criar ou editar qualquer instrução para agente. A nota v1.2.0 diz que o agente o aciona nesses casos |
| Próximo | sem próximo fixo |
| Sai com | o documento revisado, mais curto e com critérios verificáveis |

</div>

fonte: página + nota v1.2.0 [fonte original](https://www.aihero.dev/skills-writing-for-agents)


### Comandos no playbook AI-First

Troca de contexto e regras duráveis ficam no `AGENTS.md`. Handoff entre sessões usa os artefatos em `_bmad-output/`.

```text
/bmad-project-context set up AGENTS.md
```

[Passo 07](/playbook/ai-first/tutoriais/passo-07/) · [Ledger](/playbook/ai-first/fundamentos/ledger/).

[← 04 · Engineering](/guias/matt-pocock/skills/engineering/)

[06 · Reference Skills →](/guias/matt-pocock/skills/reference/)
