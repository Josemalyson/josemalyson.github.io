---
title: "Caso de exemplo"
sidebar_label: "Caso de exemplo"
description: "Caso de exemplo Caso de exemplo GET /contas/{id}/saldo devolve saldo, limite e limite disponível (= saldo + limite) de uma conta fictícia ,…"
hide_title: true
published: "2026-11-14"
reading_minutes: 2
pagination_prev: "como-invocar"
pagination_next: "gates"
---

*Caso de exemplo*

# Caso de exemplo

`GET /contas/{id}/saldo` devolve saldo, limite e limite disponível (= saldo + limite) de uma conta **fictícia**, em centavos (`int64`), com dados sintéticos em memória e sem PII. Respostas: 400 para id inválido, 404 para conta inexistente e 405 para outro método. Story `S-001`, branch `feat/S-001-consulta-saldo`.

É só um exemplo de estudo para exercitar o fluxo. A stack é Go (`net/http` da biblioteca padrão, testes table-driven com `httptest`).

Caminhos no padrão do BMAD (`_bmad-output/...`), com decisões **AD-n** na spine. `_bmad/` e `_bmad-output/` ficam versionados. Trailers `Story:` e `AI-Assisted:` entram por amend manual antes do push.

No playbook: [Tutoriais operacionais](/playbook/ai-first/tutoriais/indice/).

[← Como invocar um skill](/guias/bmad/como-invocar/)

[Gates do playbook × sign-offs →](/guias/bmad/gates/)
