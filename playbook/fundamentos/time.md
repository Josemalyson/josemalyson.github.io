---
title: "Time de quatro pessoas"
sidebar_label: "Time de quatro pessoas"
description: "03 · Papéis O time pequeno deve operar como uma célula de produto com papéis claros, não como quatro operadores de agentes sem responsabilidade…"
hide_title: true
published: "2026-11-14"
reading_minutes: 3
pagination_prev: "fundamentos/ciclos-e-gates"
pagination_next: "fundamentos/pilares"
---

*03 · Papéis*


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

[← Ciclos e gates](/playbook/ai-first/fundamentos/ciclos-e-gates)

[Os 12 pilares do harness →](/playbook/ai-first/fundamentos/pilares)
