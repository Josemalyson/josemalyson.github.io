---
title: "18 · Commit do planejamento"
sidebar_label: "18 · Commit do planejamento"
description: "3. Decomposição Objetivo Versionar _bmad-output/ e deixar a árvore limpa para o bmad-build. Entrada Raiz do repositório. Comando exato text git…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-17"
pagination_next: "tutoriais/passo-19"
---

*3. Decomposição*

### Objetivo

Versionar _bmad-output/ e deixar a árvore limpa para o bmad-build.

### Entrada

Raiz do repositório.

### Comando exato

```text
git add _bmad-output/
git commit -m "docs(S-001): artefatos de planejamento BMAD" \
  --trailer "Story: S-001" --trailer "AI-Assisted: bmad+<agente>"
git push -u origin feat/S-001-consulta-saldo
```

### Resultado esperado [REAL]

```text
docs(S-001): artefatos de planejamento BMAD

Story: S-001
AI-Assisted: bmad+<agente>
 * [new branch]      feat/S-001-consulta-saldo -> feat/S-001-consulta-saldo
```

### Artefatos

Commit com brief, PRD, spine, epics.md, readiness e sprint-status.yaml.

### Checkpoint

git status limpo.

### Doc oficial

[git interpret-trailers](https://git-scm.com/docs/git-interpret-trailers)

·

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

[← 17 · Sprint planning](/playbook/ai-first/tutoriais/passo-17)

[19 · Implementação: bmad-build da story 1-1 →](/playbook/ai-first/tutoriais/passo-19)
