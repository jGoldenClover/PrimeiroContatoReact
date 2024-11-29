import { useState } from "react";

function Form() {
  function cadastrarUsuarios(e) {
    // "e" é a mesma coisa que "event"
    e.preventDefault();

    console.log(`Usuario cadastrado! \n ${name} , ${password}`);
  }

  const [name, setName] = useState("Matheus");
//   A função useState basicamente serve para definir o valor de uma variavel dentro do código, aqui por exemplo eu dou o nome da váriavel e logo em seguida eu defino o comando que eu vou usar para mudar o nome desta variável (name e setName)

//   Assim, logo abaixo eu defino (setName) que o nome (name) terá o valor que for digitado dentro do input, e isso só irá acontecer depois que algo mudar (onChange) , neste caso, a mudança ocorre por conta do onSubmit do Form

//   No entanto, eu posso definir um valor padrão para o useState(), basta colocar um valor dentro do parâmetro:
//   useState('Matheus'), assim se eu definir o input com o valor da variável (name) , assim que eu carregar a página no input aparecerá esse valor, é o que o Instagram assim que eu entro na página de login o meu email está lá salvo, afinal ele definiu o valor daquela variável na primeira vez que eu digitei o valor e guardou ela.

    const [password, setPassword] = useState();

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuarios}>
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" id="name" placeholder="Nome:"
            value={name}
            onChange={
              (e) => setName(e.target.value)
              // essa função do evento basicamente pega o valor que eu digite no input "name"
            }
          ></input>
        </div>

        <div>
          <label htmlFor="password"></label>
          <input type="password" name="password" id="password"placeholder="Password:"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <input type="submit" value="Cadastrar"></input>
        </div>
      </form>
    </>
  );
}

export default Form;
