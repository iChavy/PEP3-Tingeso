import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Rutas from "../../Routes/Rutas";
import Carro from "../UI/Cart/Carro.jsx";

import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />
      {showCart && <Carro />}
      <div>
        <Rutas />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
