import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/imagenes/logo.png";
import "../../assets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Pizzería Pudú</h5>
            </div>
          </Col>
          <Col>
            <h5 className="footer__title">Horario atención y de delivery</h5>
            <ListGroup>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Lunes - Domingo</span>
                <p>12:00 PM - 00:00 AM</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col>
            <h5 className="footer__title">Contacto</h5>
            <ListGroup>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Casa central: Santiago centro, Santiago, Chile</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Teléfono: +56912345678</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: pizza@pizza.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <div className="social__links d-flex align-items-center gap-4 justify-content-center">
              <p className="m-0">Síguenos! </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://instagram.com/">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.youtube.com/c/">
                  <i className="ri-youtube-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <p className="copyright__text d-flex align-items-center gap-4 justify-content-center">
              Copyright - 2022, Sitio web hecho por Xavier Muñoz Díaz. Todos los
              derechos reservados. Agradecimientos al youtuber "Coding With
              Muhib"
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
