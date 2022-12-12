import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/imagenes/logo.png";
// Sirve para saber en que ruta estamos, lo muestra en el navbar
import { NavLink } from "react-router-dom";

import "../../assets/Header.css";
// sirve para actualizar estados
import { useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Productos",
    path: "/productos",
  },

  {
    display: "Carrito",
    path: "/carro",
  },
];

const Header = () => {
  // devuelve un objeto mutable
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  // accede al store para actualizar estados
  const dispatch = useDispatch();

  // muestra y oculta el menu en mobile
  const mostrarMenu = () => menuRef.current.classList.toggle("show__menu");
  const mostrarCarro = () => dispatch(cartUiActions.alternar());

  // menú desplegable en mobile
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Pizzeria Pudú</h5>
          </div>
          {/* === menu == */}
          <div className="navigation" ref={menuRef} onClick={mostrarMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {/* devuelve una matriz para acceder a sus datos */}
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* === iconos navbar derecha== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={mostrarCarro}>
              <i className="ri-shopping-cart-2-line"></i>
            </span>
            {/* icono menú en mobile */}
            <span className="mobile__menu" onClick={mostrarMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
