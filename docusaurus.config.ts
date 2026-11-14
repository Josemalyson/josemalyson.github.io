import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Josemalyson Oliveira',
  tagline: 'Staff Engineer · AI-First engineering, Cloud e plataforma',
  favicon: 'img/favicon.svg',
  url: 'https://josemalyson.github.io',
  baseUrl: '/',
  trailingSlash: false,
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
        {to: '/trilhas', label: 'Trilhas', position: 'left'},
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
          to: '/#contato',
          label: 'Contato',
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
            {label: 'Trilhas', to: '/trilhas'},
            {label: 'Tutoriais', to: '/#tutoriais'},
            {label: 'Open source', to: '/#opensource'},
            {label: 'Amazon Bedrock', to: '/docs/aws/bedrock'},
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'LinkedIn',
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
