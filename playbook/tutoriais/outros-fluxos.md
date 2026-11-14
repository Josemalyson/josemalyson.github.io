---
title: "Outros fluxos"
sidebar_label: "Outros fluxos"
description: "Tutorial B — Evolução de feature existente 1. Recuperar PRD, spine AD-n e specs e confirmar se ainda representam o comportamento real. 2. Mapear…"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "tutoriais/passo-28"
pagination_next: "fundamentos/governanca"
---

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

[← 28 · Retrospectiva do épico](/playbook/ai-first/tutoriais/passo-28)

[Governança e segurança →](/playbook/ai-first/fundamentos/governanca)
