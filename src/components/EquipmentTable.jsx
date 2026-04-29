
import axios from 'axios';
import { useEffect, useState } from 'react';
import { URI } from '../enumerations/uri';
import { useNavigate } from 'react-router-dom';

export default function EquipmentTable(){
  const navigate = useNavigate();
  const [equipamento, setEquipamento] = useState([]);

  useEffect(() => {
    fetchEquipamento();
  }, []);

   const fetchEquipamento = async () => {
    try {
      let response;
      response = await axios.get(`${URI.EQUIPAMENTO}`);
      setEquipamento(response.data); 
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const remover = async (id) => {
  try {
    await axios.delete(`${URI.EQUIPAMENTO}/${id}`)

    fetchEquipamento();

  } catch (error) {
    console.error(error);
    alert("Erro ao excluir");
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
                <button onClick={() => navigate(`/edit/${item.id}`)} className="btn btn-success btn-sm me-2">
                  Editar
                </button>
                <button onClick={() => remover(item.id)} className="btn btn-danger btn-sm" >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

);
}