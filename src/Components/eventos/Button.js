function Button(props) {
    // Eu defino o valor do onClick como algo variável, assim, se eu for reutilizar o botão mais tarde é só definir o texto que vai aparecer e o valor da função. Essa é a magia do REACT
  return <button onClick={props.event}> 
  {props.texto} 
  </button>;
}

export default Button;
