---
title: "01 · Repositório GitHub e módulo Go"
sidebar_label: "01 · Repositório GitHub e módulo Go"
description: "Setup Objetivo Partir de um repositório vazio com remoto no GitHub e o módulo Go criado. Entrada No GitHub web : New repository → nome demo-saldo,…"
hide_title: true
published: "2026-11-14"
reading_minutes: 1
pagination_prev: "tutoriais/passo-00"
pagination_next: "tutoriais/passo-02"
---

*Setup*

### Objetivo

Partir de um repositório vazio com remoto no GitHub e o módulo Go criado.

### Entrada

No GitHub (web): New repository → nome demo-saldo, sem README. Copie a URL HTTPS ou SSH.

### Comando exato

```text
mkdir demo-saldo && cd demo-saldo
git init -b main
git remote add origin <URL_DO_REPO_GITHUB>
go mod init demo-saldo
git add go.mod
git commit -m "chore: inicializa módulo Go demo-saldo"
git push -u origin main
```

### Resultado esperado [REAL]

```text
Initialized empty Git repository in .../demo-saldo/.git/
go: creating new go.mod: module demo-saldo
[main (root-commit) 4e7f878] chore: inicializa módulo Go demo-saldo
 1 file changed, 3 insertions(+)
 * [new branch]      main -> main
```

### Artefatos

go.mod (module demo-saldo; go 1.27.3)

### Checkpoint

git status → On branch main, nothing to commit. O branch main aparece no GitHub.

### Doc oficial

[Go: criar um módulo](https://go.dev/doc/tutorial/create-module)


Guia de bolso: [passo 01 no guia BMAD](/guias/bmad/passo-01/).

[← 00 · Pré-requisitos](/playbook/ai-first/tutoriais/passo-00)

[02 · Instalar o BMAD fixado e sem prompts →](/playbook/ai-first/tutoriais/passo-02)
