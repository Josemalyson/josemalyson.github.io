---
title: "10 · Self-correction loop: AGENTS.md rule and commit"
sidebar_label: "10 · Self-correction loop: AGENTS.md rule and commit"
description: "Setup Objetivo Dizer ao agente o que fazer quando o hook bloquear: ler o log, corrigir só a categoria que falhou e repetir o commit, com no…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-09"
pagination_next: "passo-11"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Setup*

### Objetivo

Dizer ao agente o que fazer quando o hook bloquear: ler o log, corrigir só a categoria que falhou e repetir o commit, com no máximo 3 tentativas. Na 3ª falha, ele para e entrega a um humano.

### Entrada

Raiz do repositório. O bloco vai no fim do AGENTS.md, fora do bloco bmad:context (que pertence ao bmad-project-context). Pode ser colado à mão ou pelo heredoc abaixo.

### Comando exato

```text
cat >> AGENTS.md <<'EOF'
## Quality gate de pre-commit (loop de autocorreção)
- Os hooks ficam em `.githooks/` (skill pre-commit-quality-gate); ative com `git config core.hooksPath .githooks`.
- Todo commit passa por `.githooks/pre-commit` e `.githooks/commit-msg`. Nunca use `--no-verify`, `SKIP_*` ou `core.hooksPath` diferente para contornar o gate.
- Se o commit falhar com `[FAIL]`:
  1. Leia o log inteiro e identifique a única linha `[FAIL]` e o `[STEP N/14]` acima dela.
  2. Corrija só a causa dessa categoria. Não mexa em outros arquivos, não baixe limiar, não acrescente exclusão nem edite `.githooks/`.
  3. Rode `git add` nos arquivos corrigidos e repita o mesmo `git commit`.
- Limite: 3 tentativas de commit por mudança. Se a 3ª falhar, pare, não tente outra abordagem e entregue a um humano: o log da última tentativa, o step que falhou e o que você já tentou.
- `[WARN]` e `[SKIP]` não bloqueiam; cite-os no PR como verificação não executada.
EOF
git add AGENTS.md .githooks .claude/skills/pre-commit-quality-gate .agents/skills/pre-commit-quality-gate
git commit -m "chore(S-001): AGENTS.md e quality gate de pre-commit" \
  --trailer "Story: S-001" --trailer "AI-Assisted: bmad+<agente>"
```

### Resultado esperado [REAL]

```text
[STEP -1/14] Secret Scanner — Gitleaks
10:21AM INF 0 commits scanned.
10:21AM INF scanned ~116522 bytes (116.52 KB) in 128ms
10:21AM INF no leaks found
[PASS] Secret Scanner
(… mesmos steps do dry-run: [PASS], [SKIP] e [WARN] …)
✓ All 14 quality gates passed — committing.
[PASS] commit-msg: Conventional Commits
[feat/S-001-consulta-saldo bac9564] chore(S-001): AGENTS.md e quality gate de pre-commit
 21 files changed, 3120 insertions(+)
(… create mode dos 21 arquivos: skill nos dois diretórios (9 + 9), .githooks/ (2) e AGENTS.md …)
```

### Artefatos

Commit no branch da story com AGENTS.md, .githooks/ e a skill nos dois diretórios.

### Checkpoint

git status limpo, como o bmad-build exige. Daqui em diante todo commit passa pelos hooks, inclusive o do bmad-build e o amend dos trailers.

### Doc oficial

[AGENTS.md](https://agents.md/)

·

[githooks (pre-commit, commit-msg)](https://git-scm.com/docs/githooks)

·

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

*Loop de autocorreção: git commit, pre-commit com 14 categorias; se der FAIL e houver tentativa, o agente lê o log, corrige só a categoria e repete o commit; na 3ª falha, para e entrega ao humano*

Versão completa no playbook: [passo 10](/playbook/ai-first/tutoriais/passo-10/).

[← 09 · Quality gate: ativar e dry-run](/guias/bmad/passo-09/)

[11 · Discovery: product brief →](/guias/bmad/passo-11/)
