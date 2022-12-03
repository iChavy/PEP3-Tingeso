import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartPlus } from "react-bootstrap-icons";

export default function ProductoComponent({
  nombre,
  tamano,
  imagen,
  precio,
  descripcion,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagen} width="80"
              height="200" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Button className="boton-anadir-carro">
          <CartPlus/> Añadir al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}
