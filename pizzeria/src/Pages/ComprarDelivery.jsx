
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet.js";
import { Link } from "react-router-dom";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../assets/comprar-pagina.css";

const ComprarDelivery = () => {  // accede al store para actualizar estados
    const dispatch = useDispatch();
    const costoEnvio = 5000;

    const vaciarCarrito = () => {
      dispatch(cartActions.vaciarCarrito());
    };
  
    //extrae el subtotal de los productos del carrito
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  
    // cambiar el valor de los inputs
    const [tip, setTip] = useState(0);
  
    // calculo del total a pagar
    const totalAmount = cartTotalAmount + tip + Number(costoEnvio);

  
    return (
      <Helmet title="Comprar delivery">
        <section>
          <Container>
            <Row className="justify-content-center">
              <Col lg="12" className="text-center">
                <h2>Proceso de compra</h2>
                <br />
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
                    Propina: <span>${tip.toFixed()}</span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      Total: <span>${totalAmount.toFixed()}</span>
                    </h5>
                  </div>
                </div>
                <br />
  
                <div className="text-center">
                  <h5>¿Deseas incluir propina para el repartidor?</h5>
                </div>
                <br />
  
                <div className="d-flex align-items-center justify-content-between">
                  <button
                    className="addTOCart__btn me-2"
                    onClick={() => setTip(0)}
                  >
                    No
                  </button>
                  <button
                    className="addTOCart__btn me-2"
                    onClick={() => setTip(cartTotalAmount * 0.05)}
                  >
                    5%
                  </button>
                  <button
                    className="addTOCart__btn me-2"
                    onClick={() => setTip(cartTotalAmount * 0.1)}
                  >
                    10%
                  </button>
                </div>
                <br />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="4" md="6">
                <div className="text-center">
                  <h5>Escoge el método de pago</h5>
                </div>
                <br />
                <div className="d-flex align-items-center justify-content-between">
                  <button
                    className="addTOCart__btn me-4"
                    type="submit"
                    onClick={vaciarCarrito}
                  >
                    <Link to="/pago-delivery">Efectivo</Link>
                  </button>
                  <button
                    className="addTOCart__btn me-4"
                    type="submit"
                    onClick={vaciarCarrito}
                  >
                    <Link to="/pago-delivery"> Tarjeta al Repartidor</Link>
                  </button>
  
                  <button
                    className="addTOCart__btn me-4"
                    type="submit"
                    onClick={vaciarCarrito}
                  >
                    <Link to="/pago-delivery"> WebPay</Link>
                  </button>
                </div>
              </Col>
            </Row>
  
            <Row className="justify-content-center">
              <Col lg="4" md="6">
                <br />
                <br />
                <div className="d-flex align-items-center justify-content-between">
                  <button className="volver__btn me-4">
                    <Link to="/datos-delivery">Volver</Link>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  };
export default ComprarDelivery;
