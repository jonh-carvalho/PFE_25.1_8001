function Usuario(props) {
    return (
      <div>
        <h2>Nome: {props.nome}</h2>
        <p>Idade: {props.idade} anos</p>
      </div>
    );
  }
  
  export default Usuario;