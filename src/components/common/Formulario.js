import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [servicio, setServicio] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || servicio.trim() === "") {
      setError(true);
    } else {
      console.log("Formulario completado correctamente");
      setError(false);

      const datos = {
        email: email,
        servicio: servicio,
      };

      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: datos,
        };
        let url = 'http://localhost:4000/api/lavadero'
        const respuesta = await fetch(url, parametros);
        console.log(respuesta);
        if ((await respuesta.status) === 201) {
          Swal.fire("Consulta enviada", "Cargada correctamente", "success");

          setEmail("");
          setServicio("");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bodycontacto">
      <div className="container mb-5 mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="nombre@ejemplo.com" />
            {error === true ? (
              <Alert variant={"danger"}>
                Hay un error en el formulario, revise antes de reenviar por
                favor
              </Alert>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Sobre que servicio quiere consultar?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setServicio(e.target.value)}
              value={servicio}
            />
          </Form.Group>
          <Button variant="dark w-100" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Formulario;
