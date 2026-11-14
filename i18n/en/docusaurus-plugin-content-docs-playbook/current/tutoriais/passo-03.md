---
title: "03 · Check the installed skills"
sidebar_label: "03 · Check the installed skills"
description: "Setup Objetivo Mostrar à audiência o que foi instalado e para onde cada fase escreve. Entrada Raiz do repositório. Comando exato text ls…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-02"
pagination_next: "tutoriais/passo-04"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Setup*

### Objetivo

Mostrar à audiência o que foi instalado e para onde cada fase escreve.

### Entrada

Raiz do repositório.

### Comando exato

```text
ls .claude/skills
cat _bmad/bmm/config.yaml
```

### Resultado esperado [REAL]

```text
bmad-advanced-elicitation  bmad-agent-analyst  bmad-agent-architect  bmad-agent-dev
bmad-agent-pm  bmad-agent-ux-designer  bmad-architecture  bmad-brainstorming  bmad-build
bmad-build-auto  bmad-code-review  bmad-correct-course  bmad-create-epics-and-stories
bmad-customize  bmad-deep-recon  bmad-forge-idea  bmad-help  bmad-party-mode  bmad-prd
bmad-prfaq  bmad-product-brief  bmad-project-context  bmad-qa-generate-e2e-tests
bmad-retrospective  bmad-review  bmad-spec  bmad-sprint-planning  bmad-ux  bmad-walkthrough
...
planning_artifacts: "{project-root}/_bmad-output/planning-artifacts"
implementation_artifacts: "{project-root}/_bmad-output/implementation-artifacts"
```

### Artefatos

Nenhum novo.

### Checkpoint

Os dois caminhos acima são onde as fases 1 a 6 gravam.

### Doc oficial

[Skills and Agents](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/reference/skills-and-agents.md)

[← 02 · Install pinned BMAD, no prompts](/playbook/ai-first/tutoriais/passo-02)

[04 · Commit the installation →](/playbook/ai-first/tutoriais/passo-04)
