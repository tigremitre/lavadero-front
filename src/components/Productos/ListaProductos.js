import React, { Fragment } from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemProducto from './ItemProducto';

const ListaProductos = (props) => {
  return (
    <Fragment>
      <Container className='my-5 bodylista'>
          <h1 className='text-center mb-5'>Lista Servicios</h1>
        <ListGroup>
          {
          props.productos.map((producto)=> <ItemProducto producto={producto} key={producto.id} consultarAPI={props.consultarAPI}></ItemProducto>)
          }
        </ListGroup>
      </Container>
    </Fragment>
  );
};

export default ListaProductos;
