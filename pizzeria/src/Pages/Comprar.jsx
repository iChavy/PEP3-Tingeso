import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet.js";
import { Link } from "react-router-dom";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../assets/comprar-pagina.css";

const Comprar = () => {
  const dispatch = useDispatch();

  const vaciarCarrito = () => {
    dispatch(cartActions.vaciarCarrito());
  };

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const costoEnvio = 5000;
  const datosEnvio = [];

  const [ingresarNombre, setIngresarNombre] = useState("");
  const [ingresarEmail, setIngresarEmail] = useState("");
  const [ingresarTelefono, setIngresarTelefono] = useState("");
  const [ingresarRegion, setIngresarRegion] = useState("");
  const [ingresarComuna, setIngresarComuna] = useState("");
  const [tip, setTip] = useState(0);

  const totalAmount = cartTotalAmount + tip + Number(costoEnvio);

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
    <Helmet title="Comprar">
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Proceso de compra</h2>
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
                <button className="addTOCart__btn me-4">
                  <Link to="/productos">Volver a productos</Link>
                </button>

                <button
                  type="submit"
                  className="addTOCart__btn"
                  onClick={vaciarCarrito}
                >
                  <Link to="/pago">Pagar</Link>
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Costo de envío: <span>${costoEnvio}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Propina: <span>${tip.toFixed(2)}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
              <br />

              <div className="d-flex align-items-center justify-content-between">
                <button
                  className="addTOCart__btn me-4"
                  onClick={() => setTip(0)}
                >
                  Nada
                </button>
                <button
                  className="addTOCart__btn me-4"
                  onClick={() => setTip(cartTotalAmount * 0.05)}
                >
                  5%
                </button>
                <button
                  className="addTOCart__btn me-4"
                  onClick={() => setTip(cartTotalAmount * 0.1)}
                >
                  10%
                </button>
              </div>
              <br />

              <div>
                <button
                  className="addTOCart__btn me-4"
                  type="submit"
                  onClick={vaciarCarrito}
                >
                  <Link to="/pago"> Pagar con efectivo</Link>
                </button>
              </div>
              <br />

              <div>
                <button
                  className="addTOCart__btn me-4"
                  type="submit"
                  onClick={vaciarCarrito}
                >
                  <Link to="/pago"> Pagar con tarjeta de credito</Link>
                </button>
              </div>
              <br />

              <div>
                <button
                  className="addTOCart__btn me-4"
                  type="submit"
                  onClick={vaciarCarrito}
                >
                  <Link to="/pago"> Pagar con tarjeta de debito</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Comprar;
