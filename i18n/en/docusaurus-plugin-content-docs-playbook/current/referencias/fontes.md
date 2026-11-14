---
title: "References"
sidebar_label: "References"
description: "Referências oficiais e primárias - BMAD Method — repositório e releases https://github.com/bmad-code-org/BMAD-METHOD . Linha estável v6.12.4…"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "referencias/glossario"
pagination_next: null
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

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

[← Glossary](/playbook/ai-first/referencias/glossario)
