---
title: "Glossary"
sidebar_label: "Glossary"
description: "10 · Referência Vocabulário comum reduz ambiguidades entre engenharia, segurança, arquitetura, risco e gestão. Glossário Termo Definição neste…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "fundamentos/catalogo"
pagination_next: "referencias/fontes"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*10 · Referência*


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

[← Capability catalog and intake](/playbook/ai-first/fundamentos/catalogo)

[References →](/playbook/ai-first/referencias/fontes)
