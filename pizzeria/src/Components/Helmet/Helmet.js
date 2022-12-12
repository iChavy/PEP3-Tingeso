import React from "react";

// Recibe el nombre de la página y lo pone en el título de la pestaña
const Helmet = (props) => {
    document.title = props.title
    // Porcentaje ancho del contenido
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
