---
title: "04 · Commit the installation"
sidebar_label: "04 · Commit the installation"
description: "Setup Objetivo Versionar _bmad/ e os skills; deixar a árvore limpa (bmad-build exige). Entrada Raiz do repositório. Comando exato text git …"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-03"
pagination_next: "passo-05"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Setup*

### Objetivo

Versionar _bmad/ e os skills; deixar a árvore limpa (bmad-build exige).

### Entrada

Raiz do repositório.

### Comando exato

```text
git add -A
git commit -m "chore: instala BMAD Method v6.12.4 (bmm)"
git push
```

### Resultado esperado [REAL]

```text
[main f15ba5d] chore: instala BMAD Method v6.12.4 (bmm)
 448 files changed, 47202 insertions(+)
```

### Artefatos

Commit no main com _bmad/, .claude/skills/, .agents/skills/.

### Checkpoint

git status limpo.

### Doc oficial

[Adopt BMad Across a Team](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/customize/adopt-bmad-across-a-team.md)

Versão completa no playbook: [passo 04](/playbook/ai-first/tutoriais/passo-04/).

[← 03 · Conferir os skills instalados](/guias/bmad/passo-03/)

[05 · Branch da story →](/guias/bmad/passo-05/)
