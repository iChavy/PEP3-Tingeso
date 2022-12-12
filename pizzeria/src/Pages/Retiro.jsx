import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../Components/Helmet/Helmet.js";

const Retiro = () => {
  return (
    <Helmet title="Retiro o delivery">
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <br /> <br /> <br /> <br />
              <h2>
                ¿Deseas retirar en tienda o prefieres despacho a domicilio?
              </h2>
              <div>
                <br /> <br />
                <button className="addTOCart__btn me-4">
                  <Link to="/comprar-tienda"> Retiro en tienda</Link>
                </button>
                <button className="addTOCart__btn me-4">
                  <Link to="/datos-delivery"> Despacho a domicilio</Link>
                </button>
              </div>
              <br /> <br /> <br />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Retiro;
