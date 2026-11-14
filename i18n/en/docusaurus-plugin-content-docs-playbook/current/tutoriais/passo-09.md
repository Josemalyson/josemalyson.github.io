---
title: "09 · Quality gate: enable and dry-run"
sidebar_label: "09 · Quality gate: enable and dry-run"
description: "Setup Objetivo Ativar os hooks versionados e provar que eles rodam de ponta a ponta antes de existir código. Entrada Raiz do repositório. Comando…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "tutoriais/passo-08"
pagination_next: "tutoriais/passo-10"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Setup*

### Objetivo

Ativar os hooks versionados e provar que eles rodam de ponta a ponta antes de existir código.

### Entrada

Raiz do repositório.

### Comando exato

```text
chmod +x .githooks/pre-commit .githooks/commit-msg
git config core.hooksPath .githooks
git config core.hooksPath
bash -n .githooks/pre-commit && bash -n .githooks/commit-msg && echo "bash -n: ok"
bash .githooks/pre-commit
```

### Resultado esperado [REAL]

```text
.githooks
bash -n: ok
[STEP -1/14] Secret Scanner — Gitleaks
10:21AM INF 0 commits scanned.
10:21AM INF scanned ~0 bytes (0) in 115ms
10:21AM INF no leaks found
[PASS] Secret Scanner
[STEP 0/14] Branch Name — <tipo>/S-NNN-<slug>
[PASS] Branch Name
[STEP 1/14] gofmt — formatação
[PASS] gofmt
[STEP 2/14] golangci-lint — qualidade estática
[SKIP] golangci-lint — módulo ainda sem pacote Go
[STEP 3/14] govulncheck — vulnerabilidades conhecidas
[SKIP] govulncheck — módulo ainda sem pacote Go
[STEP 4/14] deadcode — código inalcançável
[SKIP] deadcode — módulo ainda sem pacote Go
[STEP 5/14] modernize — idiomas modernos (report-only)
[SKIP] modernize — módulo ainda sem pacote Go
[STEP 6/14] Convention guards — regras do AGENTS.md
[PASS] Convention guards
[STEP 7/14] go mod tidy — higiene de módulos
[SKIP] go mod tidy — módulo ainda sem pacote Go
[STEP 8/14] go test + cobertura — limiar 90%
[SKIP] go test — módulo ainda sem pacote Go
[STEP 9/14] go test -race — data races
[SKIP] go test -race — módulo ainda sem pacote Go
[STEP 10/14] Integration tests — fluxos completos via WireMock
[WARN] Docker unavailable — integration tests soft-skipped
[STEP 11/14] Mutation tests — qualidade da suíte via gremlins
[WARN] Docker unavailable — mutation tests soft-skipped
[STEP 12/14] Performance tests — latência/throughput via k6
[WARN] Docker unavailable — performance tests soft-skipped
[STEP 13/14] Schema pipeline — OpenAPI/proto
[SKIP] Schema pipeline — nenhum schema staged
[STEP 14/14] Docker build — Dockerfile de produção
[SKIP] Docker build (set SKIP_DOCKER=0 to enable)
✓ All 14 quality gates passed — committing.
```

### Artefatos

Nenhum novo. O core.hooksPath fica no .git/config local, então cada pessoa (e cada sandbox de agente) roda o git config uma vez depois do clone.

### Checkpoint

Sem erro de sintaxe. [PASS] onde há ferramenta; [SKIP] nos steps Go enquanto não existe pacote; [WARN] nos steps 10 a 12 sem Docker (soft-skip, não bloqueia). O que fica em [WARN] ou [SKIP] aqui precisa ser coberto no CI.

### Doc oficial

[githooks (pre-commit, commit-msg)](https://git-scm.com/docs/githooks)

·

[git config (core.hooksPath)](https://git-scm.com/docs/git-config)

·

[Gitleaks](https://github.com/gitleaks/gitleaks)


Guia de bolso: [passo 09 no guia BMAD](/guias/bmad/passo-09/).

[← 08 · Quality gate: install the skill and generate the hooks](/playbook/ai-first/tutoriais/passo-08)

[10 · Self-correction loop: AGENTS.md rule and commit →](/playbook/ai-first/tutoriais/passo-10)
