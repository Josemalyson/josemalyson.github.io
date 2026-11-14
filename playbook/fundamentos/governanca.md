---
title: "Governança e segurança"
sidebar_label: "Governança e segurança"
description: "07 · Plano de controle A camada de governança responde quem ou o que agiu, em nome de quem, com qual autoridade, sobre quais dados e com qual…"
hide_title: true
published: "2026-11-14"
reading_minutes: 6
pagination_prev: "tutoriais/outros-fluxos"
pagination_next: "fundamentos/metricas"
---

*07 · Plano de controle*


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

[← Outros fluxos](/playbook/ai-first/tutoriais/outros-fluxos)

[Métricas, custo e piloto →](/playbook/ai-first/fundamentos/metricas)
