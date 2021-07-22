import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {}

const ItemProducto = () => {
  return <ListGroup.Item className='d-flex justify-content-between'>
      <p>Lavado Express <b>$700</b></p> 
  <div>
     <Button variant='warning mr-3'>Editar</Button>
     <Button variant='danger'>Borrar</Button>
  </div>
  </ListGroup.Item>;
};

export default ItemProducto;
