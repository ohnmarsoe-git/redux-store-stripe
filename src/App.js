import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { updateTotal } from './redux/cartSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  const bottomRef = useRef(null);
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTotal())
  }, [cartItems, dispatch])


  return (
    <>
     <Header bottomRef={bottomRef}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={cartItems.length > 0 ? <Checkout/> : <Navigate to="/" />} />
      </Routes>
     <Footer ref={bottomRef}/>
    </>
  );
}

export default App;
