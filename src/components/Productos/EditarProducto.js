import React, { useState, Fragment, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditarProducto = () => {
  //obtengo el parametro de la url

  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  //declaro los state
  const [producto, setProducto] = useState({});

  //traer los datos del objeto editar
  useEffect(() => {
    consultarProducto();
  }, []);

  const consultarProducto = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const resultado = await respuesta.json();
        setProducto(resultado);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [categoria, setCategoria] = useState("");

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <Fragment>
      <Container className="my-4">
        <Form>
          <h1 className="my-4 text-center">Editar Servico</h1>
          <Form.Group>
            <Form.Label>Nombre del Servicio*</Form.Label>
            <Form.Control type="text" placeholder="Lavado" defaultValue={producto.nombreProducto}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio*</Form.Label>
            <Form.Control type="number" placeholder="$1800" defaultValue={producto.precioProducto}></Form.Control>
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
              defaultChecked={producto.categoria && producto.categoria === 'premium'}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Completo"
              name="categoria"
              value="completo"
              onChange={cambiarCategoria}
              defaultChecked={producto.categoria && producto.categoria === 'completo'}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Chasis y Carroceria"
              name="categoria"
              value="chasisCarroceria"
              onChange={cambiarCategoria}
              defaultChecked={producto.categoria && producto.categoria === 'chasisCarroceria'}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Carroceria"
              name="categoria"
              value="carroceria"
              onChange={cambiarCategoria}
              defaultChecked={producto.categoria && producto.categoria === 'carroceria'}
            ></Form.Check>
          </div>
          <Button variant="danger w-100" type="submit">
            Guardar
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default EditarProducto;
