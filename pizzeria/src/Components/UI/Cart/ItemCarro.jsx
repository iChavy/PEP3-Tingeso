import React from "react";
import { ListGroupItem } from "reactstrap";
import {useDispatch} from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import "../../../assets/item-carro.css";

const ItemCarro = ({item}) => {
  const { id, titulo, precio, imagen, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(cartActions.addItem({id,
      titulo,
      precio,
      imagen,
    
    }));
  };

  const decreaaseItem = () => {
  dispatch(cartActions.removeItem(id));
  }

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className=" border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={imagen} alt="product-img" />
        <div className="cart__product-info w-100 d-flex align-items-center justify-content-between gap-4">
          <div>
            <h6 className="cart__product-tittle">{titulo}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-precio">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              {" "}
              <span className="increase__btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">
                {quantity}</span>
              <span className="decrease__btn" onClick={decreaaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>{" "}
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>{" "}
        </div>
      </div>
    </ListGroupItem>
  );
};

export default ItemCarro;
