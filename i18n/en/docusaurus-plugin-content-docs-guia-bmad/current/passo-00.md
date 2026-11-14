---
title: "00 · Prerequisites"
sidebar_label: "00 · Prerequisites"
description: "Setup Objetivo Provar que a máquina atende ao README da v6.12 (Node 20.12+, Python 3.10+, uv, Git) e ao exemplo (Go). Entrada Terminal na m…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "arvore"
pagination_next: "passo-01"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in the v0.4 study guide. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*Setup*

### Objetivo

Provar que a máquina atende ao README da v6.12 (Node 20.12+, Python 3.10+, uv, Git) e ao exemplo (Go).

### Entrada

Terminal na máquina da demo.

### Comando exato

```text
node -v && python3 --version && uv --version && git --version && go version
```

### Resultado esperado [REAL]

```text
v24.22.1
Python 3.13.5
uv 0.13.7 (x86_64-unknown-linux-gnu)
git version 2.47.3
go version go1.27.3 linux/amd64
```

### Artefatos

Nenhum.

### Checkpoint

Node ≥ 20.12, Python ≥ 3.10, uv presente. Sem uv o instalador só avisa, mas bmad-build não roda.

### Doc oficial

[Install BMad (v6.12)](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/start/install-bmad.md)

·

[uv](https://docs.astral.sh/uv/)

·

[Go: instalação](https://go.dev/doc/install)

Versão completa no playbook: [passo 00](/playbook/ai-first/tutoriais/passo-00/).

[← Árvore do repositório](/guias/bmad/arvore/)

[01 · Repositório GitHub e módulo Go →](/guias/bmad/passo-01/)
