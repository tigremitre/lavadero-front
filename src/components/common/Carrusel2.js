import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carwash from "../../img/carwash.jpg";
import pulido from "../../img/pulido.webp";
import cambio from "../../img/cambio.jpg";

const Carrusel2 = () => {
  return (
    <div>
      <Carousel variant="light">
        <Carousel.Item className="prueba">
          <img
            className="d-block w-100 h-100"
            src={carwash}
            alt="Lavado de auto"
          />
          <Carousel.Caption>
            <a href="/contacto" className="tipografia">
              <div className="mx-4">
                <h1>LAVADO DE AUTOS</h1>
              </div>
            </a>
            <p>
              Lavados Premium - Lavado de Motor - Lavado de Chasis - Limpieza de
              Tapizados.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="prueba">
          <img
            className="d-block w-100 h-100"
            src={pulido}
            alt="Pulido de auto"
          />
          <Carousel.Caption>
            <a href="/contacto" className="tipografia">
              <div className="mx-4">
                <h1>PULIDO Y ENCERADO</h1>
              </div>
            </a>
            <p>
              Pulido y Encerado de pintura - Pulido y recuperacion de Opticas.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="prueba">
          <img
            className="d-block w-100 h-100"
            src={cambio}
            alt="Cambio de aceite y filtro"
          />
          <Carousel.Caption>
            <a href="/contacto" className="tipografia">
              <div className="mx-4">
                <h1>CAMBIO DE ACEITE Y FILTRO</h1>
              </div>
            </a>
            <p>Cambio y control de filtros - Cambio y control de Aceites.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrusel2;
