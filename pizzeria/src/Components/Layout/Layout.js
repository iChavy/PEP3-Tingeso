import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Rutas from "../../Routes/Rutas";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Rutas />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
