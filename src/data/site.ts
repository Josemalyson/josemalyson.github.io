export type Locale = 'pt-BR' | 'en';

export type Copy = Record<Locale, string>;

export function text(copy: Copy, locale: string): string {
  return locale === 'en' ? copy.en : copy['pt-BR'];
}

export function formatDate(iso: string, locale: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export const headline: Copy = {
  'pt-BR': 'Staff Engineer · AI-First engineering, Cloud e plataforma',
  en: 'Staff Engineer · AI-First engineering, Cloud & platform',
};

export const heroLead: Copy = {
  'pt-BR':
    'Tutoriais com versão, trilhas executáveis e repositórios. Projeto e consultoria entram por uma conversa no LinkedIn.',
  en: 'Versioned tutorials, runnable learning trails, and repositories. Project and consulting work starts with a LinkedIn conversation.',
};

export const areas: {title: Copy; body: Copy}[] = [
  {
    title: {
      'pt-BR': 'Squads AI-First com guardrails',
      en: 'AI-First squads with guardrails',
    },
    body: {
      'pt-BR':
        'Processo, agentes e quality gates no mesmo fluxo: spec versionada, execução com limite e verificação fora da confiança do agente.',
      en: 'Process, agents, and quality gates in one flow: a versioned spec, bounded execution, and verification outside the agent’s trust.',
    },
  },
  {
    title: {
      'pt-BR': 'Arquitetura Cloud e plataforma',
      en: 'Cloud and platform architecture',
    },
    body: {
      'pt-BR':
        'AWS, EKS, Terraform e ArgoCD como plataforma. A mudança sai por pipeline, com dono e rollback, sem acesso direto ao ambiente.',
      en: 'AWS, EKS, Terraform, and ArgoCD as a platform. Change leaves through a pipeline, with an owner and a rollback, without direct environment access.',
    },
  },
  {
    title: {
      'pt-BR': 'GenAI em produção',
      en: 'GenAI in production',
    },
    body: {
      'pt-BR':
        'RAG, agentes e observabilidade de IA: o que entra no contexto, o que o agente pode chamar e como cada execução fica correlacionada.',
      en: 'RAG, agents, and AI observability: what enters the context, what the agent may call, and how each run stays correlated.',
    },
  },
];

/**
 * Tutorial cards. To add one, append an object here.
 * `href` is the reading URL (internal path or absolute). `repo` is optional.
 * `version` is the version string published on that artifact (omit with null if it has none).
 * `date` is YYYY-MM-DD.
 */
export const tutorials: {
  id: string;
  version: string | null;
  date: string;
  href: string;
  repo: string | null;
  title: Copy;
  summary: Copy;
}[] = [
  {
    id: 'ai-first-playbook',
    version: '0.4',
    date: '2026-11-14',
    href: 'https://josemalyson.github.io/ai-first-playbook/',
    repo: 'https://github.com/Josemalyson/ai-first-playbook',
    title: {
      'pt-BR': 'IA First Engineering — Playbook',
      en: 'AI-First Engineering — Playbook',
    },
    summary: {
      'pt-BR':
        'Contrato de mudança, harness de execução e plano de controle. Gates humanos, DoR/DoD e o fluxo intenção → spec → verificação. Versão 0.4 lida no site em 14 nov 2026.',
      en: 'Change contract, execution harness, and control plane. Human gates, DoR/DoD, and the intention → spec → verification flow. Version 0.4 read from the site on Nov 14, 2026.',
    },
  },
  {
    id: 'bedrock',
    version: null,
    date: '2024-03-20',
    href: '/docs/aws/bedrock',
    repo: null,
    title: {
      'pt-BR': 'Amazon Bedrock',
      en: 'Amazon Bedrock',
    },
    summary: {
      'pt-BR':
        'Artigo de 20 mar 2024: foundation models, parâmetros de inferência, embeddings, vector databases, RAG e fine-tuning.',
      en: 'Article from Mar 20, 2024: foundation models, inference parameters, embeddings, vector databases, RAG, and fine-tuning.',
    },
  },
];

export const projects: {
  name: string;
  href: string;
  version: string | null;
  why: Copy;
}[] = [
  {
    name: 'custom-skills',
    href: 'https://github.com/Josemalyson/custom-skills',
    version: null,
    why: {
      'pt-BR':
        'Cinco skills para agentes de código, cada uma com workflow e referências. Inclui pre-commit-quality-gate, que lê o stack do repositório e gera um pipeline de pre-commit em 14 passos.',
      en: 'Five skills for coding agents, each with a workflow and references. Includes pre-commit-quality-gate, which reads the repo stack and generates a 14-step pre-commit pipeline.',
    },
  },
  {
    name: 'ai-usagebar',
    href: 'https://github.com/Josemalyson/ai-usagebar',
    version: null,
    why: {
      'pt-BR':
        'Widget em Rust para Waybar, painel Omarchy e TUI. Mostra cota e créditos de Claude, Codex, Copilot, OpenRouter e outros provedores. Começou como port do claudebar.',
      en: 'Rust widget for Waybar, the Omarchy panel, and a TUI. Shows quota and credits for Claude, Codex, Copilot, OpenRouter, and other providers. Started as a port of claudebar.',
    },
  },
  {
    name: 'hes',
    href: 'https://github.com/Josemalyson/hes',
    version: 'v3.5.0',
    why: {
      'pt-BR':
        'Harness que trava o agente em fases com gate: ZERO, DISCOVERY, SPEC, DESIGN, DATA, RED, GREEN, SECURITY, REVIEW, DONE. A fase seguinte não abre sem o gate da anterior.',
      en: 'Harness that locks the agent into gated phases: ZERO, DISCOVERY, SPEC, DESIGN, DATA, RED, GREEN, SECURITY, REVIEW, DONE. The next phase does not open without the previous gate.',
    },
  },
];

export const methodSteps: {title: Copy; body: Copy}[] = [
  {
    title: {'pt-BR': 'Diagnóstico', en: 'Diagnosis'},
    body: {
      'pt-BR':
        'Mapear o fluxo que existe hoje: quem aprova, onde o agente age e qual evidência falta.',
      en: 'Map the flow that exists today: who approves, where the agent acts, and which evidence is missing.',
    },
  },
  {
    title: {'pt-BR': 'Piloto com uma squad', en: 'Pilot with one squad'},
    body: {
      'pt-BR':
        'Um fluxo fechado com uma squad: intenção, spec, execução limitada e verificação.',
      en: 'One closed flow with a single squad: intention, spec, bounded execution, and verification.',
    },
  },
  {
    title: {'pt-BR': 'Playbook', en: 'Playbook'},
    body: {
      'pt-BR':
        'O que passou no piloto vira passo reproduzível, com versão e data.',
      en: 'What survived the pilot becomes a reproducible step, with a version and a date.',
    },
  },
  {
    title: {'pt-BR': 'Escala', en: 'Scale'},
    body: {
      'pt-BR':
        'O mesmo loop em outras squads. O que quebra volta como guardrail na retro, não como exceção silenciosa.',
      en: 'The same loop on other squads. What breaks comes back as a guardrail in the retro, not as a silent exception.',
    },
  },
];

export const methodNote: Copy = {
  'pt-BR':
    'O método é o loop guardrail + retro. Cada execução deixa evidência (teste, review, policy). O que falha vira regra no ciclo seguinte.',
  en: 'The method is the guardrail + retro loop. Each run leaves evidence (test, review, policy). What fails becomes a rule on the next cycle.',
};

/**
 * Learning trails. To add one:
 * 1. Put the lab HTML at static/trilhas/<slug>/index.html (self-contained; no private paths).
 * 2. Append an object here. `href` must match that static path.
 * The index page and the home page both read this list.
 */
export const trails: {
  slug: string;
  href: string;
  version: string;
  date: string;
  level: Copy;
  duration: Copy;
  title: Copy;
  summary: Copy;
}[] = [
  {
    slug: 'workflow-devin-cli',
    href: '/trilhas/workflow-devin-cli/',
    version: 'v8',
    date: '2026-11-14',
    level: {
      'pt-BR': 'Do zero ao avançado',
      en: 'Beginner to advanced',
    },
    duration: {
      'pt-BR': '185 min · 8 passos',
      en: '185 min · 8 steps',
    },
    title: {
      'pt-BR': 'Workflow de desenvolvimento com Devin CLI',
      en: 'Development workflow with Devin CLI',
    },
    summary: {
      'pt-BR':
        'Lab no navegador: instalar e autenticar o CLI, um ciclo de planejar, implementar com permissão, revisar o diff e rodar os testes, versionar regras e uma skill, retomar a sessão e decidir o handoff para o Devin Cloud.',
      en: 'In-browser lab: install and authenticate the CLI, one cycle of plan, permissioned implementation, diff review, and tests, version rules and a skill, resume the session, and decide a Devin Cloud handoff. The lab file is in Portuguese.',
    },
  },
];
