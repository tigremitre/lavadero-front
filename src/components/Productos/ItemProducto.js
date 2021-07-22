import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";

const ItemProducto = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        Lavado Express <b>$700</b>
      </p>
      <div>
        <Button variant="warning mr-3 text-light">Editar <FontAwesomeIcon icon={faPen}></FontAwesomeIcon></Button>
        <Button variant="danger">
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
