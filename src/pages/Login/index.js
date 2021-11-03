import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import '../Login';
import './styles.css';
import background from '../../assets/Imagem Esquerda.png';


function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  console.log(authenticated);

  const [localName, setLocalName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

  }

  // useEffect(()=> {
  //   handleLogin();
  //   // handleCreateContato();
  // });

  // async function handleCreateContato() {

  //   const body = {
  //     nome: "erica",
  //     telefone: "333333333",
  //     email: "erica@cubos.academy",
  //   }

  //   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM1NTMwMzUwLCJleHAiOjE2MzU1NTkxNTB9.CpJKkrsbElFTa0NwkW-POCtouroS2s4e7lWlZhImW4o";

  //   const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(body)
  //   });
  //   const data = await response.json();
  //   console.log(data);

  // }



  // async function handleLogin({email, senha}) {

  //   const body = {
  //     email: email,
  //     senha: senha
  //   }

    return (
      <div className="login">
        <div className="background">
          <img src={background} alt="background" />
        </div>
        <form onSubmit={handleSubmit}>
          <span>
            Bem vindo
          </span>
          <h1>Faça o login com sua conta</h1>
          <label>
            <input placeholder="Email" name="user"></input>
            <input placeholder="Senha" name="password"></input>
          </label>
          <button onClick={handleLogin}>LOGIN</button>
        </form>
      </div>
    );
  }

  export default Login;
