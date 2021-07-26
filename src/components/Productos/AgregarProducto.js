import React from "react";
import { Fragment, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from 'sweetalert2';
import { withRouter } from "react-router-dom";

const AgregarProducto = (props) => {
  const URL = process.env.REACT_APP_API_URL;
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validar datos
    if (
      nombreProducto.trim() === "" ||
      precioProducto.trim() === "" ||
      categoria === ""
    ) {
      //mostrar un cartel de error;
      setError(true);
      return;
    } else {
      //enviar el servicio a la api
      console.log("Formulario completado correctamente");
      setError(false);

      // crear el objeto a enviar

      const datos = {
        nombreProducto: nombreProducto,
        precioProducto: precioProducto,
        categoria: categoria,
      };
      console.log(datos);

      //enviar objetos a la api, operacion POST

      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        };

        // Ejecutar la solicitud o request

        const respuesta = await fetch(URL, parametros);
        console.log(respuesta);
        if((await respuesta.status) === 201 ){
          // mostrar un cartel al usuario
          Swal.fire(
            'Producto agregado Anasheeee',
            'Mujeres confirmadas',
            'success'
          )
          //limpiar el formulario 
          setNombreProducto(''); setPrecioProducto(''); setCategoria('')

            //recargar los productos
            props.consultarAPI(); 
          //redireccionar a otra ruta 
          props.history.push('/productos')
        }

      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Fragment>
      <Container className="my-4">
        <Form onSubmit={handleSubmit}>
          <h1 className="my-4 text-center">Agregar Servico</h1>
          <Form.Group>
            {error === true ? (
              <Alert variant={"danger"}>
                Hay un error en el formulario, revise antes de reenviar por
                favor
              </Alert>
            ) : null}
            <Form.Label>Nombre del Servicio*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lavado"
              onChange={(e) => setNombreProducto(e.target.value)}
              value={nombreProducto}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="$1800"
              onChange={(e) => setPrecioProducto(e.target.value)}
              value={precioProducto}
            ></Form.Control>
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

export default withRouter(AgregarProducto);
