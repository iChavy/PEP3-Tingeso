import React from "react";
// import { Link } from "react-router-dom";
import "../../../assets/producto-card.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductoCard = (props) => {
  const { id, titulo, imagen, precio, descripcion } = props.item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        titulo,
        imagen,
        precio,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={imagen} alt="producto-img" className="w-100" />
      </div>

      <div className="product__content">
        <h5>
          {/* <Link to={`/productos/${id}`}>{titulo} */}
          <br />
          {titulo}

          {/* </Link> */}
        </h5>
        <p>{descripcion}</p>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${precio}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
