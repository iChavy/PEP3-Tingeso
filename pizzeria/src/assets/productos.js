import aguaGasImg from "../assets/imagenes/agua_gas.webp";
import aguaSinGasImg from "../assets/imagenes/agua_sin.jpeg";
import cocaColaImg from "../assets/imagenes/cocacola.png";
import fantaImg from "../assets/imagenes/fanta.jpeg";
import duraznoImg from "../assets/imagenes/watts_durazno.png";
import pinaImg from "../assets/imagenes/watts_pina.png";
import bbqImg from "../assets/imagenes/bbq.webp";
import garlicImg from "../assets/imagenes/garlic.webp";
import picanteImg from "../assets/imagenes/picante.jpeg";
import tomateImg from "../assets/imagenes/tomate.jpeg";

const productos = [
  // --------------------- PIZZAS ---------------------
  {
    id: "01",
    titulo: "Pizza Americana",
    precio: 9990,
    imagen:
      "https://previews.123rf.com/images/suwanneere/suwanneere0702/suwanneere070200008/798578-una-pizza-con-tocino-pepperoni-salchicha-y-jam%C3%B3n-aislados-.jpg",
    categoria: "pizza",
    descripcion: "Ingredientes: Jamón, Carne, Salchicha y Pepperoni",
  },

  {
    id: "02",
    titulo: "BBQ Chicken",
    precio: 9990,
    imagen:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/2caca97b-77f6-48e7-837d-62642c0c9861/Derivates/12591894-e010-4a02-b04e-2627d8374298.jpg",
    categoria: "pizza",
    descripcion: "Ingredientes: Salsa BBQ, Pollo y Cebolla",
  },

  {
    id: "03",

    titulo: "Hawaiana",
    precio: 9990,
    imagen:
      "https://www.recetin.com/wp-content/uploads/2015/05/pizza_hawaiana.jpg.webp",
    categoria: "pizza",
    descripcion: "Ingredientes: Pollo, Jamón y Piña",
  },

  {
    id: "04",
    titulo: "Campesina",
    precio: 9990,
    imagen:
      "https://www.lamaletademaggie.com/wp-content/uploads/2018/02/P_20180210_231409-1024x576.jpg",
    categoria: "pizza",
    descripcion: "Ingredientes: Pollo, Pimiento y Champiñón",
  },
  {
    id: "05",
    titulo: "Mechada BBQ",
    precio: 9990,
    imagen:
      "https://tofuu.getjusto.com/orioneat-prod/jf5pomSqR7Dxs2T6D-POLLO%20BBQ%20-%20TRATTORIA%20RITA_1500.jpg",
    categoria: "pizza",
    descripcion: "Ingredientes: Carne Mechada, Tomate y Cebolla",
  },
  {
    id: "06",
    titulo: "Vegan Queen",
    precio: 9990,
    imagen:
      "https://mestizos.cl/wp-content/uploads/2020/02/pizza-vegana-800.jpg",
    categoria: "pizza",
    descripcion: "Ingredientes: Champiñón, Pimiento, Cebolla, Choclo y Tomate",
  },
  // --------------------- BEBIDAS ---------------------
  {
    id: "07",
    titulo: "Agua con gas 1.6 Litros",
    precio: 3000,
    imagen: aguaGasImg,
    categoria: "bebestible",
    descripcion: "",
  },
  {
    id: "08",
    titulo: "Agua sin gas 1.6 Litros",
    precio: 3000,
    imagen: aguaSinGasImg,
    categoria: "bebestible",
    descripcion: "",
  },
  {
    id: "09",
    titulo: "Coca Cola 3 Litros",
    precio: 5000,
    imagen: cocaColaImg,
    categoria: "bebestible",
    descripcion: "",
  },
  {
    id: "10",
    titulo: "Fanta 3 Litros",
    precio: 5000,
    imagen: fantaImg,
    categoria: "bebestible",
    descripcion: "",
  },
  {
    id: "11",
    titulo: "Watts Durazno 1.5 Litros",
    precio: 3000,
    imagen: duraznoImg,
    categoria: "bebestible",
    descripcion: "",
  },
  {
    id: "12",
    titulo: "Watts Piña 1.5 Litros",
    precio: 3000,
    imagen: pinaImg,
    categoria: "bebestible",
    descripcion: "",
  },
  // --------------------- SALSAS ---------------------
  {
    id: "13",
    titulo: "Salsa sabor BBQ 50 ml",
    precio: 1000,
    imagen: bbqImg,
    categoria: "salsa",
    descripcion: "",
  },
  {
    id: "14",
    titulo: "Salsa sabor ajo 50 ml",
    precio: 1000,
    imagen: garlicImg,
    categoria: "salsa",
    descripcion: "",
  },
  {
    id: "15",
    titulo: "Salsa Picante 50 ml",

    precio: 1000,
    imagen: picanteImg,
    categoria: "salsa",
    descripcion: "",
  },
  {
    id: "16",
    titulo: "Salsa de Tomate 100 ml",
    precio: 1000,
    imagen: tomateImg,
    categoria: "salsa",
    descripcion: "",
  },
];

export default productos;
