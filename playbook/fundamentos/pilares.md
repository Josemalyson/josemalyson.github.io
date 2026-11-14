---
title: "Os 12 pilares do harness"
sidebar_label: "Os 12 pilares do harness"
description: "04 · Harness engineering O harness é o sistema que enquadra o modelo: instruções, ferramentas, contexto, estado, execução, recuperação, avaliação…"
hide_title: true
published: "2026-11-14"
reading_minutes: 8
pagination_prev: "fundamentos/time"
pagination_next: "fundamentos/ledger"
---

*04 · Harness engineering*


O harness é o sistema que enquadra o modelo: instruções, ferramentas, contexto, estado, execução, recuperação, avaliação e limites de segurança.

### Mapa dos pilares

<div class="table-wrap">
<table>
<tr><th>#</th><th>Pilar</th><th>Padrão de referência</th><th>Checagem</th></tr>
<tr><td>1</td><td>Rules</td><td>AGENTS.md curto + regras locais</td><td>O agente carregou as regras esperadas?</td></tr>
<tr><td>2</td><td>Skills</td><td>Agent Skills / SKILL.md</td><td>Skill validada, escopo e scripts auditados?</td></tr>
<tr><td>3</td><td>Agentes</td><td>Agente único; subagente por necessidade</td><td>Custo/qualidade comparados?</td></tr>
<tr><td>4</td><td>MCP e tools</td><td>Gateway, allowlist e identidade</td><td>Tool, escopo e chamada auditáveis?</td></tr>
<tr><td>5</td><td>Context engineering</td><td>Selecionar, escrever, comprimir, isolar</td><td>Contexto mínimo e sem dado proibido?</td></tr>
<tr><td>6</td><td>Retrieval</td><td>grep/AST para código; RAG para documentos</td><td>Recall e precisão medidos?</td></tr>
<tr><td>7</td><td>Memória</td><td>Arquivos versionados como base</td><td>Proveniência, ACL e retenção?</td></tr>
<tr><td>8</td><td>Execução longa</td><td>Estado em disco + checkpoints</td><td>Retomada testada sem duplicar ações?</td></tr>
<tr><td>9</td><td>Orquestração</td><td>Workflow fixo com gates</td><td>Estado, timeout, retry e cancelamento?</td></tr>
<tr><td>10</td><td>Hooks/guardrails</td><td>Hooks + CI + policy enforcement</td><td>Bloqueio funciona também em cloud?</td></tr>
<tr><td>11</td><td>Evals/observabilidade</td><td>OTel GenAI + evals determinísticos</td><td>Trace correlacionado e redigido?</td></tr>
<tr><td>12</td><td>Melhoria contínua</td><td>Falhas → evals → ajuste controlado</td><td>Regra nova melhorou benchmark?</td></tr>
</table>
</div>

### 1. Rules e AGENTS.md

O arquivo raiz deve conter somente invariantes que o agente precisa conhecer sempre: arquitetura resumida, comandos oficiais, convenções, caminhos importantes, limites de segurança e instrução para localizar referências. Regras específicas ficam em diretórios de escopo suportados pelo agente. Não duplicar a documentação completa nem incluir segredos.


```text
# AGENTS.md — exemplo mínimo
## Objetivo
Serviço de consulta de saldo (Go); decisões em _bmad-output/planning-artifacts/architecture/ (AD-n).
## Comandos
- go vet ./...
- go test ./...
## Regras
- Não alterar contratos públicos sem decisão AD-n aprovada na spine.
- Não acessar produção nem usar credenciais reais.
- Não registrar PII, tokens ou payloads financeiros.
- Toda mudança deve referenciar Story: S-123.
## Verificação
Execute testes, SAST, SCA e secret scan antes de propor PR.
```


### 2. Skills

Adotar o formato Agent Skills como pacote portátil. Cada skill deve declarar propósito e quando ativar, pré-requisitos, passos, saída esperada, limites e referências. Scripts devem ser tratados como código de terceiros: revisar, fixar versão, testar em sandbox e atestar a procedência. A especificação recomenda disclosure progressivo e SKILL.md principal abaixo de 500 linhas.

### 3. Subagentes

Começar com agente único. Criar subagente quando a tarefa for independente, exigir especialidade distinta ou consumir contexto que não deve poluir o orquestrador. Exigir orçamento e limite de profundidade/fan-out. Medir multiplicador de custo e taxa de retrabalho; não assumir que paralelismo melhora throughput.

### 4. MCP e ferramentas

O MCP padroniza transporte e descoberta, mas não substitui o modelo de autorização corporativa. Todo servidor deve passar por intake, ter owner, versão/digest fixado, identidade de workload, allowlist de tools, escopos mínimos, restrição de egress e logging. Filtrar tools não autorizadas no gateway; validar novamente no backend.

### 5. Context engineering

Aplicar quatro operações: escrever estado durável, selecionar informação just-in-time, comprimir checkpoints e isolar tarefas. Evitar carregar todo o monorepo, histórico de chat ou documentação em toda sessão. Limitar tools redundantes e contexto irrelevante. Tratar saída de agente e memória recuperada como dado não confiável.

### 6. Retrieval

Para código, começar por ripgrep, navegação AST e indexação simbólica. Para normas e documentos internos, RAG híbrido com ACL, citações e filtros de classificação. Grafo de código/GraphRAG só quando perguntas multi-hop justificarem custo e complexidade. Criar benchmark de perguntas reais antes de escolher.

### 7. Memória

Arquivos versionados (PRD, spine AD-n, spec, runbook, skills, progress) são a fonte de verdade. Banco de memória como Mem0/Letta/Zep é complementar, nunca autoridade para decisões críticas. Toda memória precisa de origem, timestamp, escopo, expiração, ACL e mecanismo de correção. Proibir segredos e PII por padrão.

### 8. Execução longa

Persistir estado em arquivos estruturados e transições idempotentes. Antes de retomar, validar lock, branch, commit e ações externas já executadas. O bmad-loop atualmente declara early open beta; testar com worktree, dry-run, limites de sessão e versão pinada. Não permitir dois orquestradores concorrentes no mesmo conjunto de stories.

### 9. Orquestração

Preferir pipeline determinístico com checkpoints, timeout, retries limitados, compensação e cancelamento. LangGraph/Strands podem ser avaliados quando ramificações dinâmicas, estado distribuído ou human-in-the-loop complexo forem necessários. O fluxo BMAD com gates humanos já resolve boa parte do piloto.

### 10. Hooks e guardrails

Hooks melhoram ergonomia, mas não são fronteira de segurança. Aplicar política no CI, gateway, IAM, sandbox, rede e backend. Testar bypasses: sessões cloud, CLI diferente, execução indireta, tool server comprometido e prompt injection. Um hook local nunca deve ser a única barreira.

**No Tutorial A (passos 08 a 10 e 20):** a skill [pre-commit-quality-gate](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate) gera hooks fail-fast de 14 categorias e o AGENTS.md define o loop de autocorreção: no `[FAIL]`, o agente corrige só a categoria que falhou e repete o commit, com no máximo 3 tentativas, sem `--no-verify`; na 3ª falha, entrega a um humano. É feedback rápido para o agente; o CI repete os gates.

### 11. Evals e observabilidade

Instrumentar sessões, chamadas de modelo, tools, retrieval e verificações com OpenTelemetry. GenAI semantic conventions continuam em desenvolvimento em parte dos atributos; fixar versão e documentar mapeamentos. Não coletar prompt/resposta por padrão. Evals binários de código, contrato e política são gates mais fortes que avaliação subjetiva do modelo.

### 12. Melhoria contínua

Falha vira issue/eval com caso reproduzível. Alterar uma regra ou skill por vez, executar conjunto de regressão, comparar custo/qualidade e só então promover. Podar instruções obsoletas. Toda mudança em prompt, skill, modelo ou ferramenta é mudança de configuração controlada e deve ter owner e versão.

### Evidência de mercado por pilar

<div class="table-wrap">
<table>
<tr><th>Pilar</th><th>Evidência</th><th>Implicação no playbook</th><th>Fonte</th></tr>
<tr><td>2 · Skills</td><td>Palestra mostra uma skill de diagnóstico oficial que lia credenciais e sondava o metadata da instância.</td><td>Auditar skill executando em sandbox com egress bloqueado, não só lendo o SKILL.md.</td><td>[AI Engineer (Zenity)](https://www.youtube.com/watch?v=_7P580m4kPY)</td></tr>
<tr><td>5 · Context engineering</td><td>Google associa desvios não solicitados de agentes a 77% mais tokens; TODOs obsoletos no repositório desviam o agente da tarefa.</td><td>Higiene do repositório faz parte do contexto mínimo.</td><td>[Google Developers](https://developers.googleblog.com/agent-distraction/)</td></tr>
<tr><td>6 · Retrieval</td><td>JioHotstar: busca estrutural foi melhor em tarefa concreta; busca semântica ajudou em enunciado ambíguo; camada extra de retrieval não melhorou conclusão nem tokens de forma consistente.</td><td>Reforça começar por grep/AST e medir antes de indexar.</td><td>[InfoQ](https://www.infoq.com/news/2026/11/jiohotstar-codingagent-retrieval/)</td></tr>
<tr><td>9 · Orquestração</td><td>Meta usa um orquestrador fino, roteador determinístico sem raciocínio de domínio, que despacha para subagentes especialistas.</td><td>Reforça workflow fixo com gates antes de orquestração dinâmica.</td><td>[Meta Engineering](https://engineering.fb.com/2026/10/19/ml-applications/thin-orchestrator-ai-agent-architecture/)</td></tr>
<tr><td>11 · Evals</td><td>Playbook de avaliação separa quatro perguntas: concluiu a tarefa, ficou no tema, vazou dado, pulou passo.</td><td>Usar as quatro perguntas como estrutura mínima dos evals de agente.</td><td>[AWS ML Blog](https://aws.amazon.com/blogs/machine-learning/the-agent-evaluation-playbook-built-in-deepeval-and-autoeval-on-agentcore/)</td></tr>
<tr><td>11 · Evals</td><td>MCPHallu (358 tarefas, 36 servidores MCP): nos casos de objetivo inalcançável, só 23,2% das execuções passaram.</td><td>Incluir tarefas impossíveis: o comportamento correto é parar ou recusar, não inventar caminho.</td><td>[arXiv](https://arxiv.org/abs/2611.07689)</td></tr>
<tr><td>12 · Melhoria contínua</td><td>Thoughtworks SpecBench: o workflow com mais harness ganhou 2,75 p.p. de correção, com tempo quase dobrado e muito mais tokens.</td><td>Toda regra nova precisa provar que paga o próprio custo.</td><td>[Thoughtworks](https://www.thoughtworks.com/insights/blog/generative-ai/specbench-tool-evaluate-ai-enabled-software-development-workflows)</td></tr>
</table>
</div>

:::warning

Nota de evidência:

os doze pilares são uma síntese de engenharia proposta. Não existe padrão regulatório único que obrigue esta taxonomia. Os requisitos de cada instituição devem ser derivados da política de segurança, risco de terceiros, privacidade e SDLC corporativo.

:::

Documentação oficial

- [AGENTS.md](https://agents.md/)
- [Agent Skills — especificação](https://agentskills.io/specification)
- [BMAD: Set and Maintain Project Context](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/existing-codebases/set-and-maintain-project-context.md)
- [BMAD: Customize BMad](https://github.com/bmad-code-org/BMAD-METHOD/blob/V6.12/docs/customize/customize-bmad.md)
- [MCP — especificação](https://modelcontextprotocol.io/specification/)
- [MCP — Authorization](https://modelcontextprotocol.io/specification/latest/basic/authorization)
- [OpenTelemetry — GenAI semconv](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- [git worktree](https://git-scm.com/docs/git-worktree)
- [promptfoo](https://www.promptfoo.dev/docs/intro/)
- [Inspect](https://inspect.aisi.org.uk/)
- [Skill pre-commit-quality-gate](https://github.com/Josemalyson/custom-skills/tree/main/pre-commit-quality-gate)
- [githooks](https://git-scm.com/docs/githooks)

Links verificados em 14/11/2026. BMAD: documentação da v6.12 (branch V6.12).

[← Time de quatro pessoas](/playbook/ai-first/fundamentos/time)

[Ledger e telemetria por story →](/playbook/ai-first/fundamentos/ledger)
