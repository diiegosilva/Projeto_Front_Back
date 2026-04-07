import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import EquipamentTable from "../components/EquipamentTable";
import EquipamentList from "../pages/EquipmentList/EquipamentList";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listing" element={<EquipamentList/>}/>
      </Routes>
    </BrowserRouter>
  );
}