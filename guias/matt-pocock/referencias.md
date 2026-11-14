---
title: "Referências"
sidebar_label: "Referências"
description: "6 · Referências Referências O que mudou em cada revisão. Fontes: commits do repositório, CHANGELOG, feed do AI Hero e feed do canal do YouT…"
hide_title: true
published: "2026-11-14"
reading_minutes: 4
pagination_prev: "camada-abaixo"
pagination_next: null
---

*6 · Referências*

# Referências

O que mudou em cada revisão. Fontes: commits do repositório, CHANGELOG, feed do AI Hero e feed do canal do YouTube (só títulos).

**12/11/2026 · commits até 12/11/2026 (5863806).**

Repositório: dois commits na skill em progresso [`software-factory`](/guias/matt-pocock/skills/em-progresso#software-factory) ([d18183f](https://github.com/mattpocock/skills/commit/d18183fe9d96e1240105a8534e53591e9b49afd7), merge [5863806](https://github.com/mattpocock/skills/commit/5863806dd4e15c63174bee4e7515a4256792ecfa), [PR #1416](https://github.com/mattpocock/skills/pull/1416)). Em `SKILL.md`, job/workflow/action passam a ser evitados só como nome da task; o arquivo de CI e os jobs dele é que ligam a task. Em `EXAMPLE-TASKS.md`, a task de explore passa a conferir as alegações do ticket (reproduzindo quando dá), classificar, deixar os achados no ticket para o implementer e nunca fazer push. Sem release nova (continua v1.3.2) e sem mudança no CHANGELOG. AI Hero: nenhum post novo.
YouTube: vídeo novo de 11/11, [LIVE: Writing code that doesn't suck with the creators of Pi](https://www.youtube.com/watch?v=ZBTegd8DUZM). Pela descrição, conversa com Mario Zechner e Armin Ronacher sobre escrever código com agentes que não fique ruim. Não muda o texto de nenhum workflow (fonte: título e descrição, sem transcrição).

**07/11/2026 · commits até 31/10/2026 (4ae2317), sem commits novos.**

YouTube: vídeo novo de 06/11, [Someone wrote a PAPER about my skill](https://www.youtube.com/watch?v=KJr1Q-k-yH0). Pela descrição, um paper acadêmico ([arxiv.org/pdf/2610.34938](https://arxiv.org/pdf/2610.34938)) analisa a skill [retro](/guias/matt-pocock/skills/the-main-flow#retro) e como agentes de código se auto-evoluem. Sem impacto nos workflows (fonte: título e descrição, sem transcrição).
Repositório e AI Hero: nenhum commit nem post novo desde a revisão de 06/11.

**06/11/2026 · commits até 31/10/2026 (4ae2317), sem commits novos.**

YouTube: vídeo novo de 05/11, [Is vibe coding an insult?](https://www.youtube.com/watch?v=Jy8vX_CIsBw) (um Short). Pela descrição, discute o que "vibe coding" significa, a definição de Andrej Karpathy e quando é útil ou prejudicial para o código. Vídeo sem impacto nos workflows (fonte: título e descrição, sem transcrição).
Repositório e AI Hero: nenhum commit nem post novo desde a revisão de 05/11.

**05/11/2026 · commits até 31/10/2026 (4ae2317), sem commits novos.**

YouTube: vídeo novo de 04/11, [Junior engineers: don't wait for permission](https://www.youtube.com/watch?v=Z1saoyb_98M). Pela descrição, é um corte sobre se um dev júnior deve adotar a ideia de [software factory](/guias/matt-pocock/skills/em-progresso#software-factory) já ou esperar o nível pleno/sênior; a tese é que o que pesa é a confiança e a responsabilidade que você recebe, não a sua taxa de erro. Não muda nenhum workflow nem skill (fonte: título e descrição, sem transcrição).
Repositório e AI Hero: nenhum commit nem post novo desde a revisão de 04/11.

**04/11/2026 · commits até 31/10/2026 (4ae2317), release v1.3.2 de 29/10.**

Nova skill em progresso: `software-factory` (4ae2317). A pasta in-progress tem 8 skills; as 27 promovidas não mudaram.
Nova regra: subagentes começam com contexto novo (7739eae).
implement-spec: um implementer novo por ticket (a496f55); a nota do PR rascunho passa a ser atribuída à v1.3.0, que é onde ela está, e não à v1.3.1.
W1: o implement só busca ticket se você passar referência (#1196).
chief-of-staff: wiki compartilhada primeiro, retro como procedimento (5ae4816).
Instalação das skills em progresso corrigida para `--skill=<nome>`, com fonte primária. Aviso para rodar o setup de novo depois da v1.3.2 (ed0de59, 59db609).
Conferido sem mudança: v1.3 (#878, #880) e a dependência de grill-me em grilling (o SKILL.md é só "Call the Skill tool with grilling").
AI Hero e YouTube: nenhum post de skills nem vídeo publicado depois de 19/10 nos feeds. Todos os links do doc responderam 200.

### Fontes originais

- [mattpocock/skills](https://github.com/mattpocock/skills) — repositório de Matt Pocock
- [CHANGELOG](https://github.com/mattpocock/skills/blob/main/CHANGELOG.md)
- [Releases](https://github.com/mattpocock/skills/releases)
- [aihero.dev/skills](https://www.aihero.dev/skills)
- [aihero.dev/skills.md](https://www.aihero.dev/skills.md)

Este guia foi revisado contra commits até 12/11/2026 (`5863806`). A trilha longa, em outro formato, está em [Trilha Matt Pocock](/trilhas/). Os comandos do estudo AI-First estão no [playbook](/playbook/ai-first/) e no [guia de bolso BMAD](/guias/bmad/).

[← 5 · Uma camada abaixo](/guias/matt-pocock/camada-abaixo/)
