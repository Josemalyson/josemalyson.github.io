---
title: "27 · CI, human review, and merge"
sidebar_label: "27 · CI, human review, and merge"
description: "6. Entrega Objetivo Aplicar os gates do playbook fora do agente. Entrada Página do PR no GitHub. Comando exato text Sem comando do agente. No PR:…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-26"
pagination_next: "tutoriais/passo-28"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*6. Entrega*

### Objetivo

Aplicar os gates do playbook fora do agente.

### Entrada

Página do PR no GitHub.

### Comando exato

```text
# Sem comando do agente. No PR:
# 1. CI verde (go vet, go test, SAST/SCA, secret scan, policy), repetindo os gates do hook
#    local, que pode ser contornado e roda com soft-skip sem Docker
# 2. Review de pessoa diferente do autor; Approve
# 3. Merge por humano, conforme branch protegido
```

### Resultado esperado [APROXIMADO]

```text
PR aprovado e mergeado por humano. Merge e deploy nunca pelo agente.
```

### Artefatos

Merge no main.

### Checkpoint

DoD da página 02 cumprida.

### Doc oficial

[GitHub: branches protegidos](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)

·

[GitHub: aprovar PR com reviews obrigatórios](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews)

·

[GitHub Actions: build e teste em Go](https://docs.github.com/en/actions/tutorials/build-and-test-code/go)

[← 26 · Open the GitHub PR (web)](/playbook/ai-first/tutoriais/passo-26)

[28 · Epic retrospective →](/playbook/ai-first/tutoriais/passo-28)
