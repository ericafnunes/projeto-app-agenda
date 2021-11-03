import './styles.css';
import imagem from '../../assets/Imagem Direita.png';

function Cadastro({ localName, setLocalName }) {
  return (
    <div className="div-cadastro">
      <form>
        <h1>
          Cadastre-se
        </h1>
        <label>
          <input placeholder="Nome" onChange={(event) => setLocalName(event.target.value)} value={localName}></input>
          <input placeholder="Email"></input>
          <input placeholder="Senha"></input>
        </label>
        <button>CADASTRAR</button>
        <button>CANCELAR</button>
      </form>
      <div>
        <img src={imagem} alt="imagem" />
      </div>
    </div>
  );
}

export default Cadastro;
