---
title: "Visão executiva"
sidebar_label: "Visão executiva"
description: "O texto abaixo é a versão 0.4 14 nov 2026 do playbook: 29 passos, do 00 ao 28, com o loop de guardrail e pre-commit. Os marcadores APROXIMADO e…"
slug: "/"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: null
pagination_next: "fundamentos/ciclos-e-gates"
---

O texto abaixo é a versão 0.4 (14 nov 2026) do playbook: 29 passos, do 00 ao 28, com o loop de guardrail e pre-commit. Os marcadores **[APROXIMADO]** e **[REAL]** estão como no original.

[Repositório e PDF](https://github.com/Josemalyson/ai-first-playbook)

Os guias de bolso recortam os comandos deste playbook: [Matt Pocock](/guias/matt-pocock/) e [BMAD](/guias/bmad/).



*01 · Fundamentos*


Um sistema operacional de engenharia em que pessoas definem intenção e risco, especificações tornam o trabalho verificável e agentes executam dentro de limites explícitos.

Versão 0.4 · Atualizado em 14 nov 2026 · Squad piloto: 4 pessoas · Stack de referência candidata · Agente de execução: Devin

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

[Ciclos e gates →](/playbook/ai-first/fundamentos/ciclos-e-gates)
