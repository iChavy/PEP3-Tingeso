import React from "react";
import Helmet from "../Components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import "../assets/pagina-carrito.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Carro = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Carrito">
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Productos en el carrito</h2>
              <br />
            </Col>

            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">El carrito está vacío</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Imagen </th>
                      <th>Nombre del producto</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                      <th>Borrar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/productos">Volver a Productos</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/retiro-delivery">Continuar con la compra</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, imagen, titulo, precio, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={imagen} alt="" />
      </td>
      <td className="text-center">{titulo}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">${precio}</td>

      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Carro;
