import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import ItemCarro from "./ItemCarro";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

import "../../../assets/carro-compras.css";

const Carro = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No hay productos en el carrito</h6>
          ) : (
            cartProducts.map((item, index) => (
              <ItemCarro item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button>
            <Link to="/comprar">Comprar</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carro;
