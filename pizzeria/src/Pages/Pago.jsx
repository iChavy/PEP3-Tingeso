import React from "react";
import { Container } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet.js";

const Pago = () => {
  return (
    <Helmet title="Pago">
      <section>
        <Container>
        <Row>
            <Col lg="12" className="text-center">
              <h2>Proceso de compra</h2>
              <br />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Pago;
