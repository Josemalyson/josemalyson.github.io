---
title: "Ledger and telemetry per story"
sidebar_label: "Ledger and telemetry per story"
description: "05 · FinOps e evidências Story ID é a chave de correlação entre Git, agente, gateway, CI, observabilidade e deploy. Sem cobertura de atribuição,…"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "fundamentos/pilares"
pagination_next: "tutoriais/indice"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*05 · FinOps e evidências*


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

[← The 12 harness pillars](/playbook/ai-first/fundamentos/pilares)

[Operational tutorials →](/playbook/ai-first/tutoriais/indice)
