import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Josemalyson Oliveira',
  tagline: 'Staff Engineer · AI-First engineering, Cloud e plataforma',
  favicon: 'img/favicon.svg',
  url: 'https://josemalyson.github.io',
  baseUrl: '/',
  // GitHub Pages serves a directory index at /path/ and 301s /path to /path/.
  // A sibling path.html 404s the slash form, which is what broke /trilhas/ and
  // the other shared URLs. Every route is emitted as path/index.html.
  trailingSlash: true,
  organizationName: 'Josemalyson',
  projectName: 'josemalyson.github.io',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    localeConfigs: {
      'pt-BR': {
        label: 'Português',
        htmlLang: 'pt-BR',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        htmlLang: 'en',
        direction: 'ltr',
      },
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'playbook',
        path: 'playbook',
        routeBasePath: 'playbook/ai-first',
        sidebarPath: require.resolve('./sidebarsPlaybook.ts'),
        breadcrumbs: true,
        showLastUpdateTime: false,
        showLastUpdateAuthor: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guia-matt-pocock',
        path: 'guias/matt-pocock',
        routeBasePath: 'guias/matt-pocock',
        sidebarPath: require.resolve('./sidebarsGuiaMatt.ts'),
        breadcrumbs: true,
        showLastUpdateTime: false,
        showLastUpdateAuthor: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guia-bmad',
        path: 'guias/bmad',
        routeBasePath: 'guias/bmad',
        sidebarPath: require.resolve('./sidebarsGuiaBmad.ts'),
        breadcrumbs: true,
        showLastUpdateTime: false,
        showLastUpdateAuthor: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/tutoriais/ai-first-playbook',
            to: '/playbook/ai-first/',
          },
        ],
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: false,
          routeBasePath: 'docs',
          breadcrumbs: false,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/og.png',
    metadata: [
      {name: 'author', content: 'Josemalyson Oliveira'},
      {property: 'og:type', content: 'website'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    navbar: {
      title: 'Josemalyson Oliveira',
      logo: {
        alt: 'Josemalyson Oliveira',
        src: 'img/mark.svg',
        width: 32,
        height: 32,
      },
      items: [
        {to: '/trilhas/', label: 'Trilhas', position: 'left'},
        {to: '/videos/', label: 'Vídeos', position: 'left'},
        {
          type: 'dropdown',
          label: 'Guias de bolso',
          position: 'left',
          items: [
            {
              to: '/guias/matt-pocock/',
              label: 'Matt Pocock',
              activeBasePath: '/guias/matt-pocock/',
            },
            {
              to: '/guias/bmad/',
              label: 'BMAD',
              activeBasePath: '/guias/bmad/',
            },
          ],
        },
        {
          to: '/playbook/ai-first/',
          label: 'Playbook',
          position: 'left',
          activeBasePath: '/playbook/ai-first/',
        },
        {
          to: '/#tutoriais',
          label: 'Tutoriais',
          position: 'left',
          activeBaseRegex: 'a^',
        },
        {
          to: '/#opensource',
          label: 'Open source',
          position: 'left',
          activeBaseRegex: 'a^',
        },
        {
          to: '/#acompanhe',
          label: 'Acompanhe',
          position: 'left',
          activeBaseRegex: 'a^',
        },
        {
          href: 'https://github.com/Josemalyson',
          label: 'GitHub',
          position: 'right',
        },
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Mapa',
          items: [
            {label: 'Trilhas', to: '/trilhas/'},
            {label: 'Vídeos', to: '/videos/'},
            {label: 'Tutoriais', to: '/#tutoriais'},
            {label: 'Open source', to: '/#opensource'},
            {label: 'Playbook', to: '/playbook/ai-first/'},
            {label: 'Guia Matt Pocock', to: '/guias/matt-pocock/'},
            {label: 'Guia BMAD', to: '/guias/bmad/'},
            {label: 'Amazon Bedrock', to: '/docs/aws/bedrock/'},
          ],
        },
        {
          title: 'Acompanhe',
          items: [
            {
              label: 'Acompanhe no LinkedIn',
              href: 'https://br.linkedin.com/in/josemalysonoliveira',
            },
            {label: 'GitHub', href: 'https://github.com/Josemalyson'},
            {label: 'X', href: 'https://x.com/josemalyson'},
          ],
        },
      ],
      copyright: 'Josemalyson Oliveira',
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'python', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
