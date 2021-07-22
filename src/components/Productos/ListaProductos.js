import React, { Fragment } from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemProducto from './ItemProducto';

const ListaProductos = () => {
  return (
    <Fragment>
      <Container className='my-5'>
          <h1 className='text-center mb-5'>Lista productos</h1>
        <ListGroup>
          <ItemProducto></ItemProducto>
        </ListGroup>
      </Container>
    </Fragment>
  );
};

export default ListaProductos;
