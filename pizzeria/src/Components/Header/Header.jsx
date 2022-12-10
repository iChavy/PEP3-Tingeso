import React, {useRef} from "react";
import { Container } from "reactstrap";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

import "../../assets/Header.css";

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
    display: "Contacto",
    path: "/contacto",
  },
  {
    display: "Carrito",
    path: "/carro",
  },
];
const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Pizzeria</h5>
          </div>
          {/* === menu == */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
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
            <span className="cart__icon">
              <i className="ri-shopping-cart-2-line"></i>
              <span className="cart__badge">2</span>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
