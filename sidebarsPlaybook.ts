import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const passo = (n: number) => `tutoriais/passo-${String(n).padStart(2, '0')}`;

const sidebars: SidebarsConfig = {
  playbookSidebar: [
    {
      type: 'category',
      label: 'Introdução',
      collapsed: false,
      items: ['introducao/visao-executiva'],
    },
    {
      type: 'category',
      label: 'Fundamentos',
      collapsed: false,
      items: [
        'fundamentos/ciclos-e-gates',
        'fundamentos/time',
        'fundamentos/pilares',
        'fundamentos/ledger',
        'fundamentos/governanca',
        'fundamentos/metricas',
        'fundamentos/catalogo',
      ],
    },
    {
      type: 'category',
      label: 'Tutoriais',
      collapsed: false,
      items: [
        'tutoriais/indice',
        {
          type: 'category',
          label: 'Setup',
          items: [0, 1, 2, 3, 4, 5, 6, 7].map(passo),
        },
        {
          type: 'category',
          label: 'Guardrails e pre-commit loop',
          items: [8, 9, 10, 20].map(passo),
        },
        {
          type: 'category',
          label: 'Discovery',
          items: [11].map(passo),
        },
        {
          type: 'category',
          label: 'Spec',
          items: [12, 13, 14].map(passo),
        },
        {
          type: 'category',
          label: 'Decomposição',
          items: [15, 16, 17, 18].map(passo),
        },
        {
          type: 'category',
          label: 'Implementação',
          items: [19].map(passo),
        },
        {
          type: 'category',
          label: 'Verificação',
          items: [21, 22, 23, 24].map(passo),
        },
        {
          type: 'category',
          label: 'Entrega',
          items: [25, 26, 27].map(passo),
        },
        {
          type: 'category',
          label: 'Fechamento',
          items: [passo(28), 'tutoriais/outros-fluxos'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Referências',
      items: ['referencias/glossario', 'referencias/fontes'],
    },
  ],
};

export default sidebars;
