export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="label-custom mb-4">Cadastro de Equipamento</h1>

      <form>

        <div className="mb-3">
          <label className="form-label">Nome do equipamento</label>
          <input
            type="text"
            name="nome"
            className="form-control"
            placeholder="Digite o nome do equipamento"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Marca</label>
          <input
            type="text"
            name="marca"
            className="form-control"
            placeholder="Digite a marca"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Modelo</label>
          <input
            type="text"
            name="modelo"
            className="form-control"
            placeholder="Digite o modelo"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <textarea
            name="descricao"
            className="form-control"
            placeholder="Descrição do equipamento"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <input
            type="text"
            name="status"
            className="form-control"
            placeholder="Status do equipamento"
          />
        </div>

        <button className="btn btn-success">
          Cadastrar
        </button>

      </form>
    </div>
  );
}