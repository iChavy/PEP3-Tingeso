import React from "react";

import { Container, Row, Col } from "reactstrap";

import bebestibles from "../../../assets/imagenes/bebestibles.png";
import pizza from "../../../assets/imagenes/pizza.png";
import salsas from "../../../assets/imagenes/salsas.png";

import "../../../assets/category.css"

const categoryData = [
  {
    display: "Pizza",
    imgUrl: pizza,
  },

  {
    display: "Bebestibles",
    imgUrl: bebestibles,
  },

  {
    display: "Salsas",
    imgUrl: salsas,
  },
];

const Category = () => {
  return (
    <Container>
      <Row >
        {categoryData.map((item, index) => (
          <Col className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-5">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;