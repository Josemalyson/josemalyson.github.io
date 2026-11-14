---
title: "28 · Retrospectiva do épico"
sidebar_label: "28 · Retrospectiva do épico"
description: "Fechamento Objetivo Julgar o épico pela evidência diff, commits, specs . Entrada Depois do merge, em branch novo e chat novo. Comando exato text…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-27"
pagination_next: "tutoriais/outros-fluxos"
---

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


Guia de bolso: [passo 28 no guia BMAD](/guias/bmad/passo-28/).

[← 27 · CI, review humano e merge](/playbook/ai-first/tutoriais/passo-27)

[Outros fluxos →](/playbook/ai-first/tutoriais/outros-fluxos)
