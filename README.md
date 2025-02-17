# Projeto React Vite para Smart TV's.

Este projeto representa uma estrutura base para o desenvolvimento de apliacações React Vite para Smart TV's ou qualquer outro dispositivo com controle de navegação feito a partir de controle remoto.

### O que o projeto proporciona?
Esta aplicação fornece uma estrutura sólida e escalável para a construção de aplicações React que precisem ter algum tipo de tracking em comandos por controle remoto, assim como um sistema de controle de foco. Atráves do fluxo de processos apresentado no arquivo "ARQUITETURA.md" é possível seguir a estrutura de desenvolvimento que a aplicação fornece para acelerar o processo de produção de uma aplicação para os casos mencionados. O projeto já vem com alguns componentes e interfaces para desmonstrar melhor o fluxo dos processos, mas pode ser facilmente reconstruído usando os principais recursos:

- Componente `<Selectable/>` - Para cadastro e gerenciamento de elementos selecionaveis.
- Hook `useNavigationHandler` - Para controle de navegação e delegação de reação aos event listeners.
- Contexto `navigationContext` - Para distribuição de states e métodos para toda a aplicação.

### Este projeto utiliza as bibliotecas.
- React Router (controle de interfaces da aplicação).
- Styled-Components (opcional - utilizado apenas para estilização temporária).
