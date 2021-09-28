import React from "react";
import { iconos } from "../helpers/iconos";

const Footer = () => {
  return (
    <div className="bg-dark text-center text-light py-3">
      <div className="container d-flex justify-content-center">
         <p className="mx-4">&copy; Todos los derechos recervados</p>
        <div className="mx-4">{iconos.instagram} lavaderosantafe</div>
        <div className="mx-4">{iconos.facebook} lavaderosantafe</div>
        <div className="mx-4">{iconos.youtube} lavaderosantafe</div>
      </div>
    </div>
  );
};

export default Footer;
