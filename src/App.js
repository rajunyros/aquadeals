import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from "history";
import './App.css';  
import {Products} from './components/Products';
import {ProductDetails} from './components/ProductDetails';
import {Cart} from './components/Cart';
import {Wishlist} from './components/Wishlist';
import {Order} from './components/Order';  




function App() {
  return (
    <>
       <Router>
         <Routes>
            <Route exact path="/" element={<Products/>} />
            <Route exact path="/products/:id" element={<ProductDetails/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/wishlist" element={<Wishlist/>} />
            <Route exact path="/order" element={<Order/>} />
         </Routes>
       </Router>
    </>
  );
}

export default App;
