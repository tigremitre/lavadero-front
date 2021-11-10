import React, { useState, Fragment, useEffect, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import { campoRequerido, rangoValor } from "../helpers/validaciones";
import Swal from "sweetalert2";

const EditarProducto = (props) => {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  const [producto, setProducto] = useState({});
  const [categoria, setCategoria] = useState("");

  const nombreProductoRef = useRef("");
  const precioProductoRef = useRef(0);

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

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("algo");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "lavadreo express", price: "3507" }),
    };
    fetch("https://reqres.in/api/posts", requestOptions);
    // .then(response => response.json())
    console.log("funciono bien");

    const categoriaSeleccionada =
      categoria === "" ? producto.categoria : categoria;

    if (
      campoRequerido(nombreProductoRef.current.value) &&
      rangoValor(parseInt(precioProductoRef.current.value)) &&
      campoRequerido(categoriaSeleccionada)
    ) {
      const productoEditado = {
        nombreProducto: nombreProductoRef.current.value,
        precioProducto: precioProductoRef.current.value,
        categoria: categoriaSeleccionada,
      };

      console.log(productoEditado);

      try {
        const respuesta = await fetch(URL + "/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productoEditado),
        });
        console.log(respuesta);
        if (respuesta.status === 200) {
          Swal.fire(
            "Producto Editado Anasheeeeeex",
            "Se modificaron los datos del producto",
            "success"
          );
          props.consultarAPI();

          props.history.push("/productos");
        }
      } catch (error) {}
    } else {
      console.log("mostrar cartel de error");
    }
  };

  return (
    <Fragment>
      <Container className="my-4">
        <Form onSubmit={handleSubmit}>
          <h1 className="my-4 text-center">Editar Servico</h1>
          <Form.Group>
            <Form.Label>Nombre del Servicio*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lavado"
              defaultValue={producto.nombreProducto}
              ref={nombreProductoRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="$1800"
              defaultValue={producto.precioProducto}
              ref={precioProductoRef}
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
              defaultChecked={
                producto.categoria && producto.categoria === "premium"
              }
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Completo"
              name="categoria"
              value="completo"
              onChange={cambiarCategoria}
              defaultChecked={
                producto.categoria && producto.categoria === "completo"
              }
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Chasis y Carroceria"
              name="categoria"
              value="chasisCarroceria"
              onChange={cambiarCategoria}
              defaultChecked={
                producto.categoria && producto.categoria === "chasisCarroceria"
              }
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Carroceria"
              name="categoria"
              value="carroceria"
              onChange={cambiarCategoria}
              defaultChecked={
                producto.categoria && producto.categoria === "carroceria"
              }
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

export default withRouter(EditarProducto);
