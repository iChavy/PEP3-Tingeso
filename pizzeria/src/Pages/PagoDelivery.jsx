import React from "react";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../Components/Helmet/Helmet.js";

const PagoDelivery = () => {
  return (
    <Helmet title="Pago tienda">
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <br />
              <br />
              <h2>Pago realizado con éxito!</h2>
              <br />
              <br />
              <br />
              <br />
              <br />{" "}
              <h5>
                El comprobante fue enviado al correo ingresado, gracias por tu
                compra
              </h5>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PagoDelivery;
