import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarDoacoes from './NavbarDoacoes';
import Campanhas from './Campanhas';
import SobreNos from './SobreNos';
import PerfilDoador from './PerfilDoador';
import MinhasDoacoes from './MinhasDoacoes';
import './Header.css';

function Header() {
  return (
    <div>
      <NavbarDoacoes />
      <Routes>
        <Route path="/" element={<MinhasDoacoes />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/perfil" element={<PerfilDoador />} />
      </Routes>
    </div>
  );
}

export default Header;