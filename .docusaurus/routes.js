import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/josemalyson.github.io/blog',
    component: ComponentCreator('/josemalyson.github.io/blog', '809'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/archive',
    component: ComponentCreator('/josemalyson.github.io/blog/archive', '8cc'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/first-blog-post',
    component: ComponentCreator('/josemalyson.github.io/blog/first-blog-post', '051'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/long-blog-post',
    component: ComponentCreator('/josemalyson.github.io/blog/long-blog-post', '994'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/mdx-blog-post',
    component: ComponentCreator('/josemalyson.github.io/blog/mdx-blog-post', '025'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/tags',
    component: ComponentCreator('/josemalyson.github.io/blog/tags', '763'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/tags/docusaurus',
    component: ComponentCreator('/josemalyson.github.io/blog/tags/docusaurus', 'd0f'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/tags/facebook',
    component: ComponentCreator('/josemalyson.github.io/blog/tags/facebook', 'bff'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/tags/hello',
    component: ComponentCreator('/josemalyson.github.io/blog/tags/hello', '6f6'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/tags/hola',
    component: ComponentCreator('/josemalyson.github.io/blog/tags/hola', 'faa'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/blog/welcome',
    component: ComponentCreator('/josemalyson.github.io/blog/welcome', '5b9'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/markdown-page',
    component: ComponentCreator('/josemalyson.github.io/markdown-page', '830'),
    exact: true
  },
  {
    path: '/josemalyson.github.io/docs',
    component: ComponentCreator('/josemalyson.github.io/docs', '2b6'),
    routes: [
      {
        path: '/josemalyson.github.io/docs',
        component: ComponentCreator('/josemalyson.github.io/docs', 'ef3'),
        routes: [
          {
            path: '/josemalyson.github.io/docs',
            component: ComponentCreator('/josemalyson.github.io/docs', 'aef'),
            routes: [
              {
                path: '/josemalyson.github.io/docs/category/tutorial---basics',
                component: ComponentCreator('/josemalyson.github.io/docs/category/tutorial---basics', 'aa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/category/tutorial---extras',
                component: ComponentCreator('/josemalyson.github.io/docs/category/tutorial---extras', '83f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/intro',
                component: ComponentCreator('/josemalyson.github.io/docs/intro', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/josemalyson.github.io/docs/tutorial-basics/congratulations', 'df2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/josemalyson.github.io/docs/tutorial-basics/create-a-blog-post', '33c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/josemalyson.github.io/docs/tutorial-basics/create-a-document', 'da0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/josemalyson.github.io/docs/tutorial-basics/create-a-page', '32d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/josemalyson.github.io/docs/tutorial-basics/deploy-your-site', '6e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/josemalyson.github.io/docs/tutorial-basics/markdown-features', '6da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/josemalyson.github.io/docs/tutorial-extras/manage-docs-versions', '0a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/josemalyson.github.io/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/josemalyson.github.io/docs/tutorial-extras/translate-your-site', '2f1'),
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
    path: '/josemalyson.github.io/',
    component: ComponentCreator('/josemalyson.github.io/', 'ef1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
