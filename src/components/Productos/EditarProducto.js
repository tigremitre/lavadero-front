import React, { useState, Fragment } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const EditarProducto = () => {
  const [categoria, setCategoria] = useState("");

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <Fragment>
      <Container className="my-4">
        <Form>
          <h1 className="my-4 text-center">Agregar Servico</h1>
          <Form.Group>
            <Form.Label>Nombre del Servicio*</Form.Label>
            <Form.Control type="text" placeholder="Lavado"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio*</Form.Label>
            <Form.Control type="number" placeholder="$1800"></Form.Control>
          </Form.Group>
          <div className="text-center my-4">
            <h3>Categoria*</h3>
            <Form.Check
              inline
              type="radio"
              label="Premium"
              name="categoria"
              value="premium"
              onChange={cambiarCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Completo"
              name="categoria"
              value="completo"
              onChange={cambiarCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Chasis y Carroceria"
              name="categoria"
              value="chasisCarroceria"
              onChange={cambiarCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Carroceria"
              name="categoria"
              value="carroceria"
              onChange={cambiarCategoria}
            ></Form.Check>
          </div>
          <Button variant="danger w-100" type="submit">
            Agregar
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default EditarProducto;
