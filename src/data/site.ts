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
  repoLabel?: Copy;
  title: Copy;
  summary: Copy;
}[] = [
  {
    id: 'ai-first-playbook',
    version: 'v0.4',
    date: '2026-11-14',
    href: '/tutoriais/ai-first-playbook',
    repo: 'https://github.com/Josemalyson/ai-first-playbook',
    repoLabel: {
      'pt-BR': 'Repositório e PDF',
      en: 'Repository and PDF',
    },
    title: {
      'pt-BR': 'IA First Engineering — Playbook',
      en: 'AI-First Engineering — Playbook',
    },
    summary: {
      'pt-BR':
        'Contrato de mudança, harness de execução e plano de controle. 29 passos, do 00 ao 28, com o loop de guardrail e pre-commit. Versão v0.4, 14 nov 2026.',
      en: 'Change contract, execution harness, and control plane. 29 steps, 00 through 28, with the guardrail and pre-commit loop. Version v0.4, 14 Nov 2026. The full text is in Portuguese.',
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

/**
 * Third-party tools used here. These are not projects of this site.
 * Link the upstream repository, and name the author.
 */
export const references: {
  name: string;
  href: string;
  author: string;
  why: Copy;
}[] = [
  {
    name: 'ai-usagebar',
    href: 'https://github.com/akitaonrails/ai-usagebar',
    author: 'Fabio Akita',
    why: {
      'pt-BR':
        'Widget em Rust para Waybar, o painel Omarchy e um TUI. Mostra a cota dos planos de Claude, Codex, Copilot, OpenRouter e outros provedores.',
      en: 'Rust widget for Waybar, the Omarchy panel, and a TUI. Shows plan quota for Claude, Codex, Copilot, OpenRouter, and other providers.',
    },
  },
  {
    name: 'ai-memory',
    href: 'https://github.com/akitaonrails/ai-memory',
    author: 'Fabio Akita',
    why: {
      'pt-BR':
        'Memória de longo prazo para CLIs de agentes de código. Permite continuar o mesmo trabalho em outro agente sem reexplicar o contexto.',
      en: 'Long-term memory for coding-agent CLIs. The same work can continue in another agent without restating the context.',
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
