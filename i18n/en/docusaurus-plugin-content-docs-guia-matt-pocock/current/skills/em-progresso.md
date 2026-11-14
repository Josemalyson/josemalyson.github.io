---
title: "In progress"
sidebar_label: "In progress"
description: "4b · Em progresso Em progresso (não promovida) Skills da pasta in-progress/ do repositório. Não estão na lista promovida do site, e podem m…"
hide_title: true
published: "2026-11-14"
reading_minutes: 3
pagination_prev: "skills/reference"
pagination_next: "camada-abaixo"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as in the 12 Nov 2026 pocket guide (commit 5863806).

:::

*4b · Em progresso*

# Em progresso (não promovida)

Skills da pasta `in-progress/` do repositório. Não estão na lista promovida do site, e podem mudar ou sair sem aviso. Instale só com nome explícito.

Estas skills ainda não fazem parte do conjunto promovido. Leia o `SKILL.md` no repositório antes de usá-las.

### `chief-of-staff` · em progresso · só manual

Persegue um objetivo longo numa única sessão, coordenando subagentes em segundo plano. Mantém memória numa wiki de markdown que sobrevive à sessão, com um index.md e páginas que citam commits.

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | objetivo que dura muitos dias e exige decisões estratégicas acumuladas. `disable-model-invocation: true`: você precisa digitar o nome |
| Próximo | o próprio objetivo; a wiki é lida antes de cada decisão (query) |
| Sai com | páginas de wiki com index.md. Fontes (issues, PRs, transcrições) nunca são copiadas, só citadas |
| Mudou | 31/10 (commit [5ae4816](https://github.com/mattpocock/skills/commit/5ae4816), #1363): lê a wiki compartilhada primeiro; retro e implement-spec entram como procedimentos dentro da skill; faz retro numa amostra de 1 em cada 5 sessões de subagente. Fonte: mensagem do commit |

</div>

fonte: SKILL.md em skills/in-progress/ (commits 5beb35b e 5ae4816, out/2026) [fonte original](https://github.com/mattpocock/skills/blob/main/skills/in-progress/chief-of-staff/SKILL.md)

### `software-factory` · em progresso · só manual · nova em 31/10

Vocabulário compartilhado para desenhar uma software factory: um sistema de agentes que transforma tickets, PRs e agendamentos em código mergeado, rodando em infraestrutura remota que você escolhe. Termos canônicos: Task, Trigger, Run, Runner, Ticket tracker. Evite usar job, workflow ou action como nome da task: isso é vocabulário do arquivo de CI que a dispara. A task de explore reproduz as alegações do ticket, deixa os achados nele e nunca faz push (d18183f / 5863806).

<div class="table-wrap">

| Campo | Valor |
| --- | --- |
| Entra | uma sessão de grilling sobre a factory. O README diz para chamar junto com grilling. `disable-model-invocation: true` |
| Regra | um run nunca espera humano: ele termina, e a mudança do humano no tracker ou no git host dispara outro run |
| Sai com | o desenho da factory no vocabulário da skill. Anexos: EXAMPLE-TASKS, GIT-HOSTS, OBSERVABILITY-PLATFORMS, RUNNERS, TICKET-TRACKERS |

</div>

fonte: SKILL.md + EXAMPLE-TASKS (commits d18183f e 5863806, PR #1416); README de in-progress [fonte original](https://github.com/mattpocock/skills/blob/main/skills/in-progress/software-factory/SKILL.md)


Fonte: [skills/in-progress](https://github.com/mattpocock/skills/blob/main/skills/in-progress/README.md).

[← 06 · Reference Skills](/guias/matt-pocock/skills/reference/)

[5 · Uma camada abaixo →](/guias/matt-pocock/camada-abaixo/)
