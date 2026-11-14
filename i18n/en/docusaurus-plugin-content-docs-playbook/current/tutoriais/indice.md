---
title: "Operational tutorials"
sidebar_label: "Operational tutorials"
description: "06 · Runbooks Três fluxos: nova feature Tutorial A, passo a passo executável com BMAD 6.12.4 e quality gate de pre-commit com loop de…"
hide_title: true
published: "2026-11-14"
reading_minutes: 5
pagination_prev: "fundamentos/ledger"
pagination_next: "tutoriais/passo-00"
---

:::note

The sidebar and the title of this page are in English. The body stays in Portuguese, as published in v0.4. **[APROXIMADO]** marks a model-dependent passage. **[REAL]** marks output captured in the 14 Nov 2026 run.

:::

*06 · Runbooks*


Três fluxos: nova feature (Tutorial A, passo a passo executável com BMAD 6.12.4 e quality gate de pre-commit com loop de autocorreção, do zero ao push e PR), evolução de feature e correção de bug.

### Setup base de repositório (padrão BMAD 6.12.4)


```text
repo/
├── AGENTS.md                  # bloco bmad:context + regra do loop de autocorreção
├── .githooks/                 # pre-commit (14 categorias) e commit-msg, gerados pela skill
├── go.mod, *.go               # código do exemplo (Go)
├── _bmad/                     # config, scripts, manifest e custom/ (versionado)
│   └── custom/                # overrides do time (*.toml); *.user.toml fica fora do git
├── _bmad-output/              # versionado
│   ├── planning-artifacts/
│   │   ├── briefs/brief-<projeto>-<data>/brief.md
│   │   ├── prds/prd-<projeto>-<data>/prd.md
│   │   ├── architecture/architecture-<projeto>-<data>/ARCHITECTURE-SPINE.md   # decisões AD-n
│   │   ├── epics.md
│   │   └── implementation-readiness.md
│   └── implementation-artifacts/
│       ├── sprint-status.yaml
│       ├── spec-1-1-<slug>.md
│       ├── deferred-work.md
│       └── epic-1-retro-<data>.md
├── .claude/skills/            # Claude Code: bmad-* e pre-commit-quality-gate
├── .agents/skills/            # Cursor, Codex, Devin e outros agentes: idem
├── evals/
├── scripts/
└── .github/workflows/
```


Contrato de spec do piloto: BMAD v6.12.4, linha estável (npm `latest` em 14/11/2026). V7 está em preview alpha e muda instalador e nomes; não misturar skills e comandos entre versões. `_bmad/` e `_bmad-output/` são versionados no repositório.

### Tutorial A — Nova feature, do zero ao push (hands-on)

Roteiro sequencial com BMAD Method **v6.12.4** (linha estável, verificada em 14/11/2026). Exemplo genérico de ambiente bancário: `GET /contas/{id}/saldo` em Go, com dados sintéticos e Story `S-001`. Cada passo traz objetivo, entrada, comando exato, resultado esperado, artefatos, checkpoint e documentação oficial. **[REAL]** = saída capturada no ensaio de 14/11/2026; **[APROXIMADO]** = depende do modelo; o texto varia, mas arquivos e pastas vêm do código dos skills instalados.

:::note

Versão:

o site docs.bmad-method.org já documenta a v7 (preview alpha), que tem outro instalador. A documentação da v6.12 fica no branch

V6.12

do GitHub; todos os links abaixo apontam para lá. Por isso o comando de instalação fixa

bmad-method@6.12.4

.

:::

#### Como invocar um skill em cada agente

Os passos citam o skill pelo nome; os blocos usam o prefixo `/`. Os skills são arquivos `SKILL.md` portáveis no padrão Agent Skills e podem ser customizados pelo time em `_bmad/custom/<skill>.toml` ([Customize BMad](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/customize/customize-bmad.md), [Adopt BMad Across a Team](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/customize/adopt-bmad-across-a-team.md)).

<div class="table-wrap">
<table>
<tr><th>Agente</th><th>Onde o skill fica</th><th>Como invocar</th><th>Fonte</th></tr>
<tr><td>Claude Code</td><td>`.claude/skills/`</td><td>`/bmad-build`</td><td>[documentação](https://code.claude.com/docs/en/skills)</td></tr>
<tr><td>Cursor</td><td>`.agents/skills/`</td><td>`/ no chat do Agent, depois bmad-build`</td><td>[documentação](https://cursor.com/docs/context/skills)</td></tr>
<tr><td>Codex</td><td>`.agents/skills/`</td><td>`$bmad-build`</td><td>[documentação](https://developers.openai.com/codex/skills)</td></tr>
<tr><td>Devin (contratado) e outros</td><td>`.agents/skills/ (Devin também lê .claude/skills/)`</td><td>`skill pelo nome; no Devin CLI, /bmad-build`</td><td>[documentação](https://docs.devin.ai/product-guides/skills)</td></tr>
</table>
</div>

**Nomes atuais:** na v6.12.4 o PRD é `bmad-prd` (intents create, update, validate) e a arquitetura é `bmad-architecture`. Os nomes antigos, como `bmad-create-prd`, só existem se a instalação usar `--shims` (50 skills em vez de 29, testado em 14/11/2026). Regras de condução: cada skill em **chat novo**; `bmad-build` exige **árvore limpa** e **branch coerente**, faz commit local e **nunca faz push**.

:::note

Guardrail na fronteira do commit:

os passos 08 a 10 instalam a skill

[pre-commit-quality-gate](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate)

(repositório público custom-skills) e a regra do loop de autocorreção no AGENTS.md; o passo 20 mostra o loop em ação no commit do

bmad-build

. O hook dá feedback rápido ao agente, mas não é fronteira de segurança: o CI repete os gates (página 04, pilar 10).

:::

#### Índice dos passos

- [00 · Pré-requisitos](/playbook/ai-first/tutoriais/passo-00)
- [01 · Repositório GitHub e módulo Go](/playbook/ai-first/tutoriais/passo-01)
- [02 · Instalar o BMAD fixado e sem prompts](/playbook/ai-first/tutoriais/passo-02)
- [03 · Conferir os skills instalados](/playbook/ai-first/tutoriais/passo-03)
- [04 · Commit da instalação](/playbook/ai-first/tutoriais/passo-04)
- [05 · Branch da story](/playbook/ai-first/tutoriais/passo-05)
- [06 · Pedir orientação ao BMAD](/playbook/ai-first/tutoriais/passo-06)
- [07 · Contexto do repositório (AGENTS.md)](/playbook/ai-first/tutoriais/passo-07)
- [08 · Quality gate: instalar a skill e gerar os hooks](/playbook/ai-first/tutoriais/passo-08)
- [09 · Quality gate: ativar e dry-run](/playbook/ai-first/tutoriais/passo-09)
- [10 · Loop de autocorreção: regra no AGENTS.md e commit](/playbook/ai-first/tutoriais/passo-10)
- [11 · Discovery: product brief](/playbook/ai-first/tutoriais/passo-11)
- [12 · Spec: PRD (create)](/playbook/ai-first/tutoriais/passo-12)
- [13 · Spec: PRD (validate)](/playbook/ai-first/tutoriais/passo-13)
- [14 · Spec: arquitetura (spine)](/playbook/ai-first/tutoriais/passo-14)
- [15 · Decomposição: épicos e stories](/playbook/ai-first/tutoriais/passo-15)
- [16 · Readiness gate](/playbook/ai-first/tutoriais/passo-16)
- [17 · Sprint planning](/playbook/ai-first/tutoriais/passo-17)
- [18 · Commit do planejamento](/playbook/ai-first/tutoriais/passo-18)
- [19 · Implementação: bmad-build da story 1-1](/playbook/ai-first/tutoriais/passo-19)
- [20 · Loop de autocorreção no commit do agente](/playbook/ai-first/tutoriais/passo-20)
- [21 · Verificação local](/playbook/ai-first/tutoriais/passo-21)
- [22 · Code review independente](/playbook/ai-first/tutoriais/passo-22)
- [23 · Walkthrough para o review humano](/playbook/ai-first/tutoriais/passo-23)
- [24 · Trailers da página 05 no commit do agente](/playbook/ai-first/tutoriais/passo-24)
- [25 · Push do branch](/playbook/ai-first/tutoriais/passo-25)
- [26 · Abrir o PR no GitHub (web)](/playbook/ai-first/tutoriais/passo-26)
- [27 · CI, review humano e merge](/playbook/ai-first/tutoriais/passo-27)
- [28 · Retrospectiva do épico](/playbook/ai-first/tutoriais/passo-28)

[← Ledger and telemetry per story](/playbook/ai-first/fundamentos/ledger)

[00 · Prerequisites →](/playbook/ai-first/tutoriais/passo-00)
