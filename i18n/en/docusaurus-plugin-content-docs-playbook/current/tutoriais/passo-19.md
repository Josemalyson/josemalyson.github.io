---
title: "19 · Implementation: bmad-build of story 1-1"
sidebar_label: "19 · Implementation: bmad-build of story 1-1"
description: "4. Implementação Objetivo Implementar handler, testes e verificação em uma sessão. Entrada Chat novo, árvore limpa, branch da story. Comando exato…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-18"
pagination_next: "tutoriais/passo-20"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*4. Implementação*

### Objetivo

Implementar handler, testes e verificação em uma sessão.

### Entrada

Chat novo, árvore limpa, branch da story.

### Comando exato

```text
/bmad-build Implementar a story 1.1 de _bmad-output/planning-artifacts/epics.md (S-001): GET /contas/{id}/saldo em Go com net/http, dados sintéticos em memória, valores em centavos, testes table-driven com httptest; main() fino que só chama run(addr), com run testado (servidor respondendo e porta ocupada) para a cobertura do pacote inteiro passar de 90%.
```

### Resultado esperado [APROXIMADO]

```text
1. Investiga repositório e planejamento; confere árvore limpa e branch.
2. Reporta lacunas, ações irreversíveis e footprint; se algo for sinalizado, escreve um plano e espera a sua aprovação (bloco <frozen-after-approval>).
3. Implementa; grava baseline_commit; status in-progress.
4. Revisa com camadas independentes (blind-hunter, edge-case-hunter, verification-gap), faz triagem e corrige.
5. Status done; sprint-status 1-1 → review; commit local com mensagem conventional, que passa pelos hooks; se der [FAIL], segue o loop do AGENTS.md (próximo passo). Não faz push.
```

### Artefatos

_bmad-output/implementation-artifacts/spec-1-1-&lt;slug>.md (status, route, baseline_commit, Review Triage Log), código Go, testes e, se houver, _bmad-output/implementation-artifacts/deferred-work.md

### Checkpoint

git log -1 mostra o commit; git status limpo; story 1-1 em review.

### Doc oficial

[Build a Change](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/build-a-change.md)


Guia de bolso: [passo 19 no guia BMAD](/guias/bmad/passo-19/).

[← 18 · Commit the plan](/playbook/ai-first/tutoriais/passo-18)

[20 · Self-correction loop on the agent commit →](/playbook/ai-first/tutoriais/passo-20)
