import './styles.css';
import Header from '../../components/Header';
import TableHeader from './TableHeader';
import Trash from '../../assets/Icon-Trash.svg';
import Pencil from '../../assets/Icon-Pencil.svg';
import { useEffect, useState } from 'react';


function Perfil() {

  const [lista, setLista] = useState([]);


  useEffect(() => {
    listarContatos();
  }, [lista]);

  useEffect(() => {
    handleCreateContato();
  });

  async function handleCreateContato() {

    // const body = {
    //   nome: "erica",
    //   telefone: "333333333",
    //   email: "erica@cubos.academy",
    // }

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM1NTMwMzUwLCJleHAiOjE2MzU1NTkxNTB9.CpJKkrsbElFTa0NwkW-POCtouroS2s4e7lWlZhImW4o";

    // const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(body)
    // });
    // const data = await response.json();
    // console.log(data);

  }

  async function listarContatos() {
    // try {
    //   const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
    //     method: 'GET'
    //   });

    //   const data = await response.json();

    //   setLista(data);
    // } catch (error) {
    // }

  }

  return (
    <div className="contacts-list">
      <header>
        <Header />
      </header>
      <div className="table">
        <TableHeader />
      </div>
      <div className="table-body">
        <div className="table-line">
          <div className="line-items">Claudia M. Sousa</div>
          <div className="line-items">claudia@teste.com.br</div>
          <div className="line-items">(99)9999-9999</div>
          <div className="line-items">
            <img src={Trash} alt="icone excluir"></img>
            <img src={Pencil} alt="icone editar"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
