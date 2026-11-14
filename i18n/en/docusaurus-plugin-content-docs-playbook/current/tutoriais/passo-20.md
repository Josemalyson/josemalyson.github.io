---
title: "20 · Self-correction loop on the agent commit"
sidebar_label: "20 · Self-correction loop on the agent commit"
description: "4. Implementação Objetivo Ver o loop do AGENTS.md funcionando: o hook bloqueia, o agente corrige a causa e o mesmo commit passa, sem --no-verify.…"
hide_title: true
published: "2026-11-14"
reading_minutes: 3
pagination_prev: "tutoriais/passo-19"
pagination_next: "tutoriais/passo-21"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*4. Implementação*

### Objetivo

Ver o loop do AGENTS.md funcionando: o hook bloqueia, o agente corrige a causa e o mesmo commit passa, sem --no-verify.

### Entrada

Dentro da sessão do bmad-build, no commit local (etapa 5 do passo anterior). No ensaio, o saldo.go entrou com uma linha indentada com espaços, uma falha de formatação introduzida de propósito para reproduzir o loop.

### Comando exato

```text
# Tentativa 1: o commit do bmad-build
git commit -m "feat(saldo): GET /contas/{id}/saldo com dados sintéticos"
# [FAIL] no STEP 1/14: corrigir só a formatação
gofmt -w saldo.go
git add saldo.go
# Tentativa 2: o mesmo commit
git commit -m "feat(saldo): GET /contas/{id}/saldo com dados sintéticos"
```

### Resultado esperado [REAL]

```text
── Tentativa 1 ──
[STEP -1/14] Secret Scanner — Gitleaks
10:21AM INF 0 commits scanned.
10:21AM INF scanned ~4294 bytes (4.29 KB) in 113ms
10:21AM INF no leaks found
[PASS] Secret Scanner
[STEP 0/14] Branch Name — <tipo>/S-NNN-<slug>
[PASS] Branch Name
[STEP 1/14] gofmt — formatação
saldo.go
[FAIL] gofmt: arquivos fora do padrão (rode gofmt -w nos arquivos acima)
(exit 1: commit não criado)

── Tentativa 2 ──
[STEP -1/14] Secret Scanner — Gitleaks
10:21AM INF 0 commits scanned.
10:21AM INF scanned ~4291 bytes (4.29 KB) in 136ms
10:21AM INF no leaks found
[PASS] Secret Scanner
[STEP 0/14] Branch Name — <tipo>/S-NNN-<slug>
[PASS] Branch Name
[STEP 1/14] gofmt — formatação
[PASS] gofmt
[STEP 2/14] golangci-lint — qualidade estática
0 issues.
[PASS] golangci-lint
[STEP 3/14] govulncheck — vulnerabilidades conhecidas
(… govulncheck: GO-2026-6859 em net/http@go1.27.3, corrigido em go1.27.4; só stdlib …)
[WARN] govulncheck: vulnerabilidades só na stdlib (atualize o Go)
[PASS] govulncheck
[STEP 4/14] deadcode — código inalcançável
[PASS] deadcode
[STEP 5/14] modernize — idiomas modernos (report-only)
[PASS] modernize
[STEP 6/14] Convention guards — regras do AGENTS.md
[PASS] Convention guards
[STEP 7/14] go mod tidy — higiene de módulos
[PASS] go mod tidy
[STEP 8/14] go test + cobertura — limiar 90%
ok  	demo-saldo	0.028s	coverage: 95.5% of statements
[PASS] go test — cobertura 95.5%
[STEP 9/14] go test -race — data races
ok  	demo-saldo	1.037s
[PASS] go test -race
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
[PASS] commit-msg: Conventional Commits
[feat/S-001-consulta-saldo 8d3b7d1] feat(saldo): GET /contas/{id}/saldo com dados sintéticos
 4 files changed, 170 insertions(+)
```

### Artefatos

Commit local feat(saldo) criado na 2ª tentativa.

### Checkpoint

No máximo 3 tentativas e nenhum --no-verify na sessão. Se a 3ª falhar, o agente para e entrega log, step e o que já tentou, e a decisão passa a ser humana. Os [WARN] vão para a descrição do PR. A cobertura do pacote inteiro deu 95,5% com o limiar padrão de 90%, porque main() é fino e a lógica do servidor fica em run(), testada em main_test.go. Os logs são reais; a escolha da correção (gofmt -w no arquivo que o log apontou) depende do modelo.

### Doc oficial

[gofmt](https://pkg.go.dev/cmd/gofmt)

·

[Skill pre-commit-quality-gate (repositório público)](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate)

·

[govulncheck](https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck)


Guia de bolso: [passo 20 no guia BMAD](/guias/bmad/passo-20/).

[← 19 · Implementation: bmad-build of story 1-1](/playbook/ai-first/tutoriais/passo-19)

[21 · Local verification →](/playbook/ai-first/tutoriais/passo-21)
