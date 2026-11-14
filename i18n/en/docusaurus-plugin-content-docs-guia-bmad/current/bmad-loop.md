---
title: "Outside the walkthrough: bmad-loop"
sidebar_label: "bmad-loop"
description: "Fora do passo a passo bmad-loop O README do bmad-loop (https://github.com/bmad-code-org/bmad-loop) (v0.13.2, 10/10/2026) declara early open…"
hide_title: true
published: "2026-11-14"
reading_minutes: 3
pagination_prev: "outros-fluxos"
pagination_next: "referencias"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Fora do passo a passo*

# bmad-loop

O README do [bmad-loop](https://github.com/bmad-code-org/bmad-loop) (v0.13.2, 10/10/2026) declara **early open beta**. Não é pré-requisito deste guia. Usar só em sandbox, com release fixada.

Pré-requisitos: projeto BMAD v6 com BMAD-METHOD ≥ 6.10.0 e o skill `bmad-build-auto` instalado; `sprint-status.yaml` gerado por `bmad-sprint-planning` (modo sprint); multiplexador de terminal; abrir o CLI do agente uma vez no projeto e aceitar os prompts de trust e hooks antes do `run`.

```text
uv tool install "bmad-loop[tui] @ git+https://github.com/bmad-code-org/bmad-loop.git"
bmad-loop init            # skills, hooks, .bmad-loop/policy.toml, gitignore
bmad-loop validate        # preflight: config, board, git, multiplexador, CLI, hooks
bmad-loop run --dry-run   # imprime o plano sem iniciar sessões
# Só executar bmad-loop run após revisar policy.toml e validar isolamento (worktree).
```

No playbook: [Ciclos e gates](/playbook/ai-first/fundamentos/ciclos-e-gates/) e a documentação [BMAD: Autonomous Development Loops](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/build/autonomous-development-loops.md).

[← Outros fluxos](/guias/bmad/outros-fluxos/)

[Referências →](/guias/bmad/referencias/)
