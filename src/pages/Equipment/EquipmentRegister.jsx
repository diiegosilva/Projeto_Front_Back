import axios from "axios";
import EquipmentForm from "../../components/EquipmentForm";
import { useNavigate } from "react-router-dom";

export default function EquipmentRegister() {
  const navigate = useNavigate();
  const salvar = async (data) => {
    await axios.post(
      "http://localhost:8080/equipament",
      data
    );

    navigate("/listing");
  };

  return (
    <EquipmentForm
      onSubmit={salvar}
      buttonText="Cadastrar"
    />
  );
}