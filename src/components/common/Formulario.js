import React from "react";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  return (
    <div className="bodycontacto">
      <div className="container mb-5 mt-5">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Sobre que servicio quiere consultar?</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Formulario;
