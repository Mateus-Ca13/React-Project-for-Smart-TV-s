## 📁 Estrutura de Pastas → 

- public → Arquivos servidos diretamente ao HTML (imagens estáticas, favicon, etc.).
- assets → Arquivos estáticos, imagens e ícones usados em componentes.
- components → Componentes React.
- contexts → Contextos globais da aplicação.
- hooks → Hooks personalizados utilizados pela aplicação.
- keyPressHandlers → Funções reativas ao controle de navegação das interfaces  da aplicação.
- pages → Interfaces da aplicação.
- layouts → Componentes wrappers e de layout para a aplicação.

## 🎛️  Fluxo de processos da aplicação → 

# 1. Interfaces (pages)
- Cada interface da aplicação possui seu próprio escopo de navegação. Na criação de uma interface chamamos o hook useNavigationHandler, passando a função de controle de navegação respectiva à interface como parametro do hook. Ex:

`useNavigationHandler(HomePageHandler)`

# 2. Hooks
- O hook useNavigationHandler é acionado na criação de uma interface e persiste até o final do ciclo de vida do componente. Em sua chamada, criamos um eventListener que aciona uma função de controle de navegação, que é definida pela função passada nos parâmetros do hook. 

# 3. KeyPressHandlers
- Essas funções, que são passadas como parâmetro pro hook useNavigationHandler, recebem padronizadamente 4 parâmetros:

→ key (nome da tecla selecionada).
→ focusedElement (elemento selecionado no momento).
→ setFocusedElement (para definir o selectable que irá ser selecionado).
→ selectablesList (lista de selecionáveis disponíveis na interface ativa).

# 4. Componentes <Selectable/>
- Ao criar uma interface, definimos elementos do HTML que poderão ser acessados pelas KeyPressHandlers com o uso do componente <Selectable>.
Ele deve possuir as seguintes props:
→ id: string para indeitifcação futura
→ children: conteúdo que será selecionável
→ initial (opcional): define que ele será selecionado como padrão dentro da interface atual.
Ex:

`<Selectable initial id={"reset_button"}><button></button></Selectable>`

- Ao invocarmos esse componente, ele é passado para o método global "configureAsSelectable" como um objeto com estrutura { id: id, ref: elementoHTML }.
Dessa forma, ele automaticamente será adicionado ao selectablesList no contexto global.

# 4. Contextos globais
- A aplicação conta com um contexto global navigationContext, possui os seguintes estados e métodos

→ `[focusedElement, setFocusedElement]` - Elemento Selectable que está em foco.
→ `[selectablesList, setSelectablesList]` - Hashmap de elementos Selectable disponíveis. 
→ `[keyHandler, setKeyHandler]` - Função que fará a lógica de seleção dos botões dentro de uma interface
→ `configureAsSelectable(ref)` - Através do componente <Selectable/>, recebe um objeto de estrutura { id: id, ref: elementoHTML } e adiciona ao state selectablesList.
→ `setInitialFocus(ref)` - Define um elemento como focado ao renderizar uma nova interface
→ `resetNavigationState()` - reseta as informações de focusedElement e selectablesList.

- O resetNavigationState() do navigationContext reseta a selectableList e o focusedElement dentro do <NavigationControllerWrapper/>
