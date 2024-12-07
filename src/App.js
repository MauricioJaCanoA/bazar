import './App.css';
import Navbar from './components/navbar';
import Producto from './components/productos';
import Almacen from './components/almacen';
import ShoppingCart from './components/shoppingCart';


function App() {
  let component;

  switch(window.location.pathname){
    default:
      <Producto/>
      break;
    case '/':
      component = <Producto/>
      break;
    case '/Productos':
      component = <Producto/>
      break;
    case '/Almacen':
      component = <Almacen/>
      break;  
    case '/Carrito':
      component = <ShoppingCart/>
      break;
  }

  return (
    <div className="App">
      <Navbar/>
      {component}
    </div>
  );
}

export default App;
