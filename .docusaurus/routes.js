import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'e1d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f1f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '04d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '369'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '216'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f0a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6b9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '7a1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c03'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'f9e'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4fe'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'f1a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f6d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '006'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'fec'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '08c'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'eff'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '5d8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '8c2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '296'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fd7'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '71d'),
            routes: [
              {
                path: '/docs/Ambiente/ambientacao',
                component: ComponentCreator('/docs/Ambiente/ambientacao', '385'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/ambiente-e-modelos',
                component: ComponentCreator('/docs/category/ambiente-e-modelos', 'a56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/equipe-e-atribuições',
                component: ComponentCreator('/docs/category/equipe-e-atribuições', '6aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/interface',
                component: ComponentCreator('/docs/category/interface', '0eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/lógica-de-negócio',
                component: ComponentCreator('/docs/category/lógica-de-negócio', '2bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/requisitos',
                component: ComponentCreator('/docs/category/requisitos', 'dc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Equipe/',
                component: ComponentCreator('/docs/Equipe/', '228'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Escopo do projeto/descricaogeral',
                component: ComponentCreator('/docs/Escopo do projeto/descricaogeral', '146'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Escopo do projeto/introducao',
                component: ComponentCreator('/docs/Escopo do projeto/introducao', 'da8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Escopo do projeto/requisitos',
                component: ComponentCreator('/docs/Escopo do projeto/requisitos', '9b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Front/front-end',
                component: ComponentCreator('/docs/Front/front-end', '939'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/negocio/negocioo',
                component: ComponentCreator('/docs/negocio/negocioo', '545'),
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
    path: '/',
    component: ComponentCreator('/', '3aa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
