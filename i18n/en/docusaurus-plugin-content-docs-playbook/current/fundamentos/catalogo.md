---
title: "Capability catalog and intake"
sidebar_label: "Capability catalog and intake"
description: "09 · Ferramentas Descoberta pública amplia opções. Homologação privada estabelece confiança, versão permitida, escopos e owner. Fluxo de intake…"
hide_title: true
published: "2026-11-14"
reading_minutes: 5
pagination_prev: "fundamentos/metricas"
pagination_next: "referencias/glossario"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*09 · Ferramentas*


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

[← Metrics, cost, and the pilot](/playbook/ai-first/fundamentos/metricas)

[Glossary →](/playbook/ai-first/referencias/glossario)
