import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EquipmentForm from "../../components/EquipmentForm";
import { useNavigate } from "react-router-dom";

export default function EquipmentEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    const response = await axios.get(
      `http://localhost:8080/equipament/${id}`
    );
    console.log(response.data)
    setData(response.data);
  };

  const atualizar = async (formData) => {
    await axios.put(
      `http://localhost:8080/equipament/${id}`,
      formData
    );

    navigate("/listing");
  };

  return (
    <EquipmentForm
      initialData={data}
      onSubmit={atualizar}
      buttonText="Atualizar"
    />
  );
}