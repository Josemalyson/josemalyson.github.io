import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  bmadSidebar: [
    {
      type: 'category',
      label: 'Guia de bolso',
      collapsed: false,
      items: ['introducao', 'como-invocar', 'caso-de-exemplo', 'gates', 'arvore'],
    },
    {
      type: 'category',
      label: 'Passo a passo',
      collapsed: false,
      items: [
        { type: 'category', label: 'Setup', items: ['passo-00', 'passo-01', 'passo-02', 'passo-03', 'passo-04', 'passo-05', 'passo-06', 'passo-07'] },
        { type: 'category', label: 'Guardrails e pre-commit loop', items: ['passo-08', 'passo-09', 'passo-10', 'passo-20'] },
        { type: 'category', label: 'Discovery', items: ['passo-11'] },
        { type: 'category', label: 'Spec', items: ['passo-12', 'passo-13', 'passo-14'] },
        { type: 'category', label: 'Decomposição', items: ['passo-15', 'passo-16', 'passo-17', 'passo-18'] },
        { type: 'category', label: 'Implementação', items: ['passo-19'] },
        { type: 'category', label: 'Verificação', items: ['passo-21', 'passo-22', 'passo-23', 'passo-24'] },
        { type: 'category', label: 'Entrega', items: ['passo-25', 'passo-26', 'passo-27'] },
        { type: 'category', label: 'Fechamento', items: ['passo-28', 'outros-fluxos', 'bmad-loop'] },
      ],
    },
    {
      type: 'category',
      label: 'Referências',
      items: ['referencias'],
    },
  ],
};

export default sidebars;
