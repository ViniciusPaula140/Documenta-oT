---
sidebar_position: 2
---
# 2.Descrição Geral do Sistema

## 2.1 Contexto
O sistema NerdPlanet é uma plataforma de busca de filmes desenvolvida para oferecer aos usuários a capacidade de pesquisar e obter informações sobre uma ampla variedade de filmes. Os usuários poderão acessar a plataforma através de navegadores web modernos, permitindo-lhes realizar login, buscar filmes por título e visualizar informações detalhadas sobre os filmes encontrados.

## Funções do Sistema
O sistema NerdPlanet oferecerá as seguintes funcionalidades principais:
- Login de Usuário: Os usuários poderão autenticar-se no sistema através de um processo de login seguro.
- Pesquisa de Filmes: Os usuários poderão realizar pesquisas por filmes utilizando o título como critério de busca.
- Visualização de Informações de Filmes: Os usuários poderão visualizar informações detalhadas sobre os filmes encontrados, incluindo título, diretor, elenco, sinopse, avaliações, entre outros.

## 2.3 Características do Usuário
O sistema NerdPlanet destina-se a ser utilizado por usuários que possuam um interesse em filmes e desejam obter informações sobre obras cinematográficas específicas. Os usuários podem ter diferentes níveis de experiência em tecnologia, portanto a interface do usuário será projetada para ser intuitiva e de fácil utilização.

## 2.4 Restrições  

- O sistema será desenvolvido utilizando as tecnologias web JavaScript, CSS e HTML.
- O sistema será acessível somente através de navegadores web modernos que suportem as tecnologias mencionadas.
---
:::tip[Importância]

Esses requisitos não funcionais são essenciais para garantir que o projeto de busca de filmes seja eficiente, seguro, e ofereça uma ótima experiência para os usuários, ao mesmo tempo em que promove boas práticas de desenvolvimento de software e conformidade com os padrões de qualidade reconhecidos, como o CMMI MPS.Br.

:::

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```