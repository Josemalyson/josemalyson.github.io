---
title: "Metrics, cost, and the pilot"
sidebar_label: "Metrics, cost, and the pilot"
description: "08 · Medição A meta é provar impacto líquido e qualidade sustentável, não maximizar linhas geradas ou quantidade de sessões de agentes. Árvore de…"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "fundamentos/governanca"
pagination_next: "fundamentos/catalogo"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*08 · Medição*


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

[← Governance and security](/playbook/ai-first/fundamentos/governanca)

[Capability catalog and intake →](/playbook/ai-first/fundamentos/catalogo)
