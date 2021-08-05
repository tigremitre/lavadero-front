import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import ListaProductos from "./components/Productos/ListaProductos";
import AgregarProducto from "./components/Productos/AgregarProducto";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
import { useState, useEffect } from "react";
import EditarProducto from "./components/Productos/EditarProducto";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const consulta = await fetch(URL);
      const respuesta = await consulta.json();
      console.log(respuesta);
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/productos">
          <ListaProductos productos={productos} consultarAPI={consultarAPI}></ListaProductos>
        </Route>
        <Route exact path="/productos/nuevo">
          <AgregarProducto consultarAPI={consultarAPI}></AgregarProducto>
        </Route>
        <Route exact path='/productos/editar/:id'>
          <EditarProducto></EditarProducto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
