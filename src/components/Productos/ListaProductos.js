import React, { Fragment } from "react";
import { Container, ListGroup } from "react-bootstrap";

const ListaProductos = () => {
  return (
    <Fragment>
      <Container className='my-5'>
          <h1 className='text-center mb-5'>Lista productos</h1>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Container>
    </Fragment>
  );
};

export default ListaProductos;
