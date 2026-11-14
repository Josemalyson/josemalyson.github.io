---
title: IA First Engineering — Playbook
description: Playbook v0.4 de engenharia IA First. Contrato de mudança, harness de execução e plano de controle, com 29 passos e o loop de guardrail e pre-commit.
hide_title: true
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
published: "2026-11-14"
reading_minutes: 85
---

O texto abaixo é a versão 0.4 (14 nov 2026) do playbook: 29 passos, do 00 ao 28, com o loop de guardrail e pre-commit. Os marcadores **[APROXIMADO]** e **[REAL]** estão como no original.

[Repositório e PDF](https://github.com/Josemalyson/ai-first-playbook)


<a id="overview"></a>

*01 · Fundamentos*

<h2 id="h-overview">Visão executiva</h2>

Um sistema operacional de engenharia em que pessoas definem intenção e risco, especificações tornam o trabalho verificável e agentes executam dentro de limites explícitos.

Versão 0.4 · Atualizado em 14 nov 2026 · Squad piloto: 4 pessoas · Stack de referência candidata · Agente de execução: Devin (contratado)

**01 · Contrato de mudança**

Discovery, PRD, arquitetura, stories e critérios de aceite versionados.

**02 · Harness de execução**

Agentes, contexto, skills, ferramentas, isolamento, verificação e estado retomável.

**03 · Plano de controle**

Identidade, autorização, dados, auditoria, políticas e evidências para risco.

### O que cada público encontra aqui

**Liderança**

Tese, princípios não negociáveis e piloto de 12 semanas com go/no-go por evidência (páginas 01 e 08).

**Engenharia**

Ciclos e gates, papéis, os 12 pilares do harness, ledger por story e runbooks (páginas 02 a 06).

**Segurança, Risco e Compliance**

Identidade de agente, matriz de autonomia L0–L4, MCP, sandbox, dados, regulação e intake de ferramentas (páginas 07 e 09).

### Tese operacional

O gargalo desloca-se de digitar código para formular mudanças verificáveis, decompor trabalho e revisar evidências. O fluxo padrão é **Intenção → Spec → Plano → Stories → Execução → Verificação → Aprovação → Deploy**. A autonomia do agente não substitui a responsabilidade humana.

*Fluxo padrão: do problema ao deploy, com review humano e feedback*

- Aprovado
- Reprovado
- feedback
- Problema e valor
- Spec e arquitetura
- Plano e stories
- Agente em sandbox
- Testes e segurança
- Review humano
- CI/CD e deploy
- Telemetria e aprendizado

### As três camadas

*As três camadas: contrato de mudança, harness e plano de controle*

- Plano de controle
- Harness
- Contrato de mudança
- PRD
- Spine AD-n
- SPEC
- STORY
- Contexto
- Agente
- Tools
- Verificação
- Identidade
- Política
- Auditoria
- Evidência

### Decisões que não podem ficar implícitas

- Quem aprova requisitos, arquitetura, exceções e merge?
- Qual identidade executa cada agente e quais recursos pode acessar?
- Quais dados podem entrar no contexto e em quais provedores?
- Qual evidência prova que a story atende à spec e às políticas?
- Como interromper, retomar, reverter e investigar uma execução?

:::warning

Limite desta versão:

este playbook é uma proposta de operating model. A adoção regulatória depende do enquadramento da instituição, classificação do sistema, contratos com fornecedores e aprovação das áreas de Segurança, Risco, Compliance, Privacidade, Arquitetura e Plataforma.

:::

### Princípios não negociáveis

1. Agente não recebe identidade humana nem credencial compartilhada.
2. Agente não tem acesso a produção por padrão; deploy continua sob pipeline e autorização humana.
3. Dados são classificados antes de serem enviados a modelo, ferramenta, memória ou telemetria.
4. Spec e código são revisados; testes e scanners são executados no CI, fora da confiança do agente.
5. Todo custo, ação e artefato relevante deve ser correlacionável a Story ID.
6. Ferramenta descoberta publicamente não é ferramenta aprovada.

Evidência de mercado que reforça os princípios

- Revisão como ponto de escala: o LinkedIn revisa cerca de 40 mil PRs por semana com checagens determinísticas, revisores de IA independentes e verificação dos achados por outro modelo. [ByteByteGo](https://blog.bytebytego.com/p/how-linkedin-uses-ai-to-review-40000)
- Governança central de ferramentas: a Uber governa mais de 800 servidores MCP e 5.000 tools por um gateway central. [InfoQ](https://www.infoq.com/news/2026/11/uber-mcp-gateway-ai-agents/)

Casos públicos; números como declarados pela fonte. São sinais de mercado, não metas nem benchmark do piloto.

### Como ler este portal

A página executiva apresenta decisões e controles. As páginas operacionais detalham o processo, o time de quatro pessoas, os doze pilares do harness, a instrumentação por story, os tutoriais, a governança, as métricas, o catálogo e o glossário. Os blocos "Evidência de mercado" trazem casos públicos que sustentam cada página; eles não alteram as decisões do playbook.

Documentação oficial

- [BMAD Method — README](https://github.com/bmad-code-org/BMAD-METHOD)
- [BMAD: Plan Inside an Organization](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/plan-inside-an-organization.md)
- [BMAD: Choose a Planning Path](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/choose-a-planning-path.md)
- [DORA: four keys](https://dora.dev/guides/dora-metrics-four-keys/)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[Ciclos e gates →](#cycles)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026

<a id="cycles"></a>

*02 · Processo*

<h2 id="h-cycles">Ciclos e gates</h2>

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

[← Visão executiva](#overview)

[Time de quatro pessoas →](#team)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026

<a id="team"></a>

*03 · Papéis*

<h2 id="h-team">Time de quatro pessoas</h2>

O time pequeno deve operar como uma célula de produto com papéis claros, não como quatro operadores de agentes sem responsabilidade definida.

### RACI proposto

<div class="table-wrap">
<table>
<tr><th>Atividade</th><th>Business Owner</th><th>Tech Lead</th><th>Eng. 1</th><th>Eng. 2</th></tr>
<tr><td>Problema, valor e prioridade</td><td>A/R</td><td>C</td><td>I</td><td>I</td></tr>
<tr><td>PRD e critérios de aceite</td><td>A</td><td>R/C</td><td>C</td><td>C</td></tr>
<tr><td>Arquitetura, NFR e segurança</td><td>C</td><td>A/R</td><td>C</td><td>C</td></tr>
<tr><td>Decomposição em stories</td><td>C</td><td>A</td><td>R</td><td>R</td></tr>
<tr><td>Execução de agentes e integração</td><td>I</td><td>A</td><td>R</td><td>R</td></tr>
<tr><td>Review e merge</td><td>I</td><td>A (mudanças de risco)</td><td>R/C</td><td>R/C</td></tr>
<tr><td>Release e operação</td><td>I</td><td>A</td><td>R</td><td>R</td></tr>
</table>
</div>

A = accountable; R = responsible; C = consulted; I = informed. Ajustar ao modelo formal de engenharia e segregação de funções da instituição.

### Responsabilidades

**Business Owner**

Define problema, valor, prioridade, regras de negócio e aceita critérios funcionais. Não delega ao agente a decisão de produto.

**Tech Lead**

Define arquitetura, NFRs, criticidade, padrões, threat model e limites de autonomia. É dono técnico do fluxo.

**Engenheiro 1**

Orquestra execução, prepara contexto, acompanha sessões, implementa quando necessário e revisa PRs.

**Engenheiro 2**

Atua como revisor independente, valida testes/segurança, integra e mantém automações e telemetria.

### Ritual mínimo

- Planning: selecionar stories Ready, revisar risco e orçamento de tokens/ACUs.
- Daily: foco em bloqueios, sessões em andamento, decisões humanas pendentes e fila de review.
- Review: examinar diff, spec, evidências, scanners e ações externas realizadas.
- Retro quinzenal: agrupar falhas, medir custo de retrabalho e promover poucas mudanças de regra/skill por vez.
- Revisão mensal: podar contexto, verificar permissões e revalidar ferramentas.

### Política de paralelismo

Começar com no máximo 4–6 sessões ativas para o time inteiro, e não oito sessões por pessoa. Uma sessão por story é o padrão de rastreabilidade; múltiplos agentes na mesma story só com divisão de arquivos/ownership e integração explícita. Nenhum agente deve revisar sua própria alteração como única barreira de qualidade.

### Responsabilidade humana

Agentes podem assumir tarefas de analista, planejador, implementador e revisor auxiliar. Isso não transfere accountability. A instituição precisa conseguir identificar pessoa responsável pelo aceite, identidade técnica usada, escopo autorizado, evidência de execução e decisão de merge.

Documentação oficial

- [BMAD: Plan Inside an Organization](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/plan-inside-an-organization.md)
- [BMAD: Adopt BMad Across a Team](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/customize/adopt-bmad-across-a-team.md)
- [BMAD: Skills and Agents](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/reference/skills-and-agents.md)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Ciclos e gates](#cycles)

[Os 12 pilares do harness →](#pillars)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026

<a id="pillars"></a>

*04 · Harness engineering*

<h2 id="h-pillars">Os 12 pilares do harness</h2>

O harness é o sistema que enquadra o modelo: instruções, ferramentas, contexto, estado, execução, recuperação, avaliação e limites de segurança.

### Mapa dos pilares

<div class="table-wrap">
<table>
<tr><th>#</th><th>Pilar</th><th>Padrão de referência</th><th>Checagem</th></tr>
<tr><td>1</td><td>Rules</td><td>AGENTS.md curto + regras locais</td><td>O agente carregou as regras esperadas?</td></tr>
<tr><td>2</td><td>Skills</td><td>Agent Skills / SKILL.md</td><td>Skill validada, escopo e scripts auditados?</td></tr>
<tr><td>3</td><td>Agentes</td><td>Agente único; subagente por necessidade</td><td>Custo/qualidade comparados?</td></tr>
<tr><td>4</td><td>MCP e tools</td><td>Gateway, allowlist e identidade</td><td>Tool, escopo e chamada auditáveis?</td></tr>
<tr><td>5</td><td>Context engineering</td><td>Selecionar, escrever, comprimir, isolar</td><td>Contexto mínimo e sem dado proibido?</td></tr>
<tr><td>6</td><td>Retrieval</td><td>grep/AST para código; RAG para documentos</td><td>Recall e precisão medidos?</td></tr>
<tr><td>7</td><td>Memória</td><td>Arquivos versionados como base</td><td>Proveniência, ACL e retenção?</td></tr>
<tr><td>8</td><td>Execução longa</td><td>Estado em disco + checkpoints</td><td>Retomada testada sem duplicar ações?</td></tr>
<tr><td>9</td><td>Orquestração</td><td>Workflow fixo com gates</td><td>Estado, timeout, retry e cancelamento?</td></tr>
<tr><td>10</td><td>Hooks/guardrails</td><td>Hooks + CI + policy enforcement</td><td>Bloqueio funciona também em cloud?</td></tr>
<tr><td>11</td><td>Evals/observabilidade</td><td>OTel GenAI + evals determinísticos</td><td>Trace correlacionado e redigido?</td></tr>
<tr><td>12</td><td>Melhoria contínua</td><td>Falhas → evals → ajuste controlado</td><td>Regra nova melhorou benchmark?</td></tr>
</table>
</div>

### 1. Rules e AGENTS.md

O arquivo raiz deve conter somente invariantes que o agente precisa conhecer sempre: arquitetura resumida, comandos oficiais, convenções, caminhos importantes, limites de segurança e instrução para localizar referências. Regras específicas ficam em diretórios de escopo suportados pelo agente. Não duplicar a documentação completa nem incluir segredos.


```text
# AGENTS.md — exemplo mínimo
## Objetivo
Serviço de consulta de saldo (Go); decisões em _bmad-output/planning-artifacts/architecture/ (AD-n).
## Comandos
- go vet ./...
- go test ./...
## Regras
- Não alterar contratos públicos sem decisão AD-n aprovada na spine.
- Não acessar produção nem usar credenciais reais.
- Não registrar PII, tokens ou payloads financeiros.
- Toda mudança deve referenciar Story: S-123.
## Verificação
Execute testes, SAST, SCA e secret scan antes de propor PR.
```


### 2. Skills

Adotar o formato Agent Skills como pacote portátil. Cada skill deve declarar propósito e quando ativar, pré-requisitos, passos, saída esperada, limites e referências. Scripts devem ser tratados como código de terceiros: revisar, fixar versão, testar em sandbox e atestar a procedência. A especificação recomenda disclosure progressivo e SKILL.md principal abaixo de 500 linhas.

### 3. Subagentes

Começar com agente único. Criar subagente quando a tarefa for independente, exigir especialidade distinta ou consumir contexto que não deve poluir o orquestrador. Exigir orçamento e limite de profundidade/fan-out. Medir multiplicador de custo e taxa de retrabalho; não assumir que paralelismo melhora throughput.

### 4. MCP e ferramentas

O MCP padroniza transporte e descoberta, mas não substitui o modelo de autorização corporativa. Todo servidor deve passar por intake, ter owner, versão/digest fixado, identidade de workload, allowlist de tools, escopos mínimos, restrição de egress e logging. Filtrar tools não autorizadas no gateway; validar novamente no backend.

### 5. Context engineering

Aplicar quatro operações: escrever estado durável, selecionar informação just-in-time, comprimir checkpoints e isolar tarefas. Evitar carregar todo o monorepo, histórico de chat ou documentação em toda sessão. Limitar tools redundantes e contexto irrelevante. Tratar saída de agente e memória recuperada como dado não confiável.

### 6. Retrieval

Para código, começar por ripgrep, navegação AST e indexação simbólica. Para normas e documentos internos, RAG híbrido com ACL, citações e filtros de classificação. Grafo de código/GraphRAG só quando perguntas multi-hop justificarem custo e complexidade. Criar benchmark de perguntas reais antes de escolher.

### 7. Memória

Arquivos versionados (PRD, spine AD-n, spec, runbook, skills, progress) são a fonte de verdade. Banco de memória como Mem0/Letta/Zep é complementar, nunca autoridade para decisões críticas. Toda memória precisa de origem, timestamp, escopo, expiração, ACL e mecanismo de correção. Proibir segredos e PII por padrão.

### 8. Execução longa

Persistir estado em arquivos estruturados e transições idempotentes. Antes de retomar, validar lock, branch, commit e ações externas já executadas. O bmad-loop atualmente declara early open beta; testar com worktree, dry-run, limites de sessão e versão pinada. Não permitir dois orquestradores concorrentes no mesmo conjunto de stories.

### 9. Orquestração

Preferir pipeline determinístico com checkpoints, timeout, retries limitados, compensação e cancelamento. LangGraph/Strands podem ser avaliados quando ramificações dinâmicas, estado distribuído ou human-in-the-loop complexo forem necessários. O fluxo BMAD com gates humanos já resolve boa parte do piloto.

### 10. Hooks e guardrails

Hooks melhoram ergonomia, mas não são fronteira de segurança. Aplicar política no CI, gateway, IAM, sandbox, rede e backend. Testar bypasses: sessões cloud, CLI diferente, execução indireta, tool server comprometido e prompt injection. Um hook local nunca deve ser a única barreira.

**No Tutorial A (passos 08 a 10 e 20):** a skill [pre-commit-quality-gate](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate) gera hooks fail-fast de 14 categorias e o AGENTS.md define o loop de autocorreção: no `[FAIL]`, o agente corrige só a categoria que falhou e repete o commit, com no máximo 3 tentativas, sem `--no-verify`; na 3ª falha, entrega a um humano. É feedback rápido para o agente; o CI repete os gates.

### 11. Evals e observabilidade

Instrumentar sessões, chamadas de modelo, tools, retrieval e verificações com OpenTelemetry. GenAI semantic conventions continuam em desenvolvimento em parte dos atributos; fixar versão e documentar mapeamentos. Não coletar prompt/resposta por padrão. Evals binários de código, contrato e política são gates mais fortes que avaliação subjetiva do modelo.

### 12. Melhoria contínua

Falha vira issue/eval com caso reproduzível. Alterar uma regra ou skill por vez, executar conjunto de regressão, comparar custo/qualidade e só então promover. Podar instruções obsoletas. Toda mudança em prompt, skill, modelo ou ferramenta é mudança de configuração controlada e deve ter owner e versão.

### Evidência de mercado por pilar

<div class="table-wrap">
<table>
<tr><th>Pilar</th><th>Evidência</th><th>Implicação no playbook</th><th>Fonte</th></tr>
<tr><td>2 · Skills</td><td>Palestra mostra uma skill de diagnóstico oficial que lia credenciais e sondava o metadata da instância.</td><td>Auditar skill executando em sandbox com egress bloqueado, não só lendo o SKILL.md.</td><td>[AI Engineer (Zenity)](https://www.youtube.com/watch?v=_7P580m4kPY)</td></tr>
<tr><td>5 · Context engineering</td><td>Google associa desvios não solicitados de agentes a 77% mais tokens; TODOs obsoletos no repositório desviam o agente da tarefa.</td><td>Higiene do repositório faz parte do contexto mínimo.</td><td>[Google Developers](https://developers.googleblog.com/agent-distraction/)</td></tr>
<tr><td>6 · Retrieval</td><td>JioHotstar: busca estrutural foi melhor em tarefa concreta; busca semântica ajudou em enunciado ambíguo; camada extra de retrieval não melhorou conclusão nem tokens de forma consistente.</td><td>Reforça começar por grep/AST e medir antes de indexar.</td><td>[InfoQ](https://www.infoq.com/news/2026/11/jiohotstar-codingagent-retrieval/)</td></tr>
<tr><td>9 · Orquestração</td><td>Meta usa um orquestrador fino, roteador determinístico sem raciocínio de domínio, que despacha para subagentes especialistas.</td><td>Reforça workflow fixo com gates antes de orquestração dinâmica.</td><td>[Meta Engineering](https://engineering.fb.com/2026/10/19/ml-applications/thin-orchestrator-ai-agent-architecture/)</td></tr>
<tr><td>11 · Evals</td><td>Playbook de avaliação separa quatro perguntas: concluiu a tarefa, ficou no tema, vazou dado, pulou passo.</td><td>Usar as quatro perguntas como estrutura mínima dos evals de agente.</td><td>[AWS ML Blog](https://aws.amazon.com/blogs/machine-learning/the-agent-evaluation-playbook-built-in-deepeval-and-autoeval-on-agentcore/)</td></tr>
<tr><td>11 · Evals</td><td>MCPHallu (358 tarefas, 36 servidores MCP): nos casos de objetivo inalcançável, só 23,2% das execuções passaram.</td><td>Incluir tarefas impossíveis: o comportamento correto é parar ou recusar, não inventar caminho.</td><td>[arXiv](https://arxiv.org/abs/2611.07689)</td></tr>
<tr><td>12 · Melhoria contínua</td><td>Thoughtworks SpecBench: o workflow com mais harness ganhou 2,75 p.p. de correção, com tempo quase dobrado e muito mais tokens.</td><td>Toda regra nova precisa provar que paga o próprio custo.</td><td>[Thoughtworks](https://www.thoughtworks.com/insights/blog/generative-ai/specbench-tool-evaluate-ai-enabled-software-development-workflows)</td></tr>
</table>
</div>

:::warning

Nota de evidência:

os doze pilares são uma síntese de engenharia proposta. Não existe padrão regulatório único que obrigue esta taxonomia. Os requisitos de cada instituição devem ser derivados da política de segurança, risco de terceiros, privacidade e SDLC corporativo.

:::

Documentação oficial

- [AGENTS.md](https://agents.md/)
- [Agent Skills — especificação](https://agentskills.io/specification)
- [BMAD: Set and Maintain Project Context](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/existing-codebases/set-and-maintain-project-context.md)
- [BMAD: Customize BMad](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/customize/customize-bmad.md)
- [MCP — especificação](https://modelcontextprotocol.io/specification/)
- [MCP — Authorization](https://modelcontextprotocol.io/specification/latest/basic/authorization)
- [OpenTelemetry — GenAI semconv](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- [git worktree](https://git-scm.com/docs/git-worktree)
- [promptfoo](https://www.promptfoo.dev/docs/intro/)
- [Inspect](https://inspect.aisi.org.uk/)
- [Skill pre-commit-quality-gate](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate)
- [githooks](https://git-scm.com/docs/githooks)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Time de quatro pessoas](#team)

[Ledger e telemetria por story →](#ledger)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026

<a id="ledger"></a>

*05 · FinOps e evidências*

<h2 id="h-ledger">Ledger e telemetria por story</h2>

Story ID é a chave de correlação entre Git, agente, gateway, CI, observabilidade e deploy. Sem cobertura de atribuição, custo por story vira estimativa.

### Convenção de rastreabilidade


```text
Story: S-123
AI-Assisted: bmad+devin
Agent-Session: session-abc123
Model-Route: approved-coding-route
```


Usar o ID em branch, PR, commit trailer, sessão, trace/span, chave virtual ou metadata do gateway e job do CI. Nunca colocar dado sensível no ID ou em tags.

### Modelo de ledger

<div class="table-wrap">
<table>
<tr><th>Grupo</th><th>Campos mínimos</th><th>Fonte primária</th></tr>
<tr><td>Identidade</td><td>story_id, repo, squad, actor_id, agent_id, session_id, tool_version</td><td>Git, IAM, plataforma do agente</td></tr>
<tr><td>Consumo</td><td>provider, model, input/output/cache tokens, estimated_cost, billed_cost, ACU</td><td>Gateway e fatura; API do fornecedor</td></tr>
<tr><td>Tempo</td><td>ready_at, started_at, first_pr_at, review_started_at, merged_at, deployed_at</td><td>Jira, Git, CI/CD</td></tr>
<tr><td>Qualidade</td><td>test_result, scanner_findings, review_cycles, rework, revert, escaped_defects</td><td>CI, PR, incident management</td></tr>
<tr><td>Resultado</td><td>acceptance_rate, one_shot, human_interventions, outcome</td><td>Ledger derivado + revisão humana</td></tr>
</table>
</div>

### Fluxo de dados

*Fluxo de dados do ledger: agente, gateway, Git e CI até o warehouse*

- Agente / IDE / CLI
- OTel Collector
- LLM Gateway
- Spend logs
- Git provider
- Ingestão
- CI / scanners
- Warehouse / ledger
- Dashboards e auditoria

### Exemplo de instrumentação local


```text
# Exemplo ilustrativo; adapte ao agente e ao collector aprovados.
export OTEL_RESOURCE_ATTRIBUTES="story.id=S-123,service.name=payments-api,squad=core-payments"
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otel-collector.internal:4318"
export OTEL_EXPORTER_OTLP_PROTOCOL="http/protobuf"

# Não habilite exportação de prompt/resposta sem aprovação explícita.
# Atributos customizados só chegam ao backend se a instrumentação os propagar.
```


### Fontes e qualidade do número

- Tokens: preferir usage retornado pelo provedor/gateway. OTel captura somente o que a instrumentação expõe.
- Custo: gateway calcula estimativa com tabela de preços; fatura é fonte de reconciliação. Registrar versão da tabela de preço.
- ACU: unidade comercial do Devin, não equivale a token. Converter para USD apenas com contrato e faturamento correspondentes.
- Tempo: Git/Jira/CI possuem relógios e eventos diferentes; definir timezone, calendário e regra de início/fim.
- CodeBurn/ccusage: ferramentas locais podem ajudar na análise, mas não substituem o registro do provedor nem garantem cobertura de todos os clientes.

### Reconciliação e controles

1. Comparar custo agregado do ledger com a fatura por provedor e período.
2. Comparar amostra de sessões com painel/API do fornecedor.
3. Calcular cobertura: custo sem Story ID / custo total. Meta inicial sugerida: abaixo de 5%, sujeita a viabilidade.
4. Rodar story de calibração com uso conhecido e registrar discrepâncias.
5. Alertar custo zero inesperado, modelo sem tabela de preço, sessão sem identidade e trace sem Story ID.
6. Preservar trilha imutável ou protegida contra alteração para evidências críticas.
7. Definir teto de gasto por execução de agente. O GitHub Agentic Workflows, por exemplo, já aplica teto padrão por run e estimativa mensal ( [InfoQ](https://www.infoq.com/news/2026/11/github-agentic-workflows-ga/) ).
8. Alertar uso anômalo de credenciais de modelo: a Mandiant documenta LLMJacking, a monetização de credenciais de nuvem roubadas usando os modelos da vítima ( [Google Cloud / Mandiant](https://cloud.google.com/blog/topics/threat-intelligence/llmjacking-monetizing-compromised-cloud-models/) ).

### Comandos Git de apoio


```text
git worktree add ../work-S-123 -b feat/S-123
# Depois do trabalho:
git status --short
git log -1 --format='%H%n%an%n%ad%n%s' --date=iso-strict
# PR deve conter Story ID e links para spec/evidências.
```


**Commit do agente:** o `bmad-build` faz commit local com mensagem conventional, sem os trailers acima, e nunca faz push. Antes do push, acrescentar os trailers com amend (testado em 14/11/2026): `git commit --amend --no-edit --trailer "Story: S-001" --trailer "AI-Assisted: bmad+<agente>"`. Ver Tutorial A, passo 24.

:::danger

Privacidade:

tracing não é autorização para capturar prompts, respostas, diffs completos ou payloads. Começar com metadados técnicos e tokens agregados; conteúdo deve ser opt-in, redigido, retido pelo mínimo e aprovado pelo controlador de dados.

:::

Documentação oficial

- [OpenTelemetry — atributos gen_ai](https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/)
- [OpenTelemetry — agent spans](https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/)
- [LiteLLM — cost tracking](https://docs.litellm.ai/docs/proxy/cost_tracking)
- [LiteLLM — tag budgets](https://docs.litellm.ai/docs/proxy/tag_budgets)
- [LiteLLM — virtual keys](https://docs.litellm.ai/docs/proxy/virtual_keys)
- [Langfuse — OpenTelemetry](https://langfuse.com/integrations/native/opentelemetry)
- [git interpret-trailers](https://git-scm.com/docs/git-interpret-trailers)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Os 12 pilares do harness](#pillars)

[Tutoriais operacionais →](#tutorials)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026

<a id="tutorials"></a>

*06 · Runbooks*

<h2 id="h-tutorials">Tutoriais operacionais</h2>

Três fluxos: nova feature (Tutorial A, passo a passo executável com BMAD 6.12.4 e quality gate de pre-commit com loop de autocorreção, do zero ao push e PR), evolução de feature e correção de bug.

### Setup base de repositório (padrão BMAD 6.12.4)


```text
repo/
├── AGENTS.md                  # bloco bmad:context + regra do loop de autocorreção
├── .githooks/                 # pre-commit (14 categorias) e commit-msg, gerados pela skill
├── go.mod, *.go               # código do exemplo (Go)
├── _bmad/                     # config, scripts, manifest e custom/ (versionado)
│   └── custom/                # overrides do time (*.toml); *.user.toml fica fora do git
├── _bmad-output/              # versionado
│   ├── planning-artifacts/
│   │   ├── briefs/brief-<projeto>-<data>/brief.md
│   │   ├── prds/prd-<projeto>-<data>/prd.md
│   │   ├── architecture/architecture-<projeto>-<data>/ARCHITECTURE-SPINE.md   # decisões AD-n
│   │   ├── epics.md
│   │   └── implementation-readiness.md
│   └── implementation-artifacts/
│       ├── sprint-status.yaml
│       ├── spec-1-1-<slug>.md
│       ├── deferred-work.md
│       └── epic-1-retro-<data>.md
├── .claude/skills/            # Claude Code: bmad-* e pre-commit-quality-gate
├── .agents/skills/            # Cursor, Codex, Devin e outros agentes: idem
├── evals/
├── scripts/
└── .github/workflows/
```


Contrato de spec do piloto: BMAD v6.12.4, linha estável (npm `latest` em 14/11/2026). V7 está em preview alpha e muda instalador e nomes; não misturar skills e comandos entre versões. `_bmad/` e `_bmad-output/` são versionados no repositório.

### Tutorial A — Nova feature, do zero ao push (hands-on)

Roteiro sequencial com BMAD Method **v6.12.4** (linha estável, verificada em 14/11/2026). Exemplo genérico de ambiente bancário: `GET /contas/{id}/saldo` em Go, com dados sintéticos e Story `S-001`. Cada passo traz objetivo, entrada, comando exato, resultado esperado, artefatos, checkpoint e documentação oficial. **[REAL]** = saída capturada no ensaio de 14/11/2026; **[APROXIMADO]** = depende do modelo; o texto varia, mas arquivos e pastas vêm do código dos skills instalados.

:::note

Versão:

o site docs.bmad-method.org já documenta a v7 (preview alpha), que tem outro instalador. A documentação da v6.12 fica no branch

V6.12

do GitHub; todos os links abaixo apontam para lá. Por isso o comando de instalação fixa

bmad-method@6.12.4

.

:::

#### Como invocar um skill em cada agente

Os passos citam o skill pelo nome; os blocos usam o prefixo `/`. Os skills são arquivos `SKILL.md` portáveis no padrão Agent Skills e podem ser customizados pelo time em `_bmad/custom/<skill>.toml` ([Customize BMad](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/customize/customize-bmad.md), [Adopt BMad Across a Team](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/customize/adopt-bmad-across-a-team.md)).

<div class="table-wrap">
<table>
<tr><th>Agente</th><th>Onde o skill fica</th><th>Como invocar</th><th>Fonte</th></tr>
<tr><td>Claude Code</td><td>`.claude/skills/`</td><td>`/bmad-build`</td><td>[documentação](https://code.claude.com/docs/en/skills)</td></tr>
<tr><td>Cursor</td><td>`.agents/skills/`</td><td>`/ no chat do Agent, depois bmad-build`</td><td>[documentação](https://cursor.com/docs/context/skills)</td></tr>
<tr><td>Codex</td><td>`.agents/skills/`</td><td>`$bmad-build`</td><td>[documentação](https://developers.openai.com/codex/skills)</td></tr>
<tr><td>Devin (contratado) e outros</td><td>`.agents/skills/ (Devin também lê .claude/skills/)`</td><td>`skill pelo nome; no Devin CLI, /bmad-build`</td><td>[documentação](https://docs.devin.ai/product-guides/skills)</td></tr>
</table>
</div>

**Nomes atuais:** na v6.12.4 o PRD é `bmad-prd` (intents create, update, validate) e a arquitetura é `bmad-architecture`. Os nomes antigos, como `bmad-create-prd`, só existem se a instalação usar `--shims` (50 skills em vez de 29, testado em 14/11/2026). Regras de condução: cada skill em **chat novo**; `bmad-build` exige **árvore limpa** e **branch coerente**, faz commit local e **nunca faz push**.

:::note

Guardrail na fronteira do commit:

os passos 08 a 10 instalam a skill

[pre-commit-quality-gate](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate)

(repositório público custom-skills) e a regra do loop de autocorreção no AGENTS.md; o passo 20 mostra o loop em ação no commit do

bmad-build

. O hook dá feedback rápido ao agente, mas não é fronteira de segurança: o CI repete os gates (página 04, pilar 10).

:::

#### Índice dos passos

- [00Pré-requisitos](#passo-0)
- [01Repositório GitHub e módulo Go](#passo-1)
- [02Instalar o BMAD fixado e sem prompts](#passo-2)
- [03Conferir os skills instalados](#passo-3)
- [04Commit da instalação](#passo-4)
- [05Branch da story](#passo-5)
- [06Pedir orientação ao BMAD](#passo-6)
- [07Contexto do repositório (AGENTS.md)](#passo-7)
- [08Quality gate: instalar a skill e gerar os hooks](#passo-8)
- [09Quality gate: ativar e dry-run](#passo-9)
- [10Loop de autocorreção: regra no AGENTS.md e commit](#passo-10)
- [11Discovery: product brief](#passo-11)
- [12Spec: PRD (create)](#passo-12)
- [13Spec: PRD (validate)](#passo-13)
- [14Spec: arquitetura (spine)](#passo-14)
- [15Decomposição: épicos e stories](#passo-15)
- [16Readiness gate](#passo-16)
- [17Sprint planning](#passo-17)
- [18Commit do planejamento](#passo-18)
- [19Implementação: bmad-build da story 1-1](#passo-19)
- [20Loop de autocorreção no commit do agente](#passo-20)
- [21Verificação local](#passo-21)
- [22Code review independente](#passo-22)
- [23Walkthrough para o review humano](#passo-23)
- [24Trailers da página 05 no commit do agente](#passo-24)
- [25Push do branch](#passo-25)
- [26Abrir o PR no GitHub (web)](#passo-26)
- [27CI, review humano e merge](#passo-27)
- [28Retrospectiva do épico](#passo-28)

<h4 id="passo-0">00 · Pré-requisitos</h4>

*Setup*

**Objetivo**

Provar que a máquina atende ao README da v6.12 (Node 20.12+, Python 3.10+, uv, Git) e ao exemplo (Go).

**Entrada**

Terminal na máquina da demo.

**Comando exato**

```text
node -v && python3 --version && uv --version && git --version && go version
```

**Resultado esperado **[REAL]****

```text
v24.22.1
Python 3.13.5
uv 0.13.7 (x86_64-unknown-linux-gnu)
git version 2.47.3
go version go1.27.3 linux/amd64
```

**Artefatos**

Nenhum.

**Checkpoint**

Node ≥ 20.12, Python ≥ 3.10, uv presente. Sem uv o instalador só avisa, mas bmad-build não roda.

**Doc oficial**

[Install BMad (v6.12)](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/start/install-bmad.md)

·

[uv](https://docs.astral.sh/uv/)

·

[Go: instalação](https://go.dev/doc/install)

<h4 id="passo-1">01 · Repositório GitHub e módulo Go</h4>

*Setup*

**Objetivo**

Partir de um repositório vazio com remoto no GitHub e o módulo Go criado.

**Entrada**

No GitHub (web): New repository → nome demo-saldo, sem README. Copie a URL HTTPS ou SSH.

**Comando exato**

```text
mkdir demo-saldo && cd demo-saldo
git init -b main
git remote add origin <URL_DO_REPO_GITHUB>
go mod init demo-saldo
git add go.mod
git commit -m "chore: inicializa módulo Go demo-saldo"
git push -u origin main
```

**Resultado esperado **[REAL]****

```text
Initialized empty Git repository in .../demo-saldo/.git/
go: creating new go.mod: module demo-saldo
[main (root-commit) 4e7f878] chore: inicializa módulo Go demo-saldo
 1 file changed, 3 insertions(+)
 * [new branch]      main -> main
```

**Artefatos**

go.mod (module demo-saldo; go 1.27.3)

**Checkpoint**

git status → On branch main, nothing to commit. O branch main aparece no GitHub.

**Doc oficial**

[Go: criar um módulo](https://go.dev/doc/tutorial/create-module)

<h4 id="passo-2">02 · Instalar o BMAD fixado e sem prompts</h4>

*Setup*

**Objetivo**

Instalar o módulo BMad Method (bmm) para os agentes da equipe, com versão fixada.

**Entrada**

Raiz do repositório.

**Comando exato**

```text
npx bmad-method@6.12.4 install --directory . --modules bmm \
  --tools claude-code,cursor,codex \
  --communication-language "Portuguese (Brazil)" \
  --document-output-language "Portuguese (Brazil)" --yes
```

**Resultado esperado **[REAL]****

```text
◆  ✅ Python UV check pass (uv 0.13.7 detected).
◆  claude-code configured: 29 skills → .claude/skills
◆  cursor configured: 29 skills → .agents/skills
╭─BMAD is ready to use!──────────────────────╮
│  ✓  BMad Core Module (v6.12.4, installed)  │
│  ✓  BMad Method (v6.12.4, installed)       │
│  ✓  codex (29 skills → .agents/skills)     │
│  Installed to: <repo>/_bmad                │
```

**Artefatos**

_bmad/ (config, scripts, manifest, custom/), _bmad-output/ (vazio), .claude/skills/bmad-* (29), .agents/skills/bmad-* (29).

**Checkpoint**

_bmad/_config/manifest.yaml mostra version: 6.12.4. IDs de ferramenta: npx bmad-method@6.12.4 install --list-tools.

**Doc oficial**

[Install BMad (v6.12)](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/start/install-bmad.md)

<h4 id="passo-3">03 · Conferir os skills instalados</h4>

*Setup*

**Objetivo**

Mostrar à audiência o que foi instalado e para onde cada fase escreve.

**Entrada**

Raiz do repositório.

**Comando exato**

```text
ls .claude/skills
cat _bmad/bmm/config.yaml
```

**Resultado esperado **[REAL]****

```text
bmad-advanced-elicitation  bmad-agent-analyst  bmad-agent-architect  bmad-agent-dev
bmad-agent-pm  bmad-agent-ux-designer  bmad-architecture  bmad-brainstorming  bmad-build
bmad-build-auto  bmad-code-review  bmad-correct-course  bmad-create-epics-and-stories
bmad-customize  bmad-deep-recon  bmad-forge-idea  bmad-help  bmad-party-mode  bmad-prd
bmad-prfaq  bmad-product-brief  bmad-project-context  bmad-qa-generate-e2e-tests
bmad-retrospective  bmad-review  bmad-spec  bmad-sprint-planning  bmad-ux  bmad-walkthrough
...
planning_artifacts: "{project-root}/_bmad-output/planning-artifacts"
implementation_artifacts: "{project-root}/_bmad-output/implementation-artifacts"
```

**Artefatos**

Nenhum novo.

**Checkpoint**

Os dois caminhos acima são onde as fases 1 a 6 gravam.

**Doc oficial**

[Skills and Agents](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/reference/skills-and-agents.md)

<h4 id="passo-4">04 · Commit da instalação</h4>

*Setup*

**Objetivo**

Versionar _bmad/ e os skills; deixar a árvore limpa (bmad-build exige).

**Entrada**

Raiz do repositório.

**Comando exato**

```text
git add -A
git commit -m "chore: instala BMAD Method v6.12.4 (bmm)"
git push
```

**Resultado esperado **[REAL]****

```text
[main f15ba5d] chore: instala BMAD Method v6.12.4 (bmm)
 448 files changed, 47202 insertions(+)
```

**Artefatos**

Commit no main com _bmad/, .claude/skills/, .agents/skills/.

**Checkpoint**

git status limpo.

**Doc oficial**

[Adopt BMad Across a Team](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/customize/adopt-bmad-across-a-team.md)

<h4 id="passo-5">05 · Branch da story</h4>

*Setup*

**Objetivo**

Criar o branch com o Story ID antes de qualquer artefato.

**Entrada**

Raiz do repositório.

**Comando exato**

```text
git switch -c feat/S-001-consulta-saldo
```

**Resultado esperado **[REAL]****

```text
Switched to a new branch 'feat/S-001-consulta-saldo'
```

**Artefatos**

Branch local.

**Checkpoint**

O nome carrega o Story ID (página 05). bmad-build confere se o branch combina com a tarefa.

**Doc oficial**

[Build a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/build-a-change.md)

<h4 id="passo-6">06 · Pedir orientação ao BMAD</h4>

*Setup*

**Objetivo**

Validar a integração do agente com os skills.

**Entrada**

Abra o agente na raiz do repositório, em chat novo.

**Comando exato**

```text
/bmad-help Vou criar uma API mínima em Go de consulta de saldo e limite disponível para conta fictícia, com dados sintéticos. Qual o próximo passo?
```

**Resultado esperado **[APROXIMADO]****

```text
Lista priorizada de próximos skills, cada um com o seu comando.
```

**Artefatos**

Nenhum.

**Checkpoint**

O agente reconheceu e executou o skill (teste de integração da documentação).

**Doc oficial**

[Install BMad (v6.12)](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/start/install-bmad.md)

<h4 id="passo-7">07 · Contexto do repositório (AGENTS.md)</h4>

*Setup*

**Objetivo**

Registrar as regras do playbook para todo agente que abrir o repositório.

**Entrada**

Chat novo.

**Comando exato**

```text
/bmad-project-context set up AGENTS.md. Regras: sem acesso a produção, sem PII, dados sintéticos, branch no formato <tipo>/S-NNN-<slug>, todo commit com o trailer Story: S-001, testes com go vet ./... e go test ./...
```

**Resultado esperado **[APROXIMADO]****

```text
Bloco proposto para aprovação, gravado entre <!-- bmad:context --> e <!-- /bmad:context --> no AGENTS.md. O skill nunca faz commit.
```

**Artefatos**

AGENTS.md (e, para Claude Code, proposta de @AGENTS.md no CLAUDE.md).

**Checkpoint**

git diff AGENTS.md revisado por humano.

**Doc oficial**

[Set and Maintain Project Context](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/existing-codebases/set-and-maintain-project-context.md)

<h4 id="passo-8">08 · Quality gate: instalar a skill e gerar os hooks</h4>

*Setup*

**Objetivo**

Pôr guardrails determinísticos na fronteira do commit antes do primeiro código do agente. A skill pre-commit-quality-gate identifica a stack e gera um pipeline fail-fast de 14 categorias, do barato ao caro, mais a validação de Conventional Commits.

**Entrada**

Branch da story, com o AGENTS.md do passo 07. A skill vem do repositório público custom-skills e fica versionada nos mesmos diretórios dos skills do BMAD. Depois de copiar, abra um chat novo no agente.

**Comando exato**

```text
git clone --depth 1 https://github.com/Josemalyson/custom-skills.git /tmp/custom-skills
cp -r /tmp/custom-skills/pre-commit-quality-gate .claude/skills/
cp -r /tmp/custom-skills/pre-commit-quality-gate .agents/skills/

# No chat novo:
/pre-commit-quality-gate Gere .githooks/pre-commit e .githooks/commit-msg para este repositório Go. Siga o AGENTS.md: branch no formato <tipo>/S-NNN-<slug>; sem PII e sem URL de produção como convention guards. Mantenha os limiares padrão (cobertura 90%, mutação 70%, p95 < 200 ms). Não faça commit.
```

**Resultado esperado **[APROXIMADO]****

```text
1. Imprime o fingerprint: Go (go.mod), runner go test, sem linter configurado, sem schema, sem Dockerfile, AGENTS.md presente, sem hooks anteriores.
2. Lê references/go.md e resolve uma ferramenta por categoria: gitleaks, gofmt, golangci-lint, govulncheck, deadcode, modernize, guards do AGENTS.md, go mod tidy, go test com cobertura, go test -race, WireMock, gremlins, k6, buf e docker build.
3. Gera .githooks/pre-commit a partir de scripts/template.sh, sem nenhum {{placeholder}}, e .githooks/commit-msg.
4. Lista as ferramentas que faltam, com o comando de instalação de cada uma.
```

**Artefatos**

.githooks/pre-commit, .githooks/commit-msg, .claude/skills/pre-commit-quality-gate/ e .agents/skills/pre-commit-quality-gate/

**Checkpoint**

grep -c "&#123;&#123;" .githooks/pre-commit retorna 0. O Tech Lead lê o cabeçalho do hook, onde ficam as decisões desta geração (padrão de branch do AGENTS.md, limiares com awk, [SKIP] sem pacote Go). Ferramentas do ensaio: go install golang.org/x/vuln/cmd/govulncheck@v1.9.0 golang.org/x/tools/cmd/deadcode@v0.52.0 golang.org/x/tools/go/analysis/passes/modernize/cmd/modernize@v0.52.0 github.com/golangci/golangci-lint/v2/cmd/golangci-lint@v2.15.0.

**Doc oficial**

[Skill pre-commit-quality-gate (repositório público)](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate)

·

[pre-commit-quality-gate: referência Go](https://github.com/Josemalyson/custom-skills/blob/main/pre-commit-quality-gate/references/go.md)

·

[golangci-lint](https://golangci-lint.run/)

·

[govulncheck](https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck)

<h4 id="passo-9">09 · Quality gate: ativar e dry-run</h4>

*Setup*

**Objetivo**

Ativar os hooks versionados e provar que eles rodam de ponta a ponta antes de existir código.

**Entrada**

Raiz do repositório.

**Comando exato**

```text
chmod +x .githooks/pre-commit .githooks/commit-msg
git config core.hooksPath .githooks
git config core.hooksPath
bash -n .githooks/pre-commit && bash -n .githooks/commit-msg && echo "bash -n: ok"
bash .githooks/pre-commit
```

**Resultado esperado **[REAL]****

```text
.githooks
bash -n: ok
[STEP -1/14] Secret Scanner — Gitleaks
10:21AM INF 0 commits scanned.
10:21AM INF scanned ~0 bytes (0) in 115ms
10:21AM INF no leaks found
[PASS] Secret Scanner
[STEP 0/14] Branch Name — <tipo>/S-NNN-<slug>
[PASS] Branch Name
[STEP 1/14] gofmt — formatação
[PASS] gofmt
[STEP 2/14] golangci-lint — qualidade estática
[SKIP] golangci-lint — módulo ainda sem pacote Go
[STEP 3/14] govulncheck — vulnerabilidades conhecidas
[SKIP] govulncheck — módulo ainda sem pacote Go
[STEP 4/14] deadcode — código inalcançável
[SKIP] deadcode — módulo ainda sem pacote Go
[STEP 5/14] modernize — idiomas modernos (report-only)
[SKIP] modernize — módulo ainda sem pacote Go
[STEP 6/14] Convention guards — regras do AGENTS.md
[PASS] Convention guards
[STEP 7/14] go mod tidy — higiene de módulos
[SKIP] go mod tidy — módulo ainda sem pacote Go
[STEP 8/14] go test + cobertura — limiar 90%
[SKIP] go test — módulo ainda sem pacote Go
[STEP 9/14] go test -race — data races
[SKIP] go test -race — módulo ainda sem pacote Go
[STEP 10/14] Integration tests — fluxos completos via WireMock
[WARN] Docker unavailable — integration tests soft-skipped
[STEP 11/14] Mutation tests — qualidade da suíte via gremlins
[WARN] Docker unavailable — mutation tests soft-skipped
[STEP 12/14] Performance tests — latência/throughput via k6
[WARN] Docker unavailable — performance tests soft-skipped
[STEP 13/14] Schema pipeline — OpenAPI/proto
[SKIP] Schema pipeline — nenhum schema staged
[STEP 14/14] Docker build — Dockerfile de produção
[SKIP] Docker build (set SKIP_DOCKER=0 to enable)
✓ All 14 quality gates passed — committing.
```

**Artefatos**

Nenhum novo. O core.hooksPath fica no .git/config local, então cada pessoa (e cada sandbox de agente) roda o git config uma vez depois do clone.

**Checkpoint**

Sem erro de sintaxe. [PASS] onde há ferramenta; [SKIP] nos steps Go enquanto não existe pacote; [WARN] nos steps 10 a 12 sem Docker (soft-skip, não bloqueia). O que fica em [WARN] ou [SKIP] aqui precisa ser coberto no CI.

**Doc oficial**

[githooks (pre-commit, commit-msg)](https://git-scm.com/docs/githooks)

·

[git config (core.hooksPath)](https://git-scm.com/docs/git-config)

·

[Gitleaks](https://github.com/gitleaks/gitleaks)

<h4 id="passo-10">10 · Loop de autocorreção: regra no AGENTS.md e commit</h4>

*Setup*

**Objetivo**

Dizer ao agente o que fazer quando o hook bloquear: ler o log, corrigir só a categoria que falhou e repetir o commit, com no máximo 3 tentativas. Na 3ª falha, ele para e entrega a um humano.

**Entrada**

Raiz do repositório. O bloco vai no fim do AGENTS.md, fora do bloco bmad:context (que pertence ao bmad-project-context). Pode ser colado à mão ou pelo heredoc abaixo.

**Comando exato**

```text
cat >> AGENTS.md <<'EOF'
## Quality gate de pre-commit (loop de autocorreção)
- Os hooks ficam em `.githooks/` (skill pre-commit-quality-gate); ative com `git config core.hooksPath .githooks`.
- Todo commit passa por `.githooks/pre-commit` e `.githooks/commit-msg`. Nunca use `--no-verify`, `SKIP_*` ou `core.hooksPath` diferente para contornar o gate.
- Se o commit falhar com `[FAIL]`:
  1. Leia o log inteiro e identifique a única linha `[FAIL]` e o `[STEP N/14]` acima dela.
  2. Corrija só a causa dessa categoria. Não mexa em outros arquivos, não baixe limiar, não acrescente exclusão nem edite `.githooks/`.
  3. Rode `git add` nos arquivos corrigidos e repita o mesmo `git commit`.
- Limite: 3 tentativas de commit por mudança. Se a 3ª falhar, pare, não tente outra abordagem e entregue a um humano: o log da última tentativa, o step que falhou e o que você já tentou.
- `[WARN]` e `[SKIP]` não bloqueiam; cite-os no PR como verificação não executada.
EOF
git add AGENTS.md .githooks .claude/skills/pre-commit-quality-gate .agents/skills/pre-commit-quality-gate
git commit -m "chore(S-001): AGENTS.md e quality gate de pre-commit" \
  --trailer "Story: S-001" --trailer "AI-Assisted: bmad+<agente>"
```

**Resultado esperado **[REAL]****

```text
[STEP -1/14] Secret Scanner — Gitleaks
10:21AM INF 0 commits scanned.
10:21AM INF scanned ~116522 bytes (116.52 KB) in 128ms
10:21AM INF no leaks found
[PASS] Secret Scanner
(… mesmos steps do dry-run: [PASS], [SKIP] e [WARN] …)
✓ All 14 quality gates passed — committing.
[PASS] commit-msg: Conventional Commits
[feat/S-001-consulta-saldo bac9564] chore(S-001): AGENTS.md e quality gate de pre-commit
 21 files changed, 3120 insertions(+)
(… create mode dos 21 arquivos: skill nos dois diretórios (9 + 9), .githooks/ (2) e AGENTS.md …)
```

**Artefatos**

Commit no branch da story com AGENTS.md, .githooks/ e a skill nos dois diretórios.

**Checkpoint**

git status limpo, como o bmad-build exige. Daqui em diante todo commit passa pelos hooks, inclusive o do bmad-build e o amend dos trailers.

**Doc oficial**

[AGENTS.md](https://agents.md/)

·

[githooks (pre-commit, commit-msg)](https://git-scm.com/docs/githooks)

·

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

*Loop de autocorreção: git commit, pre-commit com 14 categorias; se der FAIL e houver tentativa, o agente lê o log, corrige só a categoria e repete o commit; na 3ª falha, para e entrega ao humano*

<h4 id="passo-11">11 · Discovery: product brief</h4>

*1. Discovery*

**Objetivo**

Registrar problema, usuário, valor e restrições.

**Entrada**

Chat novo.

**Comando exato**

```text
/bmad-product-brief create. Fast path. Problema: canais internos precisam consultar saldo e limite disponível de uma conta. Usuário: aplicativo interno de atendimento. Valor: resposta única e consistente. Restrições: dados sintéticos, sem PII, sem acesso a produção. Métrica: 100% dos critérios de aceite automatizados.
```

**Resultado esperado **[APROXIMADO]****

```text
1 ou 2 perguntas consolidadas; depois o brief completo com tags [ASSUMPTION].
```

**Artefatos**

_bmad-output/planning-artifacts/briefs/brief-&lt;projeto>-&lt;data>/brief.md e addendum.md

**Checkpoint**

Ler o brief e corrigir cada [ASSUMPTION].

**Doc oficial**

[Define Requirements and a Specification](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/define-requirements-and-a-specification.md)

<h4 id="passo-12">12 · Spec: PRD (create)</h4>

*2. Spec*

**Objetivo**

Transformar o brief em requisitos funcionais (IDs estáveis) e não funcionais.

**Entrada**

Chat novo.

**Comando exato**

```text
/bmad-prd create. Fast path. Use o brief em _bmad-output/planning-artifacts/briefs/.
```

**Resultado esperado **[APROXIMADO]****

```text
PRD com FRs e NFRs; decisões técnicas no addendum.
```

**Artefatos**

_bmad-output/planning-artifacts/prds/prd-&lt;projeto>-&lt;data>/prd.md, addendum.md e .memlog.md (trilha de decisões, append-only)

**Checkpoint**

Todo requisito do brief aparece no PRD.

**Doc oficial**

[Define Requirements and a Specification](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/define-requirements-and-a-specification.md)

<h4 id="passo-13">13 · Spec: PRD (validate)</h4>

*2. Spec*

**Objetivo**

Obter um relatório de achados sem alterar o PRD.

**Entrada**

Chat novo.

**Comando exato**

```text
/bmad-prd validate o PRD em _bmad-output/planning-artifacts/prds/
```

**Resultado esperado **[APROXIMADO]****

```text
Relatório de achados; o PRD não muda.
```

**Artefatos**

Relatório HTML + .md na pasta do PRD.

**Checkpoint**

Negócio e Tech Lead aprovam. Mudança no PRD só via bmad-prd update; nunca editar prd.md à mão.

**Doc oficial**

[Plan Inside an Organization](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/plan-inside-an-organization.md)

<h4 id="passo-14">14 · Spec: arquitetura (spine)</h4>

*2. Spec*

**Objetivo**

Registrar só as decisões que divergiriam se tomadas separadamente.

**Entrada**

Chat novo. O padrão do skill é Coaching; peça Fast path para caber no tempo.

**Comando exato**

```text
/bmad-architecture create the architecture a partir do PRD. Stack: Go, net/http da biblioteca padrão. Fast path.
```

**Resultado esperado **[APROXIMADO]****

```text
Decisões AD-n com alternativas pesadas e tags [ASSUMPTION].
```

**Artefatos**

_bmad-output/planning-artifacts/architecture/architecture-&lt;projeto>-&lt;data>/ARCHITECTURE-SPINE.md (decisões AD-n; não há arquivos ADR)

**Checkpoint**

Tech Lead aprova as AD-n.

**Doc oficial**

[Design UX and Architecture](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/design-ux-and-architecture.md)

<h4 id="passo-15">15 · Decomposição: épicos e stories</h4>

*3. Decomposição*

**Objetivo**

Quebrar PRD e spine em stories com critérios Given/When/Then.

**Entrada**

Chat novo.

**Comando exato**

```text
/bmad-create-epics-and-stories create the epics and stories list
```

**Resultado esperado **[APROXIMADO]****

```text
O skill pede aprovação explícita da lista de épicos antes de detalhar as stories (As a / I want / So that + Given/When/Then).
```

**Artefatos**

_bmad-output/planning-artifacts/epics.md (inventário de FR/NFR e FR Coverage Map)

**Checkpoint**

Todo FR do PRD aparece no FR Coverage Map.

**Doc oficial**

[Break Work into Stories and Track It](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/break-work-into-stories-and-track-it.md)

<h4 id="passo-16">16 · Readiness gate</h4>

*3. Decomposição*

**Objetivo**

Verificar se um dev implementaria sem inventar decisões.

**Entrada**

Chat novo.

**Comando exato**

```text
/bmad-sprint-planning check implementation readiness
```

**Resultado esperado **[APROXIMADO]****

```text
Veredito PASS, CONCERNS ou FAIL. FAIL lista achados por severidade, cada um com o skill que corrige.
```

**Artefatos**

_bmad-output/planning-artifacts/implementation-readiness.md

**Checkpoint**

PASS, ou CONCERNS aceitas por escrito.

**Doc oficial**

[Break Work into Stories and Track It](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/break-work-into-stories-and-track-it.md)

<h4 id="passo-17">17 · Sprint planning</h4>

*3. Decomposição*

**Objetivo**

Gerar o arquivo de acompanhamento das stories.

**Entrada**

Chat novo.

**Comando exato**

```text
/bmad-sprint-planning run sprint planning
```

**Resultado esperado **[APROXIMADO]****

```text
O skill repete o gate e, se aprovado, gera o sprint status com chaves epic-1, 1-1-<slug>, epic-1-retrospective.
```

**Artefatos**

_bmad-output/implementation-artifacts/sprint-status.yaml

**Checkpoint**

Story 1-1 em backlog ou ready-for-dev.

**Doc oficial**

[Break Work into Stories and Track It](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/break-work-into-stories-and-track-it.md)

<h4 id="passo-18">18 · Commit do planejamento</h4>

*3. Decomposição*

**Objetivo**

Versionar _bmad-output/ e deixar a árvore limpa para o bmad-build.

**Entrada**

Raiz do repositório.

**Comando exato**

```text
git add _bmad-output/
git commit -m "docs(S-001): artefatos de planejamento BMAD" \
  --trailer "Story: S-001" --trailer "AI-Assisted: bmad+<agente>"
git push -u origin feat/S-001-consulta-saldo
```

**Resultado esperado **[REAL]****

```text
docs(S-001): artefatos de planejamento BMAD

Story: S-001
AI-Assisted: bmad+<agente>
 * [new branch]      feat/S-001-consulta-saldo -> feat/S-001-consulta-saldo
```

**Artefatos**

Commit com brief, PRD, spine, epics.md, readiness e sprint-status.yaml.

**Checkpoint**

git status limpo.

**Doc oficial**

[git interpret-trailers](https://git-scm.com/docs/git-interpret-trailers)

·

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

<h4 id="passo-19">19 · Implementação: bmad-build da story 1-1</h4>

*4. Implementação*

**Objetivo**

Implementar handler, testes e verificação em uma sessão.

**Entrada**

Chat novo, árvore limpa, branch da story.

**Comando exato**

```text
/bmad-build Implementar a story 1.1 de _bmad-output/planning-artifacts/epics.md (S-001): GET /contas/{id}/saldo em Go com net/http, dados sintéticos em memória, valores em centavos, testes table-driven com httptest; main() fino que só chama run(addr), com run testado (servidor respondendo e porta ocupada) para a cobertura do pacote inteiro passar de 90%.
```

**Resultado esperado **[APROXIMADO]****

```text
1. Investiga repositório e planejamento; confere árvore limpa e branch.
2. Reporta lacunas, ações irreversíveis e footprint; se algo for sinalizado, escreve um plano e espera a sua aprovação (bloco <frozen-after-approval>).
3. Implementa; grava baseline_commit; status in-progress.
4. Revisa com camadas independentes (blind-hunter, edge-case-hunter, verification-gap), faz triagem e corrige.
5. Status done; sprint-status 1-1 → review; commit local com mensagem conventional, que passa pelos hooks; se der [FAIL], segue o loop do AGENTS.md (próximo passo). Não faz push.
```

**Artefatos**

_bmad-output/implementation-artifacts/spec-1-1-&lt;slug>.md (status, route, baseline_commit, Review Triage Log), código Go, testes e, se houver, _bmad-output/implementation-artifacts/deferred-work.md

**Checkpoint**

git log -1 mostra o commit; git status limpo; story 1-1 em review.

**Doc oficial**

[Build a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/build-a-change.md)

<h4 id="passo-20">20 · Loop de autocorreção no commit do agente</h4>

*4. Implementação*

**Objetivo**

Ver o loop do AGENTS.md funcionando: o hook bloqueia, o agente corrige a causa e o mesmo commit passa, sem --no-verify.

**Entrada**

Dentro da sessão do bmad-build, no commit local (etapa 5 do passo anterior). No ensaio, o saldo.go entrou com uma linha indentada com espaços, uma falha de formatação introduzida de propósito para reproduzir o loop.

**Comando exato**

```text
# Tentativa 1: o commit do bmad-build
git commit -m "feat(saldo): GET /contas/{id}/saldo com dados sintéticos"
# [FAIL] no STEP 1/14: corrigir só a formatação
gofmt -w saldo.go
git add saldo.go
# Tentativa 2: o mesmo commit
git commit -m "feat(saldo): GET /contas/{id}/saldo com dados sintéticos"
```

**Resultado esperado **[REAL]****

```text
── Tentativa 1 ──
[STEP -1/14] Secret Scanner — Gitleaks
10:21AM INF 0 commits scanned.
10:21AM INF scanned ~4294 bytes (4.29 KB) in 113ms
10:21AM INF no leaks found
[PASS] Secret Scanner
[STEP 0/14] Branch Name — <tipo>/S-NNN-<slug>
[PASS] Branch Name
[STEP 1/14] gofmt — formatação
saldo.go
[FAIL] gofmt: arquivos fora do padrão (rode gofmt -w nos arquivos acima)
(exit 1: commit não criado)

── Tentativa 2 ──
[STEP -1/14] Secret Scanner — Gitleaks
10:21AM INF 0 commits scanned.
10:21AM INF scanned ~4291 bytes (4.29 KB) in 136ms
10:21AM INF no leaks found
[PASS] Secret Scanner
[STEP 0/14] Branch Name — <tipo>/S-NNN-<slug>
[PASS] Branch Name
[STEP 1/14] gofmt — formatação
[PASS] gofmt
[STEP 2/14] golangci-lint — qualidade estática
0 issues.
[PASS] golangci-lint
[STEP 3/14] govulncheck — vulnerabilidades conhecidas
(… govulncheck: GO-2026-6859 em net/http@go1.27.3, corrigido em go1.27.4; só stdlib …)
[WARN] govulncheck: vulnerabilidades só na stdlib (atualize o Go)
[PASS] govulncheck
[STEP 4/14] deadcode — código inalcançável
[PASS] deadcode
[STEP 5/14] modernize — idiomas modernos (report-only)
[PASS] modernize
[STEP 6/14] Convention guards — regras do AGENTS.md
[PASS] Convention guards
[STEP 7/14] go mod tidy — higiene de módulos
[PASS] go mod tidy
[STEP 8/14] go test + cobertura — limiar 90%
ok  	demo-saldo	0.028s	coverage: 95.5% of statements
[PASS] go test — cobertura 95.5%
[STEP 9/14] go test -race — data races
ok  	demo-saldo	1.037s
[PASS] go test -race
[STEP 10/14] Integration tests — fluxos completos via WireMock
[WARN] Docker unavailable — integration tests soft-skipped
[STEP 11/14] Mutation tests — qualidade da suíte via gremlins
[WARN] Docker unavailable — mutation tests soft-skipped
[STEP 12/14] Performance tests — latência/throughput via k6
[WARN] Docker unavailable — performance tests soft-skipped
[STEP 13/14] Schema pipeline — OpenAPI/proto
[SKIP] Schema pipeline — nenhum schema staged
[STEP 14/14] Docker build — Dockerfile de produção
[SKIP] Docker build (set SKIP_DOCKER=0 to enable)
✓ All 14 quality gates passed — committing.
[PASS] commit-msg: Conventional Commits
[feat/S-001-consulta-saldo 8d3b7d1] feat(saldo): GET /contas/{id}/saldo com dados sintéticos
 4 files changed, 170 insertions(+)
```

**Artefatos**

Commit local feat(saldo) criado na 2ª tentativa.

**Checkpoint**

No máximo 3 tentativas e nenhum --no-verify na sessão. Se a 3ª falhar, o agente para e entrega log, step e o que já tentou, e a decisão passa a ser humana. Os [WARN] vão para a descrição do PR. A cobertura do pacote inteiro deu 95,5% com o limiar padrão de 90%, porque main() é fino e a lógica do servidor fica em run(), testada em main_test.go. Os logs são reais; a escolha da correção (gofmt -w no arquivo que o log apontou) depende do modelo.

**Doc oficial**

[gofmt](https://pkg.go.dev/cmd/gofmt)

·

[Skill pre-commit-quality-gate (repositório público)](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate)

·

[govulncheck](https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck)

<h4 id="passo-21">21 · Verificação local</h4>

*5. Verificação*

**Objetivo**

Rodar as checagens que o CI também roda.

**Entrada**

Raiz do repositório.

**Comando exato**

```text
gofmt -l .
go vet ./...
go test -v ./...
go build -o /tmp/demo-saldo .
/tmp/demo-saldo &
sleep 1
curl -s localhost:8080/contas/0001/saldo
kill %1
```

**Resultado esperado **[REAL]****

```text
=== RUN   TestRunServeAPI
<data> <hora> demo-saldo ouvindo em 127.0.0.1:40153
--- PASS: TestRunServeAPI (0.03s)
=== RUN   TestRunPortaOcupada
--- PASS: TestRunPortaOcupada (0.00s)
=== RUN   TestSaldoHandler
=== RUN   TestSaldoHandler/conta_com_saldo_positivo
=== RUN   TestSaldoHandler/conta_com_saldo_negativo
=== RUN   TestSaldoHandler/conta_inexistente
=== RUN   TestSaldoHandler/id_inválido
=== RUN   TestSaldoHandler/método_não_permitido
--- PASS: TestSaldoHandler (0.00s)
    --- PASS: TestSaldoHandler/conta_com_saldo_positivo (0.00s)
    --- PASS: TestSaldoHandler/conta_com_saldo_negativo (0.00s)
    --- PASS: TestSaldoHandler/conta_inexistente (0.00s)
    --- PASS: TestSaldoHandler/id_inválido (0.00s)
    --- PASS: TestSaldoHandler/método_não_permitido (0.00s)
PASS
ok  	demo-saldo	0.029s
<data> <hora> demo-saldo ouvindo em :8080
{"conta_id":"0001","saldo_centavos":150000,"limite_centavos":50000,"limite_disponivel_centavos":200000}
```

**Artefatos**

Nenhum novo.

**Checkpoint**

gofmt e go vet sem saída; todos os casos PASS, inclusive os dois testes de run(). Saída capturada com a implementação de referência do ensaio; nomes de teste variam com o código gerado.

**Doc oficial**

[go vet](https://pkg.go.dev/cmd/vet)

·

[go test](https://pkg.go.dev/cmd/go)

·

[Go: table-driven tests](https://go.dev/wiki/TableDrivenTests)

·

[net/http/httptest](https://pkg.go.dev/net/http/httptest)

·

[net/http ServeMux (padrões com método e &#123;id&#125;)](https://pkg.go.dev/net/http#ServeMux)

**main() fino e run() testável:** para a cobertura do pacote inteiro passar do limiar padrão de 90% sem exceção, o `main.go` da referência só chama `run(addr)`; `main_test.go` testa `run` servindo a API e falhando com a porta ocupada. Cobertura medida pelo hook: 95,5%.


```text
package main

import (
    "log"
    "net"
    "net/http"
)

// main fica fino: toda a lógica testável está em run.
func main() {
    log.Fatal(run(":8080"))
}

// run abre a porta e serve a API; só retorna com erro (porta ocupada, por exemplo).
func run(addr string) error {
    ln, err := net.Listen("tcp", addr)
    if err != nil {
        return err
    }
    log.Printf("demo-saldo ouvindo em %s", addr)
    return http.Serve(ln, novoMux())
}
```


<h4 id="passo-22">22 · Code review independente</h4>

*5. Verificação*

**Objetivo**

Segunda revisão agentica, em chat novo, de preferência com outro modelo.

**Entrada**

Chat novo.

**Comando exato**

```text
/bmad-code-review Review the current branch against _bmad-output/implementation-artifacts/spec-1-1-<slug>.md
```

**Resultado esperado **[APROXIMADO]****

```text
Achados com severidade (low/medium/high), roteados para patch, defer ou decision needed. Você decide se aplica os patches.
```

**Artefatos**

Patches aplicados (se aprovados); itens adiados em _bmad-output/implementation-artifacts/deferred-work.md

**Checkpoint**

Nenhum achado high aberto.

**Doc oficial**

[Review a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/review-a-change.md)

<h4 id="passo-23">23 · Walkthrough para o review humano</h4>

*5. Verificação*

**Objetivo**

Entender a mudança na ordem certa antes de aprovar.

**Entrada**

No chat do build ou em chat novo.

**Comando exato**

```text
/bmad-walkthrough
```

**Resultado esperado **[APROXIMADO]****

```text
Cinco passos: orientação, walkthrough por concern, detalhes, testes e fechamento, com referências path:line.
```

**Artefatos**

Nenhum.

**Checkpoint**

O revisor consegue explicar o comportamento entregue.

**Doc oficial**

[Walk Through a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/walk-through-a-change.md)

<h4 id="passo-24">24 · Trailers da página 05 no commit do agente</h4>

*5. Verificação*

**Objetivo**

Adicionar Story e AI-Assisted ao commit local do bmad-build (ainda sem push, amend seguro).

**Entrada**

Raiz do repositório.

**Comando exato**

```text
git commit --amend --no-edit --trailer "Story: S-001" --trailer "AI-Assisted: bmad+<agente>"
git log -1 --format='%s%n%n%b'
```

**Resultado esperado **[REAL]****

```text
feat(saldo): GET /contas/{id}/saldo com dados sintéticos

Story: S-001
AI-Assisted: bmad+<agente>
```

**Artefatos**

Commit reescrito localmente.

**Checkpoint**

Trailers presentes; nada foi enviado ao remoto antes. O amend também passa pelos hooks: no ensaio, os 16 steps e o commit-msg deram PASS de novo.

**Doc oficial**

[git interpret-trailers](https://git-scm.com/docs/git-interpret-trailers)

<h4 id="passo-25">25 · Push do branch</h4>

*6. Entrega*

**Objetivo**

Enviar o branch da story ao GitHub. O BMAD nunca faz push.

**Entrada**

Raiz do repositório.

**Comando exato**

```text
git push
```

**Resultado esperado **[REAL]****

```text
To <remoto>
   <hash>..<hash>  feat/S-001-consulta-saldo -> feat/S-001-consulta-saldo
```

**Artefatos**

Branch atualizado no GitHub.

**Checkpoint**

git status → up to date with origin.

**Doc oficial**

[GitHub: comparar branches no PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)

<h4 id="passo-26">26 · Abrir o PR no GitHub (web)</h4>

*6. Entrega*

**Objetivo**

Abrir o PR com Story ID e evidências.

**Entrada**

github.com → repositório → banner amarelo "Compare &amp; pull request" (ou Pull requests → New). base: main; compare: feat/S-001-consulta-saldo.

**Comando exato**

```text
Título: feat(S-001): consulta de saldo e limite disponível

Story: S-001
Spec: _bmad-output/implementation-artifacts/spec-1-1-<slug>.md
Evidências: go vet e go test -v (saída no PR), log do quality gate com os [WARN] e [SKIP], Review Triage Log da spec
Rollback: git revert do merge
AI-Assisted: bmad+<agente>
```

**Resultado esperado **[APROXIMADO]****

```text
Clique em "Create pull request". O PR mostra os commits da story e dispara o CI configurado.
```

**Artefatos**

Pull request no GitHub.

**Checkpoint**

Título e descrição com Story ID; base main.

**Doc oficial**

[GitHub: criar um pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

·

[GitHub: comparar branches no PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)

<h4 id="passo-27">27 · CI, review humano e merge</h4>

*6. Entrega*

**Objetivo**

Aplicar os gates do playbook fora do agente.

**Entrada**

Página do PR no GitHub.

**Comando exato**

```text
# Sem comando do agente. No PR:
# 1. CI verde (go vet, go test, SAST/SCA, secret scan, policy), repetindo os gates do hook
#    local, que pode ser contornado e roda com soft-skip sem Docker
# 2. Review de pessoa diferente do autor; Approve
# 3. Merge por humano, conforme branch protegido
```

**Resultado esperado **[APROXIMADO]****

```text
PR aprovado e mergeado por humano. Merge e deploy nunca pelo agente.
```

**Artefatos**

Merge no main.

**Checkpoint**

DoD da página 02 cumprida.

**Doc oficial**

[GitHub: branches protegidos](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)

·

[GitHub: aprovar PR com reviews obrigatórios](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews)

·

[GitHub Actions: build e teste em Go](https://docs.github.com/en/actions/tutorials/build-and-test-code/go)

<h4 id="passo-28">28 · Retrospectiva do épico</h4>

*Fechamento*

**Objetivo**

Julgar o épico pela evidência (diff, commits, specs).

**Entrada**

Depois do merge, em branch novo e chat novo.

**Comando exato**

```text
git switch main && git pull
git switch -c docs/S-001-retro
/bmad-retrospective lets retro the epic 1
```

**Resultado esperado **[APROXIMADO]****

```text
Veredito accepted, accepted-with-open-items ou rejected (story não terminada → rejected). Action items vão para o sprint-status.yaml.
```

**Artefatos**

_bmad-output/implementation-artifacts/epic-1-retro-&lt;data>.md

**Checkpoint**

Commit "docs(S-001): retrospectiva do épico 1" com trailer, push e PR pelo mesmo fluxo.

**Doc oficial**

[Finish an Epic](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/finish-an-epic.md)

**Evidência para o passo 22 (code review):** no revisor híbrido do LinkedIn, checagens determinísticas vêm primeiro; revisores de IA independentes analisam o PR, achados repetidos são consolidados e achados únicos são verificados por outro modelo. A aceitação é medida por comentário que vira mudança de código ([ByteByteGo](https://blog.bytebytego.com/p/how-linkedin-uses-ai-to-review-40000)).

### Tutorial B — Evolução de feature existente

1. Recuperar PRD, spine (AD-n) e specs e confirmar se ainda representam o comportamento real.
2. Mapear consumidores, contratos, eventos, dados e dependências; não assumir que o agente conhece o sistema.
3. Gerar análise de impacto e cenários de compatibilidade.
4. Atualizar spec antes do código; incluir migração, feature flag e plano de rollback quando necessário.
5. Executar testes de regressão e contract tests nos consumidores relevantes.
6. Fazer rollout progressivo sob observabilidade e critérios de abort.

**No BMAD:** `bmad-prd` em modo update com o sinal de mudança; `bmad-correct-course` quando a mudança não cabe em uma story; `bmad-architecture` lê o código existente e registra as convenções; depois `bmad-build` por story ([Break Work into Stories and Track It](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/plan/break-work-into-stories-and-track-it.md), [Start in an Existing Codebase](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/existing-codebases/start-in-an-existing-codebase.md)).

### Tutorial C — Bug

1. Registrar sintoma, impacto, severidade, janela temporal e evidências redigidas.
2. Reproduzir em ambiente não produtivo; criar teste que falha antes da correção. Para integrações de nuvem, um emulador local pode evitar credencial real: o AWS Emulator (CC0) usa as mesmas chamadas de SDK/CLI, devolve 501 para operação não coberta e publica relatório de fidelidade por serviço ( [AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-emulator-now-available/) ). É candidato a intake, não ferramenta aprovada.
3. Investigar hipótese com logs/traces aprovados, sem copiar payload sensível para o prompt.
4. Aplicar correção mínima; evitar refatoração oportunista.
5. Executar teste de regressão, suíte relacionada, SAST e análise de impacto.
6. Review humano valida causa raiz, cobertura e risco de efeito colateral.
7. Após release, observar métricas e atualizar runbook/spec se necessário.

**No BMAD:** `/bmad-build Fix <link da issue>`, em chat novo e branch `fix/S-xxx`; o skill investiga, planeja, corrige, revisa e commita localmente ([Build a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/build-a-change.md)).

### Prompt de tarefa padrão


```text
Story: S-123
Objetivo: [resultado verificável]
Spec: _bmad-output/implementation-artifacts/spec-1-1-<slug>.md
Escopo: [arquivos/domínios permitidos]
Não objetivos: [o que não deve mudar]
Restrições: não acessar produção; não usar PII; não alterar contrato sem decisão AD-n aprovada na spine.
Verificação: [comandos de teste e scanners]
Saída: resumo, arquivos alterados, testes, riscos, custo/sessão e evidências.
Pare e peça decisão humana se houver ambiguidade, mudança de escopo ou falha de controle.
```


### Checklist de review

- Diff corresponde à story e não contém alterações incidentais?
- Critérios de aceite foram mapeados para testes?
- Invariantes de negócio estão cobertos por teste? Revisor guiado por regras tende a enxergar só o diff ( [Towards Data Science](https://towardsdatascience.com/copilot-caught-8-of-8-diff-bugs-with-rules-0-of-2-outside-the-diff/) ).
- Os casos de aceitação ficaram intactos? Se o agente altera código e teste no mesmo PR, o teste deixa de ser evidência ( [Martin Fowler](https://martinfowler.com/articles/tests-as-data.html) ).
- Tratamento de erro, concorrência, timeout, idempotência e segurança está coberto?
- Dados/logs/traces não expõem segredos ou PII?
- Dependências e licenças estão aprovadas?
- Rollback e compatibilidade são claros?
- O revisor consegue explicar o comportamento entregue (evitar comprehension debt)?

Documentação oficial

- [BMAD: Install (v6.12)](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/start/install-bmad.md)
- [BMAD: Getting Started (v6.12)](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/start/build-your-first-change.md)
- [BMAD: Skills and Agents](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/reference/skills-and-agents.md)
- [BMAD: Build a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/build-a-change.md)
- [BMAD: Review a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/review-a-change.md)
- [BMAD: Finish an Epic](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/finish-an-epic.md)
- [Go — criar um módulo](https://go.dev/doc/tutorial/create-module)
- [GitHub — criar pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [Skill pre-commit-quality-gate](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate)
- [githooks](https://git-scm.com/docs/githooks)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Ledger e telemetria por story](#ledger)

[Governança e segurança →](#governance)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026

<a id="governance"></a>

*07 · Plano de controle*

<h2 id="h-governance">Governança e segurança</h2>

A camada de governança responde quem ou o que agiu, em nome de quem, com qual autoridade, sobre quais dados e com qual evidência.

### Modelo de identidade de agente

Cada agente/workload deve ter identidade técnica única, curta duração de credencial, owner humano, ambiente, finalidade, audience e escopos explícitos. Proibir API keys compartilhadas entre pessoas, squads e agentes. Preferir workload identity/federação e secret manager; se não disponível, usar credencial rotacionável com expiração e escopo mínimo.

**Evidência:** a Uber registra persona, intenção e proveniência do prompt antes de uma ação; a pergunta passa a ser se o agente deve agir, não só se pode ([Uber Engineering](https://www.uber.com/us/en/blog/securing-ai-agents/)).

<div class="table-wrap">
<table>
<tr><th>Controle</th><th>Requisito</th><th>Evidência</th></tr>
<tr><td>Identidade</td><td>agent_id, owner, finalidade, ambiente, expiração</td><td>Registro IAM/CMDB</td></tr>
<tr><td>Autorização</td><td>Allowlist por tool, recurso, método e operação</td><td>Policy version + decisão allow/deny</td></tr>
<tr><td>Segregação</td><td>Dev/test/prod separados; sem credencial prod no agente</td><td>IAM e network policy</td></tr>
<tr><td>Auditoria</td><td>Identidade, timestamp, alvo, ação, resultado, correlation ID</td><td>Log protegido e consultável</td></tr>
<tr><td>Revogação</td><td>Kill switch, disable identity, revoke tokens</td><td>Teste periódico de revogação</td></tr>
</table>
</div>

### Matriz de autonomia

<div class="table-wrap">
<table>
<tr><th>Nível</th><th>Autonomia</th><th>Exemplos permitidos</th><th>Controle</th></tr>
<tr><td>L0</td><td>Sugere</td><td>Pesquisa, plano, review advisory</td><td>Sem escrita nem chamada externa sensível</td></tr>
<tr><td>L1</td><td>Edita com aprovação</td><td>Alterar arquivo local e propor patch</td><td>Workspace isolado; humano autoriza execução/aceite</td></tr>
<tr><td>L2</td><td>Abre PR</td><td>Commit/branch e PR com evidências</td><td>CI obrigatório; review humano; sem merge/deploy</td></tr>
<tr><td>L3</td><td>Executa em não produção</td><td>Deploy em sandbox/teste com dados sintéticos</td><td>RBAC, policy, quota, observabilidade e rollback</td></tr>
<tr><td>L4</td><td>Executa em produção</td><td>Operação produtiva delimitada</td><td>Exceção formal, risco aceito, controles compensatórios, monitoramento e kill switch</td></tr>
</table>
</div>

:::danger

Política inicial recomendada:

teto L2 para sistemas críticos e dados regulados; L3 somente em ambientes não produtivos controlados. L4 não faz parte do piloto. A classificação final deve ser definida pelo framework de risco interno, não por esta tabela.

:::

### Classificação de criticidade sugerida

<div class="table-wrap">
<table>
<tr><th>Classe</th><th>Exemplos</th><th>Teto inicial</th></tr>
<tr><td>C0 — Baixa</td><td>Ferramentas internas sem dados sensíveis</td><td>L2; L3 após homologação</td></tr>
<tr><td>C1 — Moderada</td><td>Serviços internos com dados corporativos</td><td>L2</td></tr>
<tr><td>C2 — Alta</td><td>Dados pessoais, canais e processos financeiros</td><td>L1/L2 sob controle reforçado</td></tr>
<tr><td>C3 — Crítica</td><td>Core bancário, ledger, liquidação, IAM, antifraude crítico</td><td>L0/L1; L2 apenas em escopo controlado e revisão reforçada</td></tr>
</table>
</div>

### MCP como superfície de ataque

- Inventariar servidor, publisher, versão/digest, runtime, transporte, endpoints, tools, schemas e dependências.
- Revisar descrição e schema de cada tool; são conteúdo não confiável que influencia o agente.
- Aplicar allowlist por identidade, método e tool; validar autorização no gateway e no backend.
- Restringir egress, DNS, filesystem e credenciais do processo.
- Registrar list_tools, call_tool, parâmetros redigidos, resultado e decisão de policy.
- Monitorar mudança de tool description/schema (hash drift) e exigir reaprovação.
- Desabilitar por padrão tools de shell genérico, execução remota, movimentação financeira e escrita ampla.
- Não entregar o segredo ao agente: o servidor MCP ou um proxy fora do sandbox guarda a credencial e a injeta na chamada; o agente recebe só uma capacidade com escopo ( [InfoQ, Edera](https://www.infoq.com/news/2026/11/ai-credentials-isolation/) ; [LangChain](https://x.com/LangChain/status/2111146976683425860) ).

### Sandbox

Container não é fronteira suficiente quando compartilha kernel, credenciais, socket Docker ou rede ampla. Avaliar gVisor/Kata/microVM de acordo com ameaça e custo. Mesmo microVM não compensa credenciais cloud montadas ou egress irrestrito. Combinar isolamento de processo, filesystem efêmero, rede default-deny, IAM efêmero, quotas e descarte após execução.

**Evidência:** o Google doou o gVisor e o Agent Substrate ao CNCF para sandbox de agentes em Kubernetes ([Google Open Source](https://opensource.googleblog.com/2026/11/sandboxing-untrusted-ai-agents-at-scale.html)); o OpenKruise Agents v0.6.0, da CNCF, evolui isolamento e automação de sandboxes ([CNCF](https://www.cncf.io/blog/2026/11/03/openkruise-agents-v0-6-0-leaping-ahead-in-agent-sandbox-security-and-automation/)); o Hyperlight, também da CNCF, roda aplicações Linux em micro-VMs isoladas por hipervisor ([CNCF](https://www.cncf.io/blog/2026/11/09/run-linux-applications-in-hypervisor-isolated-micro-vms-with-hyperlight/)).

### Dados e privacidade

- Classificar prompt, contexto recuperado, código, logs, traces, memória e artefatos.
- Negar envio de dado pessoal, sigilo bancário, credenciais e dados de cliente a endpoints não aprovados.
- Aplicar DLP/redaction antes da chamada; não confiar no modelo para anonimizar.
- Definir finalidade, base legal, retenção, localização, suboperadores e transferência internacional com Privacidade/Jurídico.
- Desabilitar captura de prompts/respostas em observabilidade por padrão.

### Regulação brasileira — enquadramento a validar

A Resolução CMN 4.893/2021, na versão vigente consultada, foi alterada pela Resolução CMN 5.274/2025. O normativo trata de política de segurança cibernética e contratação de serviços relevantes de processamento/armazenamento e nuvem para instituições em seu âmbito. Não concluir automaticamente que todo uso de agente é terceirização relevante; avaliar serviço, materialidade, dados, localização, subcontratação, acesso e impacto operacional. A LGPD também se aplica ao tratamento de dados pessoais, com responsabilidades do controlador e operador conforme o caso.

:::warning

Não é parecer jurídico:

mapear artigos aplicáveis, normas complementares do BCB, políticas internas, regras de sigilo bancário, terceirização, continuidade, gestão de riscos e contratos com as áreas responsáveis. A norma do OCC citada em conversas anteriores não deve ser usada como base normativa brasileira.

:::

### Incidente e kill switch

1. Bloquear identidade do agente e revogar credenciais.
2. Desabilitar tool/server e cortar egress associado.
3. Preservar logs e evidências sem expor payload sensível.
4. Identificar sessões, stories, repositórios, dados e ações afetadas.
5. Reverter mudança quando aplicável; acionar processo de incidente corporativo.
6. Revisar causa raiz e atualizar evals/policies antes de reabilitar.

Documentação oficial

- [MCP — Authorization](https://modelcontextprotocol.io/specification/latest/basic/authorization)
- [agentgateway — MCP authorization](https://agentgateway.dev/docs/standalone/latest/documentation/configuration/security/mcp-authz/)
- [gVisor](https://gvisor.dev/docs/)
- [Kata Containers — docs](https://github.com/kata-containers/kata-containers/tree/main/docs)
- [GitHub — branches protegidos](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [ANPD](https://www.gov.br/anpd/pt-br)
- [Resolução CMN 4.893](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=4893&tipo=Resolu%C3%A7%C3%A3o+CMN)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Tutoriais operacionais](#tutorials)

[Métricas, custo e piloto →](#metrics)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026

<a id="metrics"></a>

*08 · Medição*

<h2 id="h-metrics">Métricas, custo e piloto</h2>

A meta é provar impacto líquido e qualidade sustentável, não maximizar linhas geradas ou quantidade de sessões de agentes.

### Árvore de métricas

**Fluxo**

Lead time ideia→produção, tempo de espera, review latency, cycle time por etapa.

**Qualidade**

Change failure rate, defeitos escapados, rollback, retrabalho e regressões.

**Eficiência**

Custo por story mergeada, custo por feature, tokens/ACUs e tempo ativo.

**Autonomia**

One-shot rate, intervenção humana, taxa de aceitação, sessões interrompidas.

### Indicadores

<div class="table-wrap">
<table>
<tr><th>Métrica</th><th>Definição operacional</th><th>Cuidados</th></tr>
<tr><td>Lead time</td><td>Ready → deploy em produção</td><td>Separar espera externa, build, review, aprovação e deploy.</td></tr>
<tr><td>Review latency</td><td>PR aberto → primeira revisão e → aprovação</td><td>Separar fila de revisão de tempo de correção.</td></tr>
<tr><td>Change failure rate</td><td>Deploys que causam falha/rollback/hotfix ÷ deploys</td><td>Definir evento de falha e janela temporal.</td></tr>
<tr><td>Rework rate</td><td>Esforço/ciclos de correção após primeira submissão</td><td>Não confundir feedback normal com falha.</td></tr>
<tr><td>Cost per merged story</td><td>Consumo atribuído ÷ stories mergeadas</td><td>Incluir retry, review, subagentes, ferramentas e trabalho descartado, como PRs fechados sem merge ([Unblocked](https://getunblocked.com/blog/cost-per-merged-pr/)).</td></tr>
<tr><td>One-shot rate</td><td>Stories aprovadas sem ciclo de correção substancial</td><td>Definir “substancial” antes de medir.</td></tr>
<tr><td>Human intervention</td><td>Decisões/intervenções humanas por sessão</td><td>Intervenção não é necessariamente negativa.</td></tr>
<tr><td>Review acceptance</td><td>Comentários de review que viram mudança de código ÷ comentários feitos</td><td>Separar revisor humano e de IA; é a medida usada pelo LinkedIn no revisor híbrido ([ByteByteGo](https://blog.bytebytego.com/p/how-linkedin-uses-ai-to-review-40000)).</td></tr>
<tr><td>Escaped defects</td><td>Defeitos ligados à mudança após deploy</td><td>Normalizar por volume e criticidade.</td></tr>
</table>
</div>

### Baseline e comparação

Extrair 8–12 semanas de histórico do mesmo fluxo ou time comparável. Comparar por classe de trabalho, linguagem, criticidade, tamanho da mudança e tipo de serviço. Reportar mediana e percentis, não apenas média. Se possível, manter grupo de controle ou desenho stepped-wedge para reduzir viés de seleção.

### Modelo de custo editável

<div class="table-wrap">
<table>
<tr><th>Componente</th><th>Fórmula</th><th>Fonte</th></tr>
<tr><td>Modelo LLM</td><td>(tokens entrada × tarifa entrada) + (tokens saída × tarifa saída) + cache</td><td>Uso do provedor + tabela versionada</td></tr>
<tr><td>Agente comercial</td><td>ACUs × taxa contratual + assentos/licenças</td><td>Contrato e fatura</td></tr>
<tr><td>Infraestrutura</td><td>CPU/GPU/memória/storage/egress × rateio</td><td>FinOps/cloud billing</td></tr>
<tr><td>Observabilidade</td><td>Ingestão + retenção + armazenamento + suporte</td><td>Plataforma e contrato</td></tr>
<tr><td>Custo total story</td><td>LLM + agente + infra + observabilidade + custo operacional alocado</td><td>Ledger reconciliado</td></tr>
</table>
</div>

Não fixar estimativa em USD sem proposta comercial e perfil de uso. O modelo deve permitir editar preço por modelo, tokens, cache, ACU, assentos, infraestrutura e percentual de retrabalho. Comparar com custo total do fluxo humano, sem atribuir valor monetário arbitrário ao tempo liberado.

**Cache:** o desconto de cache depende de prefixo estável; trocar ferramentas, modelo ou sandbox no meio da sessão quebra o cache ([OpenAI, loop do Codex](https://openai.com/index/unrolling-the-codex-agent-loop/)). Registrar tokens de cache separados no ledger.

### Piloto de 12 semanas

<div class="table-wrap">
<table>
<tr><th>Período</th><th>Trabalho</th><th>Saída / critério</th></tr>
<tr><td>0–2</td><td>Baseline, classificação, política, sandbox, setup e treinamento</td><td>Go/no-go de segurança; ledger validado; agente homologado</td></tr>
<tr><td>3–6</td><td>1–2 features de risco baixo/moderado; WIP limitado</td><td>Stories com spec, CI e review; primeira reconciliação de custo</td></tr>
<tr><td>7–10</td><td>Expandir variedade e paralelismo gradualmente</td><td>Comparação com baseline; capacidade de review estável</td></tr>
<tr><td>11–12</td><td>Auditoria, retro, relatório e decisão</td><td>Go/no-go com evidências e plano de correção</td></tr>
</table>
</div>

### Critérios de saída do piloto

- Zero bypass conhecido de controle crítico; incidentes de segurança tratados.
- 100% das stories piloto têm spec, owner, Story ID e review humano.
- Custos conciliados com faturas dentro da tolerância definida com FinOps.
- Qualidade não piora materialmente versus baseline, com análise por criticidade.
- Review latency e retrabalho não anulam o ganho de build.
- Squad consegue interromper, revogar e recuperar uma sessão de agente.
- Risco, Compliance e Segurança aprovam escopo de expansão.

### Dashboard recomendado

Uma linha por story, drill-down para PR/sessão/trace, filtros por squad, repo, classe de risco, agente, modelo e período. Painéis: fluxo, qualidade, consumo, governança e adoção. Não usar métricas individuais de uso de IA como avaliação de performance; preferir dados agregados por time e finalidade operacional.

Documentação oficial

- [DORA: four keys](https://dora.dev/guides/dora-metrics-four-keys/)
- [Apache DevLake: DORA](https://devlake.apache.org/docs/DORA/)
- [LiteLLM — cost tracking](https://docs.litellm.ai/docs/proxy/cost_tracking)
- [Langfuse — self-hosting](https://langfuse.com/self-hosting)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Governança e segurança](#governance)

[Catálogo e intake de capacidades →](#catalog)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026

<a id="catalog"></a>

*09 · Ferramentas*

<h2 id="h-catalog">Catálogo e intake de capacidades</h2>

Descoberta pública amplia opções. Homologação privada estabelece confiança, versão permitida, escopos e owner.

### Fluxo de intake

*Fluxo de intake de capacidades, da descoberta ao catálogo privado*

- Sim
- Não
- Descoberta pública
- Triagem de licença e mantenedor
- Scan de código, pacote e dependências
- Sandbox sem dados reais
- Threat model e revisão de permissões
- Aprovado?
- Catálogo privado com digest fixado
- Rejeitar / mitigar
- Monitorar e revisar trimestralmente

### Fontes de descoberta

<div class="table-wrap">
<table>
<tr><th>Fonte</th><th>Uso</th><th>Não significa</th></tr>
<tr><td>[Official MCP Registry](https://registry.modelcontextprotocol.io/)</td><td>Descobrir metadados de servidores MCP</td><td>Auditoria de segurança ou homologação corporativa</td></tr>
<tr><td>[MCP Registry GitHub](https://github.com/modelcontextprotocol/registry)</td><td>Schema, API e implementação do registro</td><td>Garantia de qualidade do pacote publicado</td></tr>
<tr><td>[skills.sh](https://skills.sh/)</td><td>Descobrir skills e popularidade</td><td>Popularidade não é segurança; revisar scripts e origem</td></tr>
<tr><td>[Agent Skills](https://agentskills.io/specification)</td><td>Formato interoperável para skills</td><td>Skill compatível não é skill confiável</td></tr>
<tr><td>[Docker MCP Catalog](https://hub.docker.com/mcp)</td><td>Descoberta e empacotamento de servidores</td><td>Imagem assinada não garante autorização correta</td></tr>
<tr><td>[Listas comunitárias](https://github.com/topics/awesome-mcp)</td><td>Mapear alternativas</td><td>Curadoria comunitária não é aprovação interna</td></tr>
</table>
</div>

### Checklist de triagem

- Licença SPDX e compatibilidade com política corporativa.
- Owner legal e técnico, mantenedores ativos, histórico de releases e vulnerabilidades.
- Proveniência: repositório, pacote, assinatura, SBOM, digest e cadeia de build.
- Permissões: tools, scopes OAuth, filesystem, shell, rede, dados e operações de escrita.
- Dependências transitivas, scripts de instalação e comportamento de atualização.
- Dados enviados, suboperadores, telemetria, retenção, região e transferência internacional.
- Threat model de prompt injection, tool poisoning, exfiltração, SSRF e execução de código.
- Plano de atualização, rollback, revogação e revisão periódica.
- Versão e hash fixados também para pacotes Python/npm, imagens e actions de CI; nunca tag móvel como latest . O GitHub Actions já tem lockfile de dependências de workflow em GA ( [InfoQ](https://www.infoq.com/news/2026/11/github-actions-lockfiles-ga/) ).
- Skills e prompts tratados como dependência: o Dependabot passou a atualizar o Agent Package Manager, e a atualização chega como PR revisável ( [GitHub Changelog](https://github.blog/changelog/2026-11-03-dependabot-version-updates-support-agent-package-manager) ).

:::danger

Incidente de referência:

em 21/10/2026 o pipeline de release do LiteLLM foi comprometido e publicou a versão 1.107.0 no PyPI e em imagens Docker oficiais, inclusive tags como

latest

e

main-stable

, com coletor de credenciais executado na inicialização do Python. A versão ficou cerca de 2 horas no PyPI (

[nota oficial do LiteLLM](https://docs.litellm.ai/blog/security-incident-oct-21-2026)

). Implicação para o piloto: nenhum candidato, inclusive o gateway de referência, entra por tag móvel; versão e digest fixados, egress restrito e plano de rotação de chaves.

:::

### Registro privado mínimo


```text
capability_id: mcp.internal.example
kind: mcp-server
owner: platform-engineering
source: https://github.com/vendor/project
version: 1.2.3
digest: sha256:...
license: Apache-2.0
risk_class: medium
approved_environments: [dev, test]
identity: workload://agents/team-a/story-runner
allowed_tools: [search_docs, read_ticket]
network_egress: [docs.internal]
data_classes: [internal]
scan_report: evidence/scan-2026-11-14.json
approved_by: security-review-board
review_due: 2027-02-14
```


### Stack de referência candidata e alternativas

<div class="table-wrap">
<table>
<tr><th>Camada</th><th>Referência</th><th>Alternativas a avaliar</th><th>Nota</th></tr>
<tr><td>Contrato/SDD</td><td>BMAD 6.12 (6.12.4 fixada)</td><td>Spec Kit, OpenSpec</td><td>Instalar com `npx bmad-method@6.12.4`; documentação da v6.12 no branch V6.12 (o site oficial já mostra a v7 preview)</td></tr>
<tr><td>Execução</td><td>Devin (contratado)</td><td>Claude Code, Codex CLI, OpenCode</td><td>Contratado não é homologado: validar na versão contratada controles enterprise, residência, audit, APIs, ACP, worktree, hooks e VPC</td></tr>
<tr><td>LLM gateway</td><td>LiteLLM</td><td>Bifrost, agentgateway</td><td>Prova de conceito de auth, spend, fail-closed e MCP; fixar versão e digest (ver incidente 1.107.0 acima)</td></tr>
<tr><td>MCP gateway</td><td>agentgateway</td><td>Docker MCP Gateway, ContextForge</td><td>Validar policy por tool e identidade end-to-end</td></tr>
<tr><td>Observabilidade</td><td>OTel + Langfuse</td><td>Opik, OpenLIT, MLflow</td><td>Langfuse core MIT; recursos enterprise têm licença separada</td></tr>
<tr><td>Custo local</td><td>CodeBurn</td><td>ccusage + dados do gateway</td><td>Ferramentas locais não substituem fatura</td></tr>
<tr><td>Memória</td><td>Arquivos versionados + Mem0 opcional</td><td>Letta, Zep/Graphiti, LangMem</td><td>Memória externa não é fonte de verdade</td></tr>
<tr><td>Sandbox</td><td>gVisor/Kata em K8s</td><td>E2B, Daytona, microVM, OpenKruise Agents</td><td>Identidade e egress importam tanto quanto isolamento</td></tr>
<tr><td>Evals</td><td>promptfoo + Inspect</td><td>DeepEval, Ragas, Kensa</td><td>Fixar versão e avaliar licença/governança</td></tr>
<tr><td>DORA</td><td>Apache DevLake</td><td>Faros, DX, LinearB</td><td>Validar escopo por repo/projeto e definições</td></tr>
</table>
</div>

### Stack não é homologação

A tabela registra candidatos de referência para o piloto. Nenhuma ferramenta está automaticamente aprovada para dado bancário ou produção. Aprovação exige arquitetura, segurança, privacidade, compras, jurídico, risco de terceiros e teste técnico. O Devin já está contratado; a contratação não substitui a homologação técnica e de risco da versão em uso.

Documentação oficial

- [MCP Registry — docs](https://registry.modelcontextprotocol.io/docs)
- [LiteLLM — nota do incidente de 21/10/2026](https://docs.litellm.ai/blog/security-incident-oct-21-2026)
- [Langfuse — self-hosting](https://langfuse.com/self-hosting)
- [Spec Kit](https://github.com/github/spec-kit)
- [OpenSpec](https://github.com/Fission-AI/OpenSpec)
- [promptfoo](https://www.promptfoo.dev/docs/intro/)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Métricas, custo e piloto](#metrics)

[Glossário e referências →](#glossary)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026

<a id="glossary"></a>

*10 · Referência*

<h2 id="h-glossary">Glossário e referências</h2>

Vocabulário comum reduz ambiguidades entre engenharia, segurança, arquitetura, risco e gestão.

### Glossário

<div class="table-wrap">
<table>
<tr><th>Termo</th><th>Definição neste playbook</th></tr>
<tr><td>Agentic engineering</td><td>Engenharia de software em que agentes executam tarefas delimitadas dentro de um sistema de controle e verificação.</td></tr>
<tr><td>Harness</td><td>Loop de execução, ferramentas, contexto, memória, estado, tratamento de falhas, limites e avaliação em torno do modelo.</td></tr>
<tr><td>Scaffold</td><td>Estrutura/instruções fornecidas ao agente; parte do harness, não o sistema operacional completo.</td></tr>
<tr><td>SDD</td><td>Spec-driven development: especificação verificável como contrato da mudança.</td></tr>
<tr><td>Context rot</td><td>Degradação de desempenho/precisão associada a contexto excessivo ou irrelevante.</td></tr>
<tr><td>Comprehension debt</td><td>Comportamento entregue que a equipe não consegue explicar, manter ou modificar com segurança.</td></tr>
<tr><td>HITL</td><td>Human-in-the-loop: pessoa participa de decisão ou aprovação durante o fluxo.</td></tr>
<tr><td>HOTL</td><td>Human-on-the-loop: pessoa supervisiona execução com capacidade de intervir.</td></tr>
<tr><td>One-shot rate</td><td>Proporção de tarefas aceitas sem ciclo substancial de correção, conforme definição prévia.</td></tr>
<tr><td>Retry tax</td><td>Custo adicional de novas tentativas, correções e sessões não produtivas.</td></tr>
<tr><td>Yield</td><td>Parcela do consumo/esforço que resulta em mudança aceita e útil.</td></tr>
<tr><td>Pass@k / pass^k</td><td>Métricas de sucesso em múltiplas tentativas; a definição depende do benchmark e da independência das amostras.</td></tr>
<tr><td>Tool poisoning</td><td>Manipulação do agente por descrições, metadados ou conteúdo de ferramentas.</td></tr>
<tr><td>Memory poisoning</td><td>Inserção de conteúdo malicioso ou falso em memória persistente/reutilizada.</td></tr>
<tr><td>ACU</td><td>Unidade de consumo comercial do Devin; não deve ser convertida diretamente em tokens.</td></tr>
<tr><td>Policy-as-code</td><td>Políticas expressas em código/configuração e aplicadas automaticamente em pipelines/gateways.</td></tr>
<tr><td>Skill BMAD</td><td>Diretório com SKILL.md instalado no agente (ex.: `bmad-build`); portável entre agentes e customizável em `_bmad/custom/`.</td></tr>
<tr><td>Spine (AD-n)</td><td>Documento curto de arquitetura do BMAD (ARCHITECTURE-SPINE.md) com decisões identificadas como AD-1, AD-2…; substitui arquivos ADR no piloto.</td></tr>
<tr><td>Sign-off BMAD</td><td>Momento em que um skill produz documento revisável e bloqueia a etapa seguinte: PRFAQ verdict, PRD validate, spine review, readiness gate e retrospective verdict.</td></tr>
<tr><td>Execução durável</td><td>Capacidade de retomar um fluxo do passo correto após falha, sem repetir efeitos colaterais.</td></tr>
<tr><td>Prompt cache</td><td>Reuso, pelo provedor, de um prefixo já processado; depende de prefixo estável entre chamadas.</td></tr>
</table>
</div>

### Referências oficiais e primárias

- [BMAD Method — repositório e releases](https://github.com/bmad-code-org/BMAD-METHOD) . Linha estável v6.12.4 (release de 14/10/2026), instalada e verificada em 14/11/2026; v7 em preview alpha. [Documentação da v6.12 (branch V6.12)](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/) .
- [bmad-loop — repositório oficial](https://github.com/bmad-code-org/bmad-loop) . O projeto se declara early open beta; comandos, requisitos e policy mudam.
- [Official MCP Registry — documentação e API](https://registry.modelcontextprotocol.io/docs) .
- [Model Context Protocol — especificação](https://modelcontextprotocol.io/specification/) .
- [agentgateway — autorização MCP](https://agentgateway.dev/docs/standalone/latest/documentation/configuration/security/mcp-authz/) .
- [LiteLLM — virtual keys e spend tracking](https://docs.litellm.ai/docs/proxy/virtual_keys) .
- [LiteLLM — tag budgets](https://docs.litellm.ai/docs/proxy/tag_budgets) .
- [Agent Skills — especificação SKILL.md](https://agentskills.io/specification) ; [doada à Agentic AI Foundation como padrão aberto](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) .
- [OpenTelemetry — atributos GenAI](https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/) ; parte das convenções permanece em desenvolvimento.
- [Langfuse — self-hosting](https://langfuse.com/self-hosting) ; core MIT e recursos enterprise específicos sob licença comercial.
- [Apache DevLake — métricas DORA](https://devlake.apache.org/docs/DORA/) .
- [Banco Central — Resolução CMN 4.893, versão vigente consultada](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=4893&tipo=Resolu%C3%A7%C3%A3o+CMN) .
- [Banco Central — Resolução CMN 5.274/2025](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=5274&tipo=RESOLU%C3%87%C3%83O+CMN) .
- [ANPD — orientações e materiais LGPD](https://www.gov.br/anpd/pt-br) .
- [Linux Foundation — formação da Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) .
- [LiteLLM — nota oficial do incidente da versão 1.107.0 (21/10/2026)](https://docs.litellm.ai/blog/security-incident-oct-21-2026) .
- [Martin Fowler — agentes de longa duração e execução durável](https://martinfowler.com/articles/durable-execution-agents.html) .

### Registro de validação da pesquisa

<div class="table-wrap">
<table>
<tr><th>Item</th><th>Status</th><th>Tratamento no playbook</th></tr>
<tr><td>BMAD v6.12 / v7</td><td>Verificado em fonte upstream</td><td>6.12.4 como baseline estável (instalação headless executada em 14/11/2026: 29 skills); V7 preview/alpha exige revalidação.</td></tr>
<tr><td>bmad-loop</td><td>Experimental</td><td>Não é dependência obrigatória; usar apenas sandbox e versão pinada.</td></tr>
<tr><td>LiteLLM spend/tags/virtual keys</td><td>Verificado em docs oficiais</td><td>Bom candidato para POC; validar hardening, DB, RBAC e fail-closed.</td></tr>
<tr><td>agentgateway MCP authorization</td><td>Verificado em docs oficiais</td><td>POC de policy por method/tool e integração de identidade.</td></tr>
<tr><td>OTel GenAI</td><td>Em evolução</td><td>Fixar versão; validar atributos e cobertura de cada agente.</td></tr>
<tr><td>Langfuse</td><td>Licença verificada</td><td>Core MIT; RBAC/audit/retention e outros recursos específicos exigem licença enterprise.</td></tr>
<tr><td>Devin e capacidades enterprise</td><td>Contratado; validação técnica pendente</td><td>Não assumir ACP, worktree, hooks, API ou VPC sem documentação/contrato da versão contratada.</td></tr>
<tr><td>Preços, ACU e custo por story</td><td>Sem preço universal</td><td>Preencher com proposta comercial e fatura do piloto.</td></tr>
<tr><td>Regulação brasileira</td><td>Norma oficial consultada</td><td>Enquadramento e aplicabilidade exigem parecer das áreas responsáveis.</td></tr>
<tr><td>LiteLLM 1.107.0 (supply chain)</td><td>Incidente confirmado em nota oficial</td><td>Pin por versão e digest; sem tag móvel; plano de rotação de chaves.</td></tr>
<tr><td>Evidências de mercado (v0.2)</td><td>Casos públicos</td><td>Números como declarados pelas fontes; usados como sinal, não como meta ou benchmark do piloto. Validadas em 14/11/2026.</td></tr>
</table>
</div>

:::note

Regra de manutenção:

revisar trimestralmente links, releases, licenças, CVEs, aquisições, política de dados e recursos dos fornecedores. Cada página deve registrar data de validação e owner.

:::

Documentação oficial

- [BMAD: Skills and Agents](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/reference/skills-and-agents.md)
- [BMAD Method — README](https://github.com/bmad-code-org/BMAD-METHOD)
- [Agent Skills — especificação](https://agentskills.io/specification)
- [MCP — especificação](https://modelcontextprotocol.io/specification/)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Catálogo e intake de capacidades](#catalog)

IA First Engineering · Playbook de referência · v0.4 · 14/11/2026
