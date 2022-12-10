import React from 'react'


import { Link } from "react-router-dom";
import imagenProducto from "../../../assets/images/producto-01.jpg";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import "../../../assets/producto-card.css"


const ProductoCard = (props) => {

    return (
      <div className="product__item">
        <div className="product__img">
          <img src={imagenProducto} alt="producto-img" className="w-50" />
        </div>
  
        <div className="product__content">
          <h5>
            <Link>pizza</Link>
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">
          <span className='product__price'>$9.900</span>
            <button className="addTOCart__btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };






