import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', 'aae'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'fcd'),
    exact: true
  },
  {
    path: '/en/blog/first-blog-post',
    component: ComponentCreator('/en/blog/first-blog-post', '366'),
    exact: true
  },
  {
    path: '/en/blog/long-blog-post',
    component: ComponentCreator('/en/blog/long-blog-post', '1a6'),
    exact: true
  },
  {
    path: '/en/blog/mdx-blog-post',
    component: ComponentCreator('/en/blog/mdx-blog-post', '5ca'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', 'c33'),
    exact: true
  },
  {
    path: '/en/blog/tags/docusaurus',
    component: ComponentCreator('/en/blog/tags/docusaurus', 'd17'),
    exact: true
  },
  {
    path: '/en/blog/tags/facebook',
    component: ComponentCreator('/en/blog/tags/facebook', '710'),
    exact: true
  },
  {
    path: '/en/blog/tags/hello',
    component: ComponentCreator('/en/blog/tags/hello', 'f5e'),
    exact: true
  },
  {
    path: '/en/blog/tags/hola',
    component: ComponentCreator('/en/blog/tags/hola', 'a5a'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', 'a8f'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', 'b84'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '0b3'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', 'd90'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', '48e'),
            routes: [
              {
                path: '/en/docs/category/tutorial---basics',
                component: ComponentCreator('/en/docs/category/tutorial---basics', '47e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/tutorial---extras',
                component: ComponentCreator('/en/docs/category/tutorial---extras', '134'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', 'fb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/en/docs/tutorial-basics/congratulations', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-blog-post', '5c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-document', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-page', '3b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/en/docs/tutorial-basics/deploy-your-site', '50b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/en/docs/tutorial-basics/markdown-features', '590'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/en/docs/tutorial-extras/manage-docs-versions', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/en/docs/tutorial-extras/translate-your-site', '7c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'f89'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
