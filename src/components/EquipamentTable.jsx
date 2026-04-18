
import axios from 'axios';
import { useEffect, useState } from 'react';
import { URI } from '../enumerations/uri';

export default function EquipamentTable(){

  const [equipamento, setEquipamento] = useState([]);

  useEffect(() => {
    fetchEquipamento();
  }, []);

   const fetchEquipamento = async () => {
    try {
      let response;
      response = await axios.get(`${URI.LISTAR_EQUIPAMENTOS}`);
      setEquipamento(response.data); 
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };



return(
    <table className="table table-striped table-bordered">

        <thead className="table-dark">
          <tr>
            <th>Nome</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {equipamento.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.mark}</td>
              <td>{item.model}</td>
              <td>{item.description}</td>
              <td>{item.status ? 'Ativo' : 'Inativo'}</td>
              <td>
                <button className="btn btn-success btn-sm me-2">
                  Cadastrar
                </button>
                <button className="btn btn-danger btn-sm">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

);
}