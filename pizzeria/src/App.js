import "./App.css";
import NavBarComponent from "./Components/NavBar";
import ProductoComponent from "./Components/Producto";

function App() {
  return (
    <div>
      <NavBarComponent />
      <br />
      <div className="d-flex justify-content-around">
        <ProductoComponent
          nombre="Pizza Americana"
          tamano="Mediana"
          imagen="https://previews.123rf.com/images/suwanneere/suwanneere0702/suwanneere070200008/798578-una-pizza-con-tocino-pepperoni-salchicha-y-jam%C3%B3n-aislados-.jpg"
          precio="Valor: $9.990"
          descripcion="Ingredientes: Jamón, Carne, Salchicha, Pepperoni"
        />
        <ProductoComponent
          nombre="BBQ Chicken"
          tamano="Mediana"
          imagen="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/2caca97b-77f6-48e7-837d-62642c0c9861/Derivates/12591894-e010-4a02-b04e-2627d8374298.jpg"
          precio="Valor: $9.990"
          descripcion="Ingredientes: Salsa BBQ, Pollo y Cebolla"
        />
        <ProductoComponent
          nombre="Campesina"
          tamano="Mediana"
          imagen="https://www.lamaletademaggie.com/wp-content/uploads/2018/02/P_20180210_231409-1024x576.jpg"
          precio="Valor: $9.990"
          descripcion="Ingredientes: Pollo, Pimiento y Champiñón"
        />
        
      </div>
      <br />
      <div className="d-flex justify-content-around">
        
        <ProductoComponent
          nombre="Hawaiana"
          tamano="Mediana"
          imagen="https://www.recetin.com/wp-content/uploads/2015/05/pizza_hawaiana.jpg.webp"
          precio="Valor: $9.990"
          descripcion="Ingredientes: Pollo, Jamón, Piña"
        />
        <ProductoComponent
          nombre="Mechada BBQ"
          tamano="Mediana"
          imagen="https://tofuu.getjusto.com/orioneat-prod/jf5pomSqR7Dxs2T6D-POLLO%20BBQ%20-%20TRATTORIA%20RITA_1500.jpg"
          precio="Valor: $9.990"
          descripcion="Ingredientes: Carne Mechada, Tomate y Cebolla"
        />
        <ProductoComponent
          nombre="Vegan Queen"
          tamano="Mediana"
          imagen="https://mestizos.cl/wp-content/uploads/2020/02/pizza-vegana-800.jpg"
          precio="Valor: $9.990"
          descripcion="Ingredientes: Champiñón, Pimiento, Cebolla, Choclo y Tomate"
        />
      </div>
    </div>
  );
}

export default App;
