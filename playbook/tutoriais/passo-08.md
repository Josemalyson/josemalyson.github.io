---
title: "08 · Quality gate: instalar a skill e gerar os hooks"
sidebar_label: "08 · Quality gate: instalar a skill e gerar os hooks"
description: "Setup Objetivo Pôr guardrails determinísticos na fronteira do commit antes do primeiro código do agente. A skill pre-commit-quality-gate…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "tutoriais/passo-07"
pagination_next: "tutoriais/passo-09"
---

*Setup*

### Objetivo

Pôr guardrails determinísticos na fronteira do commit antes do primeiro código do agente. A skill pre-commit-quality-gate identifica a stack e gera um pipeline fail-fast de 14 categorias, do barato ao caro, mais a validação de Conventional Commits.

### Entrada

Branch da story, com o AGENTS.md do passo 07. A skill vem do repositório público custom-skills e fica versionada nos mesmos diretórios dos skills do BMAD. Depois de copiar, abra um chat novo no agente.

### Comando exato

```text
git clone --depth 1 https://github.com/Josemalyson/custom-skills.git /tmp/custom-skills
cp -r /tmp/custom-skills/pre-commit-quality-gate .claude/skills/
cp -r /tmp/custom-skills/pre-commit-quality-gate .agents/skills/

# No chat novo:
/pre-commit-quality-gate Gere .githooks/pre-commit e .githooks/commit-msg para este repositório Go. Siga o AGENTS.md: branch no formato <tipo>/S-NNN-<slug>; sem PII e sem URL de produção como convention guards. Mantenha os limiares padrão (cobertura 90%, mutação 70%, p95 < 200 ms). Não faça commit.
```

### Resultado esperado [APROXIMADO]

```text
1. Imprime o fingerprint: Go (go.mod), runner go test, sem linter configurado, sem schema, sem Dockerfile, AGENTS.md presente, sem hooks anteriores.
2. Lê references/go.md e resolve uma ferramenta por categoria: gitleaks, gofmt, golangci-lint, govulncheck, deadcode, modernize, guards do AGENTS.md, go mod tidy, go test com cobertura, go test -race, WireMock, gremlins, k6, buf e docker build.
3. Gera .githooks/pre-commit a partir de scripts/template.sh, sem nenhum {{placeholder}}, e .githooks/commit-msg.
4. Lista as ferramentas que faltam, com o comando de instalação de cada uma.
```

### Artefatos

.githooks/pre-commit, .githooks/commit-msg, .claude/skills/pre-commit-quality-gate/ e .agents/skills/pre-commit-quality-gate/

### Checkpoint

grep -c "&#123;&#123;" .githooks/pre-commit retorna 0. O Tech Lead lê o cabeçalho do hook, onde ficam as decisões desta geração (padrão de branch do AGENTS.md, limiares com awk, [SKIP] sem pacote Go). Ferramentas do ensaio: go install golang.org/x/vuln/cmd/govulncheck@v1.9.0 golang.org/x/tools/cmd/deadcode@v0.52.0 golang.org/x/tools/go/analysis/passes/modernize/cmd/modernize@v0.52.0 github.com/golangci/golangci-lint/v2/cmd/golangci-lint@v2.15.0.

### Doc oficial

[Skill pre-commit-quality-gate (repositório público)](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate)

·

[pre-commit-quality-gate: referência Go](https://github.com/Josemalyson/custom-skills/blob/main/pre-commit-quality-gate/references/go.md)

·

[golangci-lint](https://golangci-lint.run/)

·

[govulncheck](https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck)


Guia de bolso: [passo 08 no guia BMAD](/guias/bmad/passo-08/).

[← 07 · Contexto do repositório (AGENTS.md)](/playbook/ai-first/tutoriais/passo-07)

[09 · Quality gate: ativar e dry-run →](/playbook/ai-first/tutoriais/passo-09)
