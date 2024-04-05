---
sidebar_position: 2
---
# Requisitos não funcionais

## O que são requisitos não funcionais
Os requisitos não funcionais são aspectos do software que não estão relacionados diretamente com suas funcionalidades, mas sim com características que definem sua qualidade, desempenho, segurança, usabilidade e outros atributos importantes

## Funcionalidades



- **Compatibilidade de Navegadores:** O site deve ser compatível com os principais navegadores da web, incluindo Chrome, Firefox, Safari e Edge, garantindo uma experiência consistente para todos os usuários.


- **Desempenho e Carregamento Rápido:** O site deve carregar rapidamente, mesmo em conexões de internet mais lentas, utilizando técnicas de otimização de desempenho, como compressão de recursos, cache e carregamento assíncrono de conteúdo.


- **Testes de qualidade:** Devem ser implementados testes automatizados utilizando ferramentas como [Browserling](https://www.browserling.com/), **VER MELHOR DEPOIS** para garantir a qualidade do código e a funcionalidade correta do site em diferentes cenários e navegadores.

- **Integração Contínua (CI) e Implantação Contínua (CD)**: Deve ser configurado um ambiente no GitHub Actions para automatizar builds, testes e deploys do projeto, garantindo a entrega contínua de novas funcionalidades e correções de bugs.

- **Padrões de Desenvolvimento e Documentação:** O código-fonte do projeto deve seguir padrões de codificação consistentes e ser devidamente documentado, facilitando a manutenção e a colaboração entre os membros da equipe de desenvolvimento.

- **Conformidade com CMMI MPS.Br:** O projeto deve adotar práticas e processos de desenvolvimento alinhados com os requisitos do [CMMI](https://learn.microsoft.com/pt-br/azure/devops/boards/work-items/guidance/cmmi/guidance-background-to-cmmi?view=azure-devops) [MPS.Br](https://promovesolucoes.com/quais-sao-os-niveis-de-maturidade-do-mps-br/#:~:text=O%20MPS%20BR%20%C3%A9%20um,as%20empresas%20brasileiras%20mais%20competitivas.), garantindo a qualidade do software e a melhoria contínua dos processos de desenvolvimento.
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