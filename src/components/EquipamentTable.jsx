export default function EquipamentTable(){
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
          <tr>
            <td>Notebook</td>
            <td>Dell</td>
            <td>Inspiron</td>
            <td>Notebook do setor administrativo</td>
            <td>Ativo</td>

            <td>
              <button className="btn btn-success btn-sm me-2">
                Cadastrar
              </button>

              <button className="btn btn-danger btn-sm">
                Excluir
              </button>
            </td>

          </tr>

        </tbody>

      </table>

);
}