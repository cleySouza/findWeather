# FindWeather

**FindWeather** é um aplicativo React Native que permite ao usuário buscar o clima de diferentes cidades ao redor do mundo. O app utiliza a Fetch API para buscar dados meteorológicos e exibe as informações de forma simples e intuitiva. Ele armazena dados de pesquisa e o estado de abertura do app para oferecer uma experiência personalizada e fluida.

<div style="display: flex; flex-direction: row; gap: 20px;">
    <img src="./assets/iOS.gif" width="300">
    <img src="./assets/Android.gif" width="300">
</div>

## Tecnologias Usadas

- **React Native 0.77**: Framework para o desenvolvimento de aplicativos móveis.
- **Fetch API**: Para fazer requisições HTTP e buscar os dados de clima.
- **React Navigation v7**: Para navegar entre as telas do app.
- **React Native Vector Icons**: Para ícones customizados no app.
- **dotenv**: Para gerenciar variáveis de ambiente de forma segura.
- **useContext**: Para gerenciar o estado global do aplicativo, compartilhando dados entre os componentes.
- **MMKV Storage v3.2**: Para armazenar dados localmente, como se o app foi aberto pela primeira vez, o texto da cidade e os dados da pesquisa.
- **NodeJS v22.13.0**
## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/cleySouza/findWeather.git
    ```

2. **Navegue até o diretório do projeto**:

    ```bash
    cd findWeather
    ```

3. **Instale as dependências**:

    ```bash
    npm install
    ```

4. **Instale as dependências nativas (caso seja necessário)**:

    ```bash
    npx pod-install ios
    ```

5. **Crie um arquivo `.env` na raiz do projeto e adicione a variável de ambiente com a chave da API de clima**:

    ```dotenv
    API_KEY=your_api_key_here
    ```

6. **Agora você pode rodar o aplicativo em seu emulador ou dispositivo**:

    - Para **iOS**:

    ```bash
    npx react-native run-ios
    ```

    - Para **Android**:

    ```bash
    npx react-native run-android
    ```

## Funcionalidades

- **Busca de Clima**: O usuário pode buscar o clima de qualquer cidade utilizando a Fetch API para obter os dados meteorológicos.
- **Persistência de Dados**: Utilizando o MMKV, o app armazena:
    - Se o aplicativo foi aberto pela primeira vez.
    - O texto da última cidade pesquisada.
    - Os dados do clima da última pesquisa.
- **Navegação entre telas**: O app utiliza React Navigation para navegar entre as telas de busca e detalhes do clima.
- **Ícones Personalizados**: O app utiliza o React Native Vector Icons para exibir ícones de clima, tornando a interface mais atrativa.

### Detalhamento das pastas

- **`@types/`**: Contém os tipos e definições personalizadas do TypeScript, garantindo a tipagem forte em todo o projeto.
- **`assets/`**: Armazena os recursos estáticos do app, como imagens, ícones, fontes e outros arquivos de mídia.
- **`components/`**: Componentes reutilizáveis do app. A subpasta `app/` contém componentes principais, enquanto `core/` inclui componentes auxiliares e de suporte.
- **`hooks/`**: Hooks personalizados para lógica reutilizável em várias partes do app.
- **`router/`**: Arquivos de configuração de navegação, utilizando o React Navigation para controlar as telas e rotas do app.
- **`screens/`**: Contém as telas principais do aplicativo (como a tela de busca de cidade e detalhes do clima).
- **`service/`**: Contém funções e lógica para fazer requisições para APIs externas e manipular os dados recebidos.
- **`theme/`**: Configurações globais de UI, como cores, fontes e estilos, que são aplicados em todo o app.
- **`utils/`**: Funções utilitárias para tarefas comuns e repetitivas em várias partes do código.

---

Essa estrutura harmonizada facilita o entendimento de como o projeto está organizado, além de ser prática para escalabilidade e manutenção no futuro. 😊


## Como Funciona

1. **Tela de Busca de Cidade**:
    - O usuário insere o nome de uma cidade e o app faz uma requisição à API de clima.
    - A resposta da API é processada e exibida na tela com detalhes do clima, como temperatura, umidade e previsão.

2. **Persistência de Dados**:
    - Ao pesquisar uma cidade, o app armazena o nome da cidade e os dados do clima utilizando o MMKV. Isso permite que a pesquisa seja persistente entre as sessões.
    - Além disso, o app verifica se é a primeira vez que está sendo aberto e exibe um tutorial ou mensagem de boas-vindas.

3. **Navegação**:
    - O app tem uma navegação simples entre a tela inicial de busca e uma tela de detalhes para mostrar as informações do clima.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga os seguintes passos:

1. **Faça um fork deste repositório**.
2. **Crie uma branch para a sua feature** (`git checkout -b feature/nome-da-feature`).
3. **Faça o commit das suas mudanças** (`git commit -m 'Add new feature'`).
4. **Envie para o repositório remoto** (`git push origin feature/nome-da-feature`).
5. **Abra um Pull Request**.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Se você tiver dúvidas ou sugestões, fique à vontade para abrir uma issue ou mandar uma mensagem!

---
