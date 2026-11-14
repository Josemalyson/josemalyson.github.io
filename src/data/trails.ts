type Copy = Record<'pt-BR' | 'en', string>;

export type Trail = {
  slug: string;
  href: string;
  version: string | null;
  date: string | null;
  level: Copy | null;
  duration: Copy | null;
  title: Copy;
  summary: Copy;
};

export type TrailTheme = {
  id: string;
  title: Copy;
  summary: Copy;
  trails: Trail[];
};

/**
 * Learning trails, grouped by the study order in the source folders 00–09.
 * To add one: put the lab at static/trilhas/<slug>/index.html and append it
 * to the matching theme. The link is a plain href, so the lab is not locale-prefixed.
 */
export const trailThemes: TrailTheme[] = [
  {
    id: 'fundamentos',
    title: {'pt-BR': 'Fundamentos de engenharia', en: 'Engineering fundamentals'},
    summary: {'pt-BR': 'Base de produto: Git, Next.js, Node, banco de dados, DevOps e um agente de código.', en: 'Product foundations: Git, Next.js, Node, databases, DevOps, and a coding agent.'},
    trails: [
      {
        slug: 'trilha-fullstack-nextjs-node-devops-validada',
        href: '/trilhas/trilha-fullstack-nextjs-node-devops-validada/',
        version: null,
        date: null,
        level: {'pt-BR': 'Intermediário ao avançado', en: 'Intermediate to advanced'},
        duration: {'pt-BR': '10 estações', en: '10 stations'},
        title: {'pt-BR': 'Trilha fullstack validada', en: 'Validated fullstack trail'},
        summary: {'pt-BR': 'Git, Next.js, Node, PostgreSQL, DevOps e segurança, numa linha só de construção de produto.', en: 'Git, Next.js, Node, PostgreSQL, DevOps, and security, as one product-building line.'},
      },
      {
        slug: 'como-construir-claude-code',
        href: '/trilhas/como-construir-claude-code/',
        version: null,
        date: '2026-07-08',
        level: {'pt-BR': 'Avançado', en: 'Advanced'},
        duration: {'pt-BR': '10 estações', en: '10 stations'},
        title: {'pt-BR': 'Como construir o Claude Code', en: 'How to build Claude Code'},
        summary: {'pt-BR': 'Arquitetura do Claude Code, do agentic loop às permissões, e um agente de código em TypeScript.', en: 'Claude Code architecture, from the agentic loop to permissions, and a TypeScript coding agent.'},
      },
    ],
  },
  {
    id: 'ia',
    title: {'pt-BR': 'IA, modelos e execução', en: 'AI, models, and execution'},
    summary: {'pt-BR': 'Fundamentos de IA e execução local de modelos, inclusive Hugging Face em CPU e GPU.', en: 'AI fundamentals and local model execution, including Hugging Face on CPU and GPU.'},
    trails: [
      {
        slug: 'engenharia-de-ia-fundamentos-ao-estado-da-arte',
        href: '/trilhas/engenharia-de-ia-fundamentos-ao-estado-da-arte/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '38 estações', en: '38 stations'},
        title: {'pt-BR': 'Engenharia de IA: dos fundamentos ao estado da arte', en: 'AI engineering: from fundamentals to current practice'},
        summary: {'pt-BR': 'Machine learning, famílias de modelos, tarefas e a prática atual de engenharia de IA.', en: 'Machine learning, model families, tasks, and current AI engineering practice.'},
      },
      {
        slug: 'trilha-especialista-hugging-face-cpu-gpu-enhanced',
        href: '/trilhas/trilha-especialista-hugging-face-cpu-gpu-enhanced/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '80 estações', en: '80 stations'},
        title: {'pt-BR': 'Hugging Face e execução local em CPU/GPU', en: 'Hugging Face and local CPU/GPU execution'},
        summary: {'pt-BR': 'O ecossistema Hugging Face e como executar modelos localmente em CPU e GPU.', en: 'The Hugging Face ecosystem and how to run models locally on CPU and GPU.'},
      },
    ],
  },
  {
    id: 'loops',
    title: {'pt-BR': 'Loops e agentes', en: 'Loops and agents'},
    summary: {'pt-BR': 'O loop agente-ferramenta, do harness até um agente que chega em produção.', en: 'The agent-tool loop, from the harness to an agent that reaches production.'},
    trails: [
      {
        slug: 'trilha-profunda-engenharia-de-loops-para-agentes',
        href: '/trilhas/trilha-profunda-engenharia-de-loops-para-agentes/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '33 estações', en: '33 stations'},
        title: {'pt-BR': 'Engenharia de loops para agentes', en: 'Loop engineering for agents'},
        summary: {'pt-BR': 'Loops que melhoram com o tempo: harness, ferramentas, verificação e critério de parada.', en: 'Loops that improve over time: harness, tools, verification, and a stop condition.'},
      },
      {
        slug: 'trilha-claude-agent-sdk-do-zero-a-producao',
        href: '/trilhas/trilha-claude-agent-sdk-do-zero-a-producao/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '21 estações', en: '21 stations'},
        title: {'pt-BR': 'Claude Agent SDK, do zero à produção', en: 'Claude Agent SDK, from zero to production'},
        summary: {'pt-BR': 'O Claude Agent SDK, do loop até um agente que chega em deploy.', en: 'The Claude Agent SDK, from the loop to an agent that reaches deploy.'},
      },
      {
        slug: 'trilha-pi-agent-zero-ao-deploy',
        href: '/trilhas/trilha-pi-agent-zero-ao-deploy/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '9 estações', en: '9 stations'},
        title: {'pt-BR': 'Pi Agent Harness, do zero ao deploy', en: 'Pi Agent harness, from zero to deploy'},
        summary: {'pt-BR': 'Reconstrução da arquitetura do Pi Agent Harness, do zero ao deploy.', en: 'A rebuild of the Pi Agent harness architecture, from zero to deploy.'},
      },
    ],
  },
  {
    id: 'harnesses',
    title: {'pt-BR': 'Code agents e harnesses', en: 'Code agents and harnesses'},
    summary: {'pt-BR': 'Arquitetura de agentes de código: Codex, Hermes e o harness da DeepSeek.', en: 'Code-agent architecture: Codex, Hermes, and the DeepSeek harness.'},
    trails: [
      {
        slug: 'trilha-codex-code-agents-completa-enhanced',
        href: '/trilhas/trilha-codex-code-agents-completa-enhanced/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '72 estações', en: '72 stations'},
        title: {'pt-BR': 'Code agents: um Codex do zero ao deploy', en: 'Code agents: a Codex from zero to deploy'},
        summary: {'pt-BR': 'Arquitetura de um code agent no estilo Codex: ferramentas, permissões, transcript e deploy.', en: 'Architecture of a Codex-style code agent: tools, permissions, transcript, and deploy.'},
      },
      {
        slug: 'trilha-completa-hermes-agent-nous-research',
        href: '/trilhas/trilha-completa-hermes-agent-nous-research/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '26 estações', en: '26 stations'},
        title: {'pt-BR': 'Agente no estilo Hermes', en: 'A Hermes-style agent'},
        summary: {'pt-BR': 'Construção de um agente no estilo Hermes, da Nous Research, do zero ao deploy.', en: 'Building a Hermes-style agent, from Nous Research, from zero to deploy.'},
      },
      {
        slug: 'deepseek-harness-everything-is-a-plugin-offline-fixed-v2',
        href: '/trilhas/deepseek-harness-everything-is-a-plugin-offline-fixed-v2/',
        version: null,
        date: null,
        level: {'pt-BR': 'Avançado', en: 'Advanced'},
        duration: {'pt-BR': '9 estações', en: '9 stations'},
        title: {'pt-BR': 'DeepSeek Harness — everything is a plugin', en: 'DeepSeek harness — everything is a plugin'},
        summary: {'pt-BR': 'Engenharia reversa do harness da DeepSeek, em que cada parte entra como plugin.', en: 'Reverse engineering of the DeepSeek harness, where every part is a plugin.'},
      },
    ],
  },
  {
    id: 'contexto',
    title: {'pt-BR': 'Contexto, memória e skills', en: 'Context, memory, and skills'},
    summary: {'pt-BR': 'Tokens, memória persistente, wiki e skills como contrato de execução.', en: 'Tokens, persistent memory, a wiki, and skills as an execution contract.'},
    trails: [
      {
        slug: 'trilha-tokenforge-reducao-tokens-agentes',
        href: '/trilhas/trilha-tokenforge-reducao-tokens-agentes/',
        version: null,
        date: null,
        level: null,
        duration: null,
        title: {'pt-BR': 'TokenForge — redução de tokens para agentes', en: 'TokenForge — token reduction for agents'},
        summary: {'pt-BR': 'Reconstruir RTK, Headroom e uma plataforma de redução de tokens para agentes.', en: 'Rebuild RTK, Headroom, and a token-reduction platform for agents.'},
      },
      {
        slug: 'token-compression-economy-llm',
        href: '/trilhas/token-compression-economy-llm/',
        version: null,
        date: null,
        level: {'pt-BR': 'Avançado', en: 'Advanced'},
        duration: {'pt-BR': '9 estações', en: '9 stations'},
        title: {'pt-BR': 'Compressão e economia de tokens', en: 'Token compression and cost'},
        summary: {'pt-BR': 'Mapa de RTK, Headroom, Caveman, LLMLingua, cache de prompt e compressão de modelo.', en: 'A map of RTK, Headroom, Caveman, LLMLingua, prompt cache, and model compression.'},
      },
      {
        slug: 'trilha-profissional-wiki-memory-agentes',
        href: '/trilhas/trilha-profissional-wiki-memory-agentes/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '72 estações', en: '72 stations'},
        title: {'pt-BR': 'Wiki e memória para agentes', en: 'Wiki and memory for agents'},
        summary: {'pt-BR': 'Wiki e memória persistente como infraestrutura de conhecimento para agentes.', en: 'A wiki and persistent memory as knowledge infrastructure for agents.'},
      },
      {
        slug: 'trilha-mattpocock-skills-completa',
        href: '/trilhas/trilha-mattpocock-skills-completa/',
        version: null,
        date: null,
        level: null,
        duration: null,
        title: {'pt-BR': 'mattpocock/skills', en: 'mattpocock/skills'},
        summary: {'pt-BR': 'Engenharia reversa e uso do mattpocock/skills: router, spec, TDD e review.', en: 'Reverse engineering and use of mattpocock/skills: router, spec, TDD, and review.'},
      },
    ],
  },
  {
    id: 'workflow',
    title: {'pt-BR': 'Workflow e integração', en: 'Workflow and integration'},
    summary: {'pt-BR': 'Ambiente de trabalho com agentes: terminal, workbench e o fluxo com Devin CLI.', en: 'The working environment for agents: terminal, workbench, and the Devin CLI flow.'},
    trails: [
      {
        slug: 'trilha-workflow-terminal-first-agentes-ia',
        href: '/trilhas/trilha-workflow-terminal-first-agentes-ia/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '19 estações', en: '19 stations'},
        title: {'pt-BR': 'Workflow terminal-first com agentes', en: 'Terminal-first workflow with agents'},
        summary: {'pt-BR': 'Ambiente terminal-first para desenvolver com agentes de IA.', en: 'A terminal-first environment for building with AI agents.'},
      },
      {
        slug: 'trilha-pratica-ai-engineering-workbench',
        href: '/trilhas/trilha-pratica-ai-engineering-workbench/',
        version: null,
        date: null,
        level: {'pt-BR': 'Avançado', en: 'Advanced'},
        duration: {'pt-BR': '10 estações', en: '10 stations'},
        title: {'pt-BR': 'AI engineering workbench', en: 'AI engineering workbench'},
        summary: {'pt-BR': 'Um workbench prático, do zero a um pull request validado.', en: 'A practical workbench, from zero to a validated pull request.'},
      },
      {
        slug: 'workflow-devin-cli',
        href: '/trilhas/workflow-devin-cli/',
        version: 'v8',
        date: '2026-11-14',
        level: {'pt-BR': 'Do zero ao avançado', en: 'Beginner to advanced'},
        duration: {'pt-BR': '185 min · 8 passos', en: '185 min · 8 steps'},
        title: {'pt-BR': 'Workflow de desenvolvimento com Devin CLI', en: 'Development workflow with Devin CLI'},
        summary: {'pt-BR': 'Instalar o CLI, um ciclo de planejar, implementar com permissão, revisar o diff e testar, versionar regras e uma skill, retomar a sessão e decidir o handoff para o Devin Cloud.', en: 'Install the CLI, one cycle of plan, permissioned implementation, diff review, and tests, version rules and a skill, resume the session, and decide a Devin Cloud handoff.'},
      },
    ],
  },
  {
    id: 'seguranca',
    title: {'pt-BR': 'Segurança e isolamento', en: 'Security and isolation'},
    summary: {'pt-BR': 'Threat model, sandbox e isolamento de agentes, do processo até a frota.', en: 'Threat model, sandboxing, and agent isolation, from a process to a fleet.'},
    trails: [
      {
        slug: 'ai-jail-avancado-isolamento-para-agentes',
        href: '/trilhas/ai-jail-avancado-isolamento-para-agentes/',
        version: null,
        date: null,
        level: {'pt-BR': 'Avançado', en: 'Advanced'},
        duration: {'pt-BR': '7 estações', en: '7 stations'},
        title: {'pt-BR': 'AI Jail avançado', en: 'Advanced AI Jail'},
        summary: {'pt-BR': 'Isolamento de agentes em produção: Firecracker, gVisor e sandbox no Kubernetes.', en: 'Production isolation for agents: Firecracker, gVisor, and a Kubernetes sandbox.'},
      },
      {
        slug: 'trilha-agent-sandbox-cloud-do-fork-a-frota',
        href: '/trilhas/trilha-agent-sandbox-cloud-do-fork-a-frota/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '32 estações', en: '32 stations'},
        title: {'pt-BR': 'Agent sandbox cloud, do fork() à frota', en: 'Agent sandbox cloud, from fork() to a fleet'},
        summary: {'pt-BR': 'Do processo isolado a uma frota de sandboxes, com rede, identidade e custo.', en: 'From an isolated process to a sandbox fleet, with network, identity, and cost.'},
      },
      {
        slug: 'trilha-engenharia-sandboxes-seguros-agentes-ia',
        href: '/trilhas/trilha-engenharia-sandboxes-seguros-agentes-ia/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '32 estações', en: '32 stations'},
        title: {'pt-BR': 'Sandboxes seguros para agentes', en: 'Secure sandboxes for agents'},
        summary: {'pt-BR': 'Namespaces, cgroups, gVisor, Kata e Firecracker como fronteira do agente.', en: 'Namespaces, cgroups, gVisor, Kata, and Firecracker as the agent\'s boundary.'},
      },
    ],
  },
  {
    id: 'infra',
    title: {'pt-BR': 'Infraestrutura e escala', en: 'Infrastructure and scale'},
    summary: {'pt-BR': 'EKS e canais em tempo real: o que sustenta o serviço quando o tráfego cresce.', en: 'EKS and realtime channels: what holds the service when traffic grows.'},
    trails: [
      {
        slug: 'eks-cluster-servicos-avancado',
        href: '/trilhas/eks-cluster-servicos-avancado/',
        version: null,
        date: null,
        level: {'pt-BR': 'Avançado', en: 'Advanced'},
        duration: {'pt-BR': '8 estações', en: '8 stations'},
        title: {'pt-BR': 'Serviços de produção em um cluster EKS', en: 'Production services on an EKS cluster'},
        summary: {'pt-BR': 'IaC, Helm, IAM, rede, observabilidade, autoscaling e rollout num cluster EKS.', en: 'IaC, Helm, IAM, networking, observability, autoscaling, and rollout on an EKS cluster.'},
      },
      {
        slug: 'sse-websocket-larga-escala',
        href: '/trilhas/sse-websocket-larga-escala/',
        version: null,
        date: null,
        level: {'pt-BR': 'Avançado', en: 'Advanced'},
        duration: {'pt-BR': '10 estações', en: '10 stations'},
        title: {'pt-BR': 'SSE e WebSocket em larga escala', en: 'SSE and WebSocket at scale'},
        summary: {'pt-BR': 'Canais em tempo real, do browser até a API, sem transformar o servidor em banco de estado.', en: 'Realtime channels, from the browser to the API, without making the server the state store.'},
      },
    ],
  },
  {
    id: 'reversa',
    title: {'pt-BR': 'Engenharia reversa e projetos', en: 'Reverse engineering and projects'},
    summary: {'pt-BR': 'Investigar um sistema existente e reconstruí-lo com critério de produção.', en: 'Investigate an existing system and rebuild it to a production bar.'},
    trails: [
      {
        slug: 'openwiki-engenharia-reversa-trilha',
        href: '/trilhas/openwiki-engenharia-reversa-trilha/',
        version: null,
        date: null,
        level: {'pt-BR': 'Avançado', en: 'Advanced'},
        duration: {'pt-BR': '26 estações', en: '26 stations'},
        title: {'pt-BR': 'Engenharia reversa do OpenWiki', en: 'OpenWiki reverse engineering'},
        summary: {'pt-BR': 'Ler o OpenWiki e reconstruir a ferramenta, estação por estação.', en: 'Read OpenWiki and rebuild the tool, station by station.'},
      },
      {
        slug: 'trilha-engenharia-migracoes-agentes-ia-offline',
        href: '/trilhas/trilha-engenharia-migracoes-agentes-ia-offline/',
        version: null,
        date: null,
        level: {'pt-BR': 'Avançado', en: 'Advanced'},
        duration: {'pt-BR': '25 estações', en: '25 stations'},
        title: {'pt-BR': 'Migrações com agentes de IA', en: 'Migrations with AI agents'},
        summary: {'pt-BR': 'Uma migration factory com agentes, validadores determinísticos e rollout progressivo.', en: 'A migration factory with agents, deterministic validators, and progressive rollout.'},
      },
    ],
  },
  {
    id: 'ecossistema',
    title: {'pt-BR': 'Ecossistema mestre', en: 'Master ecosystem'},
    summary: {'pt-BR': 'Fechamento: engenharia, cloud e agentes no mesmo percurso, com gates.', en: 'The close: engineering, cloud, and agents on one path, with gates.'},
    trails: [
      {
        slug: 'ecossistema-mestre-engenharia-cloud-agentes-ia-enhanced',
        href: '/trilhas/ecossistema-mestre-engenharia-cloud-agentes-ia-enhanced/',
        version: null,
        date: '2026-07-23',
        level: null,
        duration: {'pt-BR': '74 estações', en: '74 stations'},
        title: {'pt-BR': 'Ecossistema mestre de engenharia, cloud e agentes', en: 'Master ecosystem of engineering, cloud, and agents'},
        summary: {'pt-BR': 'Síntese das trilhas anteriores: 74 estações, gates e projetos finais. Atualização de 23 jul 2026.', en: 'A synthesis of the earlier trails: 74 stations, gates, and final projects. Updated 23 Jul 2026.'},
      },
      {
        slug: 'ai-native-hybrid-organization-architect-with-resources',
        href: '/trilhas/ai-native-hybrid-organization-architect-with-resources/',
        version: null,
        date: null,
        level: null,
        duration: {'pt-BR': '26 estações', en: '26 stations'},
        title: {'pt-BR': 'Organização híbrida AI-native', en: 'AI-native hybrid organization'},
        summary: {'pt-BR': 'Desenhar e operar uma organização de engenharia com pessoas e agentes.', en: 'Design and operate an engineering organization with people and agents.'},
      },
    ],
  },
];

export const trailCount = trailThemes.reduce((sum, theme) => sum + theme.trails.length, 0);
