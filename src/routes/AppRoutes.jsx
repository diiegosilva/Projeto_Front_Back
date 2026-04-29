import { BrowserRouter, Routes, Route } from "react-router-dom";
import EquipmentRegister from "../pages/Equipment/EquipmentRegister";
import EquipmentEdit from "../pages/Equipment/EquipmentEdit";
import EquipmentList from "../pages/EquipmentList/EquipmentList";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EquipmentRegister/>}/>
        <Route path="/edit/:id" element={<EquipmentEdit/>}/>
        <Route path="/listing" element={<EquipmentList/>}/>
      </Routes>
    </BrowserRouter>
  );
}