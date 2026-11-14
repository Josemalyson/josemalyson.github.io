---
title: "Cycles and gates"
sidebar_label: "Cycles and gates"
description: "02 · Processo O processo deve ser explícito o suficiente para auditoria e leve o suficiente para não transformar cada alteração em um projeto…"
hide_title: true
published: "2026-11-14"
reading_minutes: 7
pagination_prev: "introducao/visao-executiva"
pagination_next: "fundamentos/time"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*02 · Processo*


O processo deve ser explícito o suficiente para auditoria e leve o suficiente para não transformar cada alteração em um projeto burocrático.

### Fluxo upstream → downstream

<div class="table-wrap">
<table>
<tr><th>Fase</th><th>Entrada</th><th>Saída obrigatória</th><th>Gate humano</th></tr>
<tr><td>1. Discovery</td><td>Problema, evidência, stakeholder</td><td>Brief, escopo, métricas de valor, riscos iniciais</td><td>Negócio aceita problema e prioridade</td></tr>
<tr><td>2. Spec</td><td>Brief aprovado</td><td>PRD, critérios de aceite, NFRs, decisões AD-n na spine de arquitetura</td><td>Negócio + Tech Lead aprovam</td></tr>
<tr><td>3. Decomposição</td><td>PRD e arquitetura</td><td>Épicos, stories pequenas, dependências, plano de teste</td><td>Tech Lead aprova viabilidade e risco</td></tr>
<tr><td>4. Implementação</td><td>Story pronta</td><td>Branch/worktree, código, testes, evidências</td><td>Agente limitado; humano acompanha exceções</td></tr>
<tr><td>5. Verificação</td><td>PR e spec</td><td>CI verde, SAST/SCA, testes, review técnico</td><td>Review humano obrigatório</td></tr>
<tr><td>6. Entrega</td><td>PR aprovado</td><td>Artefato, pipeline, change record, plano de rollback</td><td>Gate de mudança conforme criticidade</td></tr>
<tr><td>7. Operação</td><td>Deploy e telemetria</td><td>SLIs/SLOs, incidentes, post-mortem, lições</td><td>Owner do serviço valida resultado</td></tr>
</table>
</div>

### Gates do playbook × sign-offs do BMAD

O BMAD define cinco momentos de sign-off que produzem um documento revisável ([Plan Inside an Organization](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/plan-inside-an-organization.md)). O playbook coloca os seus gates nesses pontos em vez de criar gates novos; o PRFAQ verdict (`bmad-prfaq`) é opcional e fica fora do piloto.

<div class="table-wrap">
<table>
<tr><th>Fase</th><th>Gate do playbook</th><th>Sign-off BMAD</th><th>Skill</th><th>Artefato</th></tr>
<tr><td>1. Discovery</td><td>Negócio aceita problema e prioridade</td><td>—</td><td>`bmad-product-brief`</td><td>`_bmad-output/planning-artifacts/briefs/…/brief.md`</td></tr>
<tr><td>2. Spec</td><td>Negócio + Tech Lead aprovam</td><td>PRD validate</td><td>`bmad-prd (create, validate)`</td><td>`_bmad-output/planning-artifacts/prds/…/prd.md`</td></tr>
<tr><td>2. Spec</td><td>Negócio + Tech Lead aprovam</td><td>Architecture spine review</td><td>`bmad-architecture`</td><td>`_bmad-output/planning-artifacts/architecture/…/ARCHITECTURE-SPINE.md`</td></tr>
<tr><td>3. Decomposição</td><td>Tech Lead aprova viabilidade e risco</td><td>Readiness gate</td><td>`bmad-create-epics-and-stories, bmad-sprint-planning`</td><td>`_bmad-output/planning-artifacts/epics.md, implementation-readiness.md, _bmad-output/implementation-artifacts/sprint-status.yaml`</td></tr>
<tr><td>4. Implementação</td><td>Agente limitado; humano acompanha exceções</td><td>Aprovação do plano (bmad-build)</td><td>`bmad-build`</td><td>`_bmad-output/implementation-artifacts/spec-1-1-<slug>.md + commit local`</td></tr>
<tr><td>5. Verificação</td><td>Review humano obrigatório</td><td>—</td><td>`bmad-code-review, bmad-walkthrough`</td><td>`Review Triage Log, deferred-work.md`</td></tr>
<tr><td>6. Entrega</td><td>Gate de mudança conforme criticidade</td><td>—</td><td>`fora do BMAD: push, PR web, CI, merge humano`</td><td>`PR no GitHub`</td></tr>
<tr><td>Fim do épico</td><td>Owner valida resultado</td><td>Retrospective verdict</td><td>`bmad-retrospective`</td><td>`_bmad-output/implementation-artifacts/epic-1-retro-<data>.md`</td></tr>
</table>
</div>

### Estados da story

*Estados da story, de Draft a Deployed*

- spec e dependências aprovadas
- sessão isolada criada
- implementação concluída
- CI e scanners aprovados
- falha técnica
- feedback humano
- Draft
- Ready
- InProgress
- Verify
- Review
- ChangesRequest ed
- Approved
- Merged
- Deployed

### Definition of Ready (DoR)

- Story tem ID estável, objetivo, escopo e não-objetivos.
- Critérios de aceite observáveis, preferencialmente automatizados.
- Dependências, dados, APIs e contratos conhecidos ou explicitamente bloqueados.
- Classificação de criticidade e dados preenchida.
- Plano de teste, comandos de validação e rollback definidos.
- Contexto mínimo disponível no repositório e links para a spine (AD-n) e a spec.
- Spec revisada contra regras conflitantes, casos de falha ausentes e frases ambíguas antes de liberar o agente ( [AI Engineer, AWS](https://www.youtube.com/watch?v=0EnLxIbAvYk) ).

### Definition of Done (DoD)

- Critérios de aceite demonstrados por testes/evidências.
- Lint, testes, SAST, SCA, secret scan e policy checks aprovados.
- Review humano concluído; autor e revisor distintos quando a política exigir.
- Spec e spine (AD-n) atualizadas pelos próprios skills (bmad-prd update, bmad-architecture) se comportamento ou contrato mudou.
- PR associado a Story ID, change record e plano de rollback.
- Telemetria e custo atribuídos; sem segredos ou dados sensíveis em logs.

### Gates e autoridade

O agente pode produzir artefatos e recomendar decisões. A autoridade de aceitar risco, aprovar arquitetura, autorizar exceções, aprovar merge e liberar mudança permanece em papéis humanos formalmente designados.

### Controle de WIP

Para um time de quatro pessoas, iniciar com 1–2 sessões paralelas por engenheiro e elevar somente quando a taxa de review e retrabalho estiver estável. O limite real é a capacidade de verificar, não a capacidade de abrir sessões. Uma story deve corresponder a uma unidade rastreável; 1 story = 1 branch/worktree é uma convenção útil, não uma lei universal.

### Execução longa e retomada

Estado durável deve ficar fora da janela de contexto: story status, plano, progresso, decisões pendentes, arquivos alterados, testes executados e deferred-work ledger. `bmad-loop` é candidato experimental para orquestrar o ciclo dev → verify → review → commit, mas seu upstream o classifica como early open beta. Usar apenas em sandbox e com release fixada; não é pré-requisito do processo.

**Evidência:** execução durável, retomar do passo certo após falha sem refazer efeitos colaterais, é tratada como requisito de agentes de longa duração ([Martin Fowler](https://martinfowler.com/articles/durable-execution-agents.html)). A Inkitt descreve um agente issue → draft PR com checkpoints que retoma de onde parou ([InfoQ](https://www.infoq.com/news/2026/11/inkitt-one-shot-pr-creator-agent/)).

**Pré-requisitos do bmad-loop** (README v0.13.2, 10/10/2026): projeto BMAD v6 com BMAD-METHOD ≥ 6.10.0 e o skill `bmad-build-auto` instalado; `sprint-status.yaml` gerado por `bmad-sprint-planning` (modo sprint); multiplexador de terminal; abrir o CLI do agente uma vez no projeto e aceitar os prompts de trust e hooks antes do `run`.


```text
uv tool install "bmad-loop[tui] @ git+https://github.com/bmad-code-org/bmad-loop.git"
bmad-loop init            # skills, hooks, .bmad-loop/policy.toml, gitignore
bmad-loop validate        # preflight: config, board, git, multiplexador, CLI, hooks
bmad-loop run --dry-run   # imprime o plano sem iniciar sessões
# Só executar bmad-loop run após revisar policy.toml e validar isolamento (worktree).
```


:::danger

Não automatizar por conveniência:

merge, deploy, mudança de permissão, criação de credencial, acesso a dado produtivo e encerramento de incidente exigem controles independentes do agente.

:::

Documentação oficial

- [BMAD: Choose a Planning Path](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/choose-a-planning-path.md)
- [BMAD: Plan Inside an Organization](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/plan-inside-an-organization.md)
- [BMAD: Break Work into Stories](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/break-work-into-stories-and-track-it.md)
- [BMAD: Build a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/build-a-change.md)
- [BMAD: Finish an Epic](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/finish-an-epic.md)
- [BMAD: Autonomous Development Loops](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/autonomous-development-loops.md)
- [bmad-loop](https://github.com/bmad-code-org/bmad-loop)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Executive view](/playbook/ai-first)

[A team of four →](/playbook/ai-first/fundamentos/time)
