import React from 'react';
import { Fragment } from 'react';
import Footer from './common/Footer';
import Navegacion from './common/Navegacion';

const ListaProductos = () => {
    return (
        <Fragment>
            <Navegacion></Navegacion>
            <Footer></Footer>
        </Fragment>
    );
};

export default ListaProductos;