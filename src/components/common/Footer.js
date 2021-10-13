import React from "react";
import { iconos } from "../helpers/iconos";

const Footer = ({alfondo}) => {
  return (
    <div className="bg-dark text-center text-light py-3">
      <div className="container d-flex justify-content-center">
         <p className="mx-4">&copy; Todos los derechos recervados</p>
        <a className="footers" href='/404'><div className="mx-4">{iconos.instagram} lavaderosantafe</div></a>
        <a className="footers" href='/404'><div className="mx-4">{iconos.facebook} lavaderosantafe</div></a>
        <a className="footers" href='/404'><div className="mx-4">{iconos.youtube} lavaderosantafe</div></a>
      </div>
    </div>
  );
};

export default Footer;
