import { useState, useEffect } from "react";

export default function EquipmentForm({
  initialData,
  onSubmit,
  buttonText
}) {
  const [name, setName] = useState("");
  const [mark, setMark] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setMark(initialData.mark || "");
      setModel(initialData.model || "");
      setDescription(initialData.description || "");
      setStatus(initialData.status || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      mark,
      model,
      description,
      status
    });
  };

  return (
    <div className="container mt-5">  
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome do equipamento</label>
          <input
            type="text"
            name="nome"
            className="form-control"
            placeholder="Digite o nome do equipamento"
            value={name} onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Marca</label>
          <input
            type="text"
            name="marca"
            className="form-control"
            placeholder="Digite a marca"
            value={mark} onChange={(e) => setMark(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Modelo</label>
          <input
            type="text"
            name="modelo"
            className="form-control"
            placeholder="Digite o modelo"
            value={model} onChange={(e) => setModel(e.target.value)}

          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <textarea
            name="descricao"
            className="form-control"
            placeholder="Descrição do equipamento"
            value={description} onChange={(e) => setDescription(e.target.value)}

          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <input
            type="text"
            name="status"
            className="form-control"
            placeholder="Status do equipamento"
            value={status} onChange={(e) => setStatus(e.target.value)}
          />
        </div>
      <button type="submit" className="btn btn-success">
        {buttonText}
      </button>
  </form>
</div>
  );
}