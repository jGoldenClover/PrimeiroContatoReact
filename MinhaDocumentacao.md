# Instalação do REACT para iniciar os projetos -- npx create-react-app nome-do-projeto

## JSX é o js, mas, eu uso ele exclusivamente para encapsular um código em html. Ou seja, a gente basicamente usa ele para fazer o site que seria feito em html

## O JSX precisa que somente 1 elemento seja carregado, por isso colocamos ele dentro de uma div

## Faz parte da boa prática em programação no REACT colocar o nome dos elementos na formatação "camel" --> SeparandoPalavrasPorLetraMaiuscula

### Documentação para entender o que eu fiz :

- `Dentro de {sabedoria}` : Crio meu primeiro componente que vai ser invocado mais tarde pelo App.js

  _OBS: Eu errei: o correto seria "Sabedoria" , mas da erro quando eu tento renomear então fica sabedoria mesmo_

- `Dentro de {Texto}` : Crio outro componente, só que eu importo o componente {sabedoria} para importar os 2 de uma vez quando eu fizer isso no App.js

- `Dentro de {SayMyName}` : Eu uso os props.nomeVariavel para definir o que vai preencher aquele espaço, enquanto no App.js eu completo com o valor de nome

- `Dentro de {Pessoa}` : Eu defino varios valores da pessoa (nome , telefone , idade e etc), no entanto, ao invéz de props eu simplesmente defino como parâmetro o nome das variaveis que eu quero mudar quando invorar pelo App.js.

  Basicamente o que eu faço em orientação a objetos, eu defino os parâmetros que o usuário precisa receber e dou esses valores dentro do App.js

- `Dentro de {Item}` : Eu defino as props como de costume, no entanto eu uso a função PropTypes para definir o "valor" daquela variável (se é número,texto, e etc) , também posso definir alguns valores, como torna-la obrigatória e etc.

  Também consigo usar o PropTypes para definir um valor padrão para o item além de outras funções

  OBS: Se for definir o propTypes de um item é necessário que o primeiro "p" seja minúsculo,

  "Item.propTypes = {nomePropriedade : nomeDaImportacaoDoPropTypes.propriedade}"

  OBS2: Hoje, quando você executa o Deafult type em algum item, o próprio html me avisa que e o suporte para essa função será removido ("defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead."),

  "Item.defaultProps = {nomePropriedade : valorDefault}"

## useState() é um hook do REACT, hook é basicamente uma função que vai definir o valor/estado de uma variavel. Assim como em Java onde nós criamos um objeto para depois dar seu valor no meio do código, o Hook em REACT serve para criar um novo valor para aquilo e não necessáriamente muda-lo

- `Dentro de {Form}` : Leia atentamente o que eu escrevi na hora de explicar o useState(), sua função e forma de usar são um pouco confusas, mas lá eu explico direitinho e ainda dou um exemplo de utilização

## Faz parte da boa prática no REACT separar componentes semelhantes em pastas para não misturar componentes do APP com componentes de um botão, ou componentes de uma área específica do código

- `Dentro de {eventos/Button -- Evento}`: Eu passo 2 parâmetros como propriedade, o texto que vai aparecer na frente do botão quando eu invocar ele no APP.js, e o nome da função que eu vou invocar no "onClick". Assim, se eu quiser usar o mesmo botão outra vez, basta eu importar esse mesmo componente e mudar o texto e a função do "onClick". **Entenda isso como definir 2 componentes 1 componente pai (ele vai receber todas as informações transmitidas pelo filho -- neste caso é o Evento.js) e o componente filho, que vai passar essas informações (neste caso o evento/Button.js)**

  _OBS : Eu não uso o () para retornar, é só um atalho já que eu não vou retornar uma grande linha de código, somente 1 componente em html , eu simplesmente o retorno de uma vez._

- `Dentro de {Condicional}` : Para mostrar algo a partir de um condicional if, é necessário dentro do código do JSX, colocar as {} e então dentro delas passar a condição. O exemplo que eu uso é : {userEmail} --> _Isso verifica se o user existe/foi digitado e então, eu concateno isso com o && para o que eu quero mostrar caso a condição se satisfaça_

  _OBS : Dentro do REACT as {} no meio do código em JSX representa um fragmento de código em JS, logo, a gente usa isso para fazer condicionais, para fazer laços, para chamar variáveis e etc._

## A estrutura de if e else dentro do JSX é diferente, como explicado antes, as {} no JSX representa um código em JS, logo , para o if e outras funções, é necessário usa-la. No caso da OutraLista eu faço um if para caso a minha lista seja vazia. <span style='color:red;'> **Sua estrutura é a seguinte:** </span>

{Condição para o if ? (Código caso a condição seja satisfeita) : (Código para o else)}

_OBS : Vale ressaltar que no código anterior eu não uso o else, pois a condição só seria concluida se o email de usuario existisse, então o else é simplesmente não exibir o conteúdo!_

- `Dentro de {OutraLista}` : Ao invéz do forEach, eu uso o .map, que faz basicamente a mesma coisa, eu defino um nome para a variável que eu quero armazenar o nome de acordo com a lista e

- `Dentro de {SeuNome -- Saudacao}` : Eu basicamente uso a mesma lógica do java de Orientação a Objetos, eu defino o valor do objeto e logo em seguida eu invoco esse valor em outro lugar <span style='color:#0099ee;'> **Algo interessante de se revisar/estudar, é um conceito muito legal que eu uso lá (crio um objeto simultâneamente com o input do usuário)** </span>

# Agora eu uso um novo conceito, o REACT Router -- npm install react-router-dom :

- `Dentro de {App}` : Eu importo todos os itens necessários para poder usar o ROUTER **import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";**

  Suas funções são :

  - Router --> Vai ser o corpo do site, é nele que nós vamos colocar todo o site;
  - Routes --> Dentro de routes nós vamos colocar todos os links, obedecendo a seguinte estrutura (&lt;Routes&gt; &lt;Route/&gt; _O número de links/route pode ser quantos quiser, basta adicionar mais de um Route_ &lt;/Routes&gt;)
  - Route --&gt; Aqui são os caminhos desse link, e segue a seguinte estrutura (&lt;Route path="caminhoDaUrl" element = {elementoQueVocêVaiInvocar} /&gt;)
  - Link --&gt; A tag de Link é onde realmente a página vai estar alocada e segue a seguinte estrutura ( &lt;Link `to`="EndereçoQueVocêQuerColocarOLink"&gt;Nome Do Link &lt;/Link&gt;) -- Muito semelhante ao "a" do html


- `Dentro de {layout/footer}` : Eu uso o react-icons para trazer essas imagens bonitinhas, basicamente isso me retorna um sgv que é manipulável. Basta seguir a seguinte estrutura :

  import {Fa + nome da rede social} from 'react-icons/fa' --> se o react-icons já estiver instalado

  &lt;Fa + nome da rede social/&gt;

  _exemplo: import {FaInstagram} from 'react-icons/fa'_

  _&lt;FaInstagram/&gt;_

