
import React, {useEffect } from "react";
import Helmet from "../Components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import pizzaImg from "../assets/imagenes/pizza.png";
import bebestiblesImg from "../assets/imagenes/bebestibles.png";
import salsasImg from "../assets/imagenes/salsas.png";

import productos from "../assets/productos.js";
import ProductoCard from "../Components/UI/tarjeta-producto/ProductoCard.jsx";
import "../assets/Productos.css";

const Productos = () => {
  const [categoria, setCategoria] = React.useState("all");
  const [allProductos, setAllProductos] = React.useState(productos);

  useEffect(() => {
    if (categoria === "TODOS") {
      setAllProductos(productos);
    }

    if (categoria === "PIZZAS") {
      const filteredProductos = productos.filter(
        (item) => item.categoria === "pizza"
      );

      setAllProductos(filteredProductos);
    }

    if (categoria === "BEBESTIBLES") {
      const filteredProductos = productos.filter(
        (item) => item.categoria === "bebestible"
      );

      setAllProductos(filteredProductos);
    }

    if (categoria === "SALSAS") {
      const filteredProductos = productos.filter(
        (item) => item.categoria === "salsa"
      );

      setAllProductos(filteredProductos);
    }
  }, [categoria]);

  return (
    <Helmet title="Productos">
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Productos</h2>
            </Col>

            <Col lg="12">
              <div className="food__categoria d-flex align-items-center justify-content-center gap-5">
                <button className="all__btn"  onClick={()=>setCategoria('TODOS')}>Todos</button>
                <button className="d-flex align-items-center justify-content-center gap-2" onClick={()=>setCategoria('PIZZAS')}>
                  <img src={pizzaImg} alt="piza-img" />
                  Pizzas
                </button>
                <button className="d-flex align-items-center justify-content-center gap-2" onClick={()=>setCategoria('BEBESTIBLES')}>
                  {" "}
                  <img src={bebestiblesImg} alt="bebestibles-img" />
                  Bebestibles
                </button>
                <button className="d-flex align-items-center justify-content-center gap-2" onClick={()=>setCategoria('SALSAS')}>
                  {" "}
                  <img src={salsasImg} alt="salsas-img" />
                  Salsas
                </button>
              </div>
            </Col>

            {allProductos.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6"  key={item.id} className='mt-5'>
                <ProductoCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Productos;
