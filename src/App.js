import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './componentes/CartContext/CartContext';
import Cart from './componentes/Cart/Cart';
function App() {
  return (
  <div>
    <BrowserRouter>
    <CartProvider>
     <NavBar />
     <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
          <Route path='/item/:itemId' element={ <ItemDetailContainer /> }/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos"}/>}/>
          <Route  path='/cart'  element={<Cart/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>
  </div>
  );
}

export default App;
