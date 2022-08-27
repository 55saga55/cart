// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductItem from './ProductItem';
import Product from './Product';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter >

    <Link to="productitem">ProductItem</Link>
    <Routes>
      
      <Route path="/productitem" element={<ProductItem />}/>
      <Route path='/' element={ <Product />}/>
    
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
