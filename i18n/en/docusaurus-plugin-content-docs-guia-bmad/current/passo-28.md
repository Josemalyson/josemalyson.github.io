---
title: "28 · Epic retrospective"
sidebar_label: "28 · Epic retrospective"
description: "Fechamento Objetivo Julgar o épico pela evidência (diff, commits, specs). Entrada Depois do merge, em branch novo e chat novo. Comando exat…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "passo-27"
pagination_next: "outros-fluxos"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Fechamento*

### Objetivo

Julgar o épico pela evidência (diff, commits, specs).

### Entrada

Depois do merge, em branch novo e chat novo.

### Comando exato

```text
git switch main && git pull
git switch -c docs/S-001-retro
/bmad-retrospective lets retro the epic 1
```

### Resultado esperado [APROXIMADO]

```text
Veredito accepted, accepted-with-open-items ou rejected (story não terminada → rejected). Action items vão para o sprint-status.yaml.
```

### Artefatos

_bmad-output/implementation-artifacts/epic-1-retro-&lt;data>.md

### Checkpoint

Commit "docs(S-001): retrospectiva do épico 1" com trailer, push e PR pelo mesmo fluxo.

### Doc oficial

[Finish an Epic](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/finish-an-epic.md)

**Evidência para o passo 22 (code review):** no revisor híbrido do LinkedIn, checagens determinísticas vêm primeiro; revisores de IA independentes analisam o PR, achados repetidos são consolidados e achados únicos são verificados por outro modelo. A aceitação é medida por comentário que vira mudança de código ([ByteByteGo](https://blog.bytebytego.com/p/how-linkedin-uses-ai-to-review-40000)).

Versão completa no playbook: [passo 28](/playbook/ai-first/tutoriais/passo-28/).

[← 27 · CI, review humano e merge](/guias/bmad/passo-27/)

[Outros fluxos →](/guias/bmad/outros-fluxos/)
