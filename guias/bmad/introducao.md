---
title: "BMAD do zero ao push"
sidebar_label: "Introdução"
description: "Guia de bolso · BMAD Method 6.12.4 BMAD do zero ao push Material de estudo do BMAD Method (https://github.com/bmad-code-org/BMAD-METHOD), l…"
hide_title: true
published: "2026-11-14"
reading_minutes: 3
pagination_prev: null
pagination_next: "como-invocar"
slug: "/"
---

*Guia de bolso · BMAD Method 6.12.4*

# BMAD do zero ao push

Material de estudo do [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD), linha estável **v6.12.4** (npm `latest` em 14/11/2026; documentação no branch `V6.12`). Não é um projeto meu, e não é oferta de serviço.

Este guia recorta o passo a passo executável do [playbook AI-First v0.4](/playbook/ai-first/): 29 passos, do 00 ao 28, com os comandos, o quality gate de pre-commit e o loop de autocorreção. Clique em cada passo para ir ao seguinte.

O site `docs.bmad-method.org` já documenta a **v7 preview alpha**, com outro instalador e outros nomes. Não misture skills e comandos entre versões. Por isso a instalação fixa `bmad-method@6.12.4`.

**[REAL]** = saída capturada no ensaio de 14/11/2026. **[APROXIMADO]** = depende do modelo: o texto varia, mas arquivos e pastas vêm do código dos skills instalados.

Rota completa: brief → PRD → validate → spine → épicos/stories → readiness → sprint planning → build → code review → retro. O `bmad-build` faz commit local e **nunca faz push**. O merge é sempre humano.

O outro guia de bolso é o de [Matt Pocock](/guias/matt-pocock/), com os workflows do repositório `mattpocock/skills`.

[Como invocar um skill →](/guias/bmad/como-invocar/)
