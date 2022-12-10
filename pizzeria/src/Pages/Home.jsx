import React from "react";
import Helmet from "../Components/Helmet/Helmet.js";
import imagen from "../assets/imagenes/delivery.png";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "../assets/Home.css";
import "../assets/seccion-delivery.css";
// import Category from "../Components/UI/category/category.jsx";

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
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Pedir ahora<i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="order__btn">
                    <Link to="/productos">Ver productos</Link>
                  </button>
                </div>
              </div>
            </Col>

            <Col>
              <div className="delivery_img">
                <img src={imagen} alt="delivery-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section>
        <Category />
      </section> */}
    </Helmet>
  );
};

export default Home;
