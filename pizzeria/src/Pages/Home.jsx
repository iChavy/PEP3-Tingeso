import React from "react";
import Helmet from "../Components/Helmet/Helmet.js";
import imagen from "../assets/imagenes/delivery.png";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "../assets/Home.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col>
              <div className="contenido__delivery">
                <h1 className="mb-4 titulo__delivery">
                  <span>¿Tienes hambre?</span> <br /> Ahora tenemos despacho a
                  domicilio!
                </h1>

                <p>
                  Pide por la página web y recibe tu pedido en la puerta de tu
                  casa
                </p>

                <div className="delivery__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn">
                    <Link to="/productos">Ver productos</Link>
                  </button>
                </div>
              </div>
            </Col>

            <Col>
              <div>
                <img src={imagen} alt="delivery-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
