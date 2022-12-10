import React from 'react'
import { Link } from "react-router-dom";
import "../../../assets/producto-card.css"


const ProductoCard = (props) => {
  const {id, titulo, imagen, precio} = props.item

    return (
      <div className="product__item">
        <div className="product__img">
          <img src={imagen} alt="producto-img" className="w-100" />
        </div>
  
        <div className="product__content">
          <h5>
            <Link to={`/productos/${id}`}>{titulo}</Link>
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">
          <span className='product__price'>{precio}</span>
            <button className="addTOCart__btn">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ProductoCard




