---
title: "26 · Open the GitHub PR (web)"
sidebar_label: "26 · Open the GitHub PR (web)"
description: "6. Entrega Objetivo Abrir o PR com Story ID e evidências. Entrada github.com → repositório → banner amarelo \"Compare &amp; pull request\" ou Pull…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-25"
pagination_next: "tutoriais/passo-27"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*6. Entrega*

### Objetivo

Abrir o PR com Story ID e evidências.

### Entrada

github.com → repositório → banner amarelo "Compare &amp; pull request" (ou Pull requests → New). base: main; compare: feat/S-001-consulta-saldo.

### Comando exato

```text
Título: feat(S-001): consulta de saldo e limite disponível

Story: S-001
Spec: _bmad-output/implementation-artifacts/spec-1-1-<slug>.md
Evidências: go vet e go test -v (saída no PR), log do quality gate com os [WARN] e [SKIP], Review Triage Log da spec
Rollback: git revert do merge
AI-Assisted: bmad+<agente>
```

### Resultado esperado [APROXIMADO]

```text
Clique em "Create pull request". O PR mostra os commits da story e dispara o CI configurado.
```

### Artefatos

Pull request no GitHub.

### Checkpoint

Título e descrição com Story ID; base main.

### Doc oficial

[GitHub: criar um pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

·

[GitHub: comparar branches no PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)


Guia de bolso: [passo 26 no guia BMAD](/guias/bmad/passo-26/).

[← 25 · Push the branch](/playbook/ai-first/tutoriais/passo-25)

[27 · CI, human review, and merge →](/playbook/ai-first/tutoriais/passo-27)
