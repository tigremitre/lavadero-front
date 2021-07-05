
import React from 'react';
import { Fragment } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AgregarProducto = () => {
    return (
        <Fragment>
          <Container className='my-4'>
              <Form>
                  <h1 className='my-4 text-center'>Agregar Servico</h1>
                  <Form.Group>
                      <Form.Label>Nombre del Servicio</Form.Label>
                      <Form.Control type='text' placeholder='Lavado'></Form.Control>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Precio</Form.Label>
                      <Form.Control type='number' placeholder='$1800'></Form.Control>
                  </Form.Group>
                  <div className='text-center my-4'>
                  <h3>Categoria</h3>
                      <Form.Check
                      inline
                      type='radio'
                      label='Premium'
                      name='categoria'
                      ></Form.Check>
                      <Form.Check
                      inline
                      type='radio'
                      label='Completo'
                      name='categoria'
                      ></Form.Check>
                      <Form.Check
                      inline
                      type='radio'
                      label='Chasis y Carroceria'
                      name='categoria'
                      ></Form.Check>
                      <Form.Check
                      inline
                      type='radio'
                      label='Carroceria'
                      name='categoria'
                      ></Form.Check>
                  </div>
                  <Button variant='danger w-100'>Agregar</Button>
              </Form>
          </Container>
        </Fragment>
    );
};

export default AgregarProducto;