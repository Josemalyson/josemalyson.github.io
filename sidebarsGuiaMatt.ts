import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mattSidebar: [
    {
      type: 'category',
      label: 'Guia de bolso',
      collapsed: false,
      items: ['introducao', 'escolha-a-rota', 'regras'],
    },
    {
      type: 'category',
      label: 'Workflows',
      collapsed: false,
      items: [
          'workflows/fluxo-principal-idea-ate-entrega',
          'workflows/mudanca-pequena-sem-spec',
          'workflows/esforco-grande-mapa-primeiro',
          'workflows/build-paralelo-de-uma-spec-inteira',
          'workflows/trabalho-que-chegou-de-fora',
          'workflows/revisao-periodica-de-arquitetura',
          'workflows/bug-dificil',
          'workflows/standalones-prototipo-pesquisa-e-decisao',
          'workflows/a-resposta-esta-com-outra-pessoa',
          'workflows/sessao-pesada-ou-troca-de-contexto',
          'workflows/aprender-um-tema',
          'workflows/fechamento-de-pr',
          'workflows/passo-que-so-um-humano-executa',
          'workflows/pesquisa-em-background-enquanto-voce-segue',
          'workflows/nao-entendi-a-resposta-do-agente',
          'workflows/retro-devolve-aprendizado-para-as-instrucoes',
          'workflows/pre-requisito'
      ],
    },
    {
      type: 'category',
      label: 'Skills',
      collapsed: false,
      items: [
        'skills/getting-started',
        'skills/the-main-flow',
        'skills/shaping',
        'skills/engineering',
        'skills/productivity',
        'skills/reference',
        'skills/em-progresso',
      ],
    },
    {
      type: 'category',
      label: 'Referências',
      items: ['camada-abaixo', 'referencias'],
    },
  ],
};

export default sidebars;
