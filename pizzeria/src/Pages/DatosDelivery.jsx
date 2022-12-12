import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet.js";
import { Link } from "react-router-dom";

import "../assets/comprar-pagina.css";

const DatosDelivery = () => {


  const datosEnvio = [];

  // cambiar el valor de los inputs
  const [ingresarNombre, setIngresarNombre] = useState("");
  const [ingresarEmail, setIngresarEmail] = useState("");
  const [ingresarTelefono, setIngresarTelefono] = useState("");
  const [ingresarRegion, setIngresarRegion] = useState("");
  const [ingresarComuna, setIngresarComuna] = useState("");

  // manejo de errores para que los campos no queden en blanco
  const submitHandler = (e) => {
    e.preventDefault();
    const datosEnvioUsuario = {
      nombre: ingresarNombre,
      email: ingresarEmail,
      telefono: ingresarTelefono,
      region: ingresarRegion,
      comuna: ingresarComuna,
    };

    datosEnvio.push(datosEnvioUsuario);
    console.log(datosEnvio);
  };

  return (
    <Helmet title="Ingresar datos">
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Proceso de compra</h2>
              <br />
              <br />
            </Col>

            <Col lg="8" md="6">
              <h6 className="mb-4">Datos de envío</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    required
                    onChange={(e) => setIngresarNombre(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Engresa tu e-mail"
                    required
                    onChange={(e) => setIngresarEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Ingresa tu número de teléfono"
                    required
                    onChange={(e) => setIngresarTelefono(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Ingresa la región de despacho"
                    required
                    onChange={(e) => setIngresarRegion(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Ingresa la comuna de despacho"
                    required
                    onChange={(e) => setIngresarComuna(e.target.value)}
                  />
                </div>
                <button className="volver__btn me-4">
                  <Link to="/retiro-delivery">Volver</Link>
                </button>

                <button type="submit" className="addTOCart__btn">
                  <Link to="/comprar-delivery">Enviar</Link>
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default DatosDelivery;
