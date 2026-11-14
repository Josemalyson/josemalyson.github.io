---
title: "27 · CI, review humano e merge"
sidebar_label: "27 · CI, review humano e merge"
description: "6. Entrega Objetivo Aplicar os gates do playbook fora do agente. Entrada Página do PR no GitHub. Comando exato text Sem comando do agente. …"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-26"
pagination_next: "passo-28"
---

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

Versão completa no playbook: [passo 27](/playbook/ai-first/tutoriais/passo-27/).

[← 26 · Abrir o PR no GitHub (web)](/guias/bmad/passo-26/)

[28 · Retrospectiva do épico →](/guias/bmad/passo-28/)
