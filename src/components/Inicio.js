import React from 'react';
import { Fragment } from 'react';
import Footer from './common/Footer';
import Navegacion from './common/Navegacion';
import Lavadero from '../img/lavadero.jpeg'

const Inicio = () => {
    return (
        <Fragment>
        <Navegacion></Navegacion>
        <img src={Lavadero} alt="" />
        <Footer></Footer>
        </Fragment>
    );
};

export default Inicio;