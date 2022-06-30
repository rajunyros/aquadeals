// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from "history";
import './App.css';  
import {Products} from './components/Products';
import {ProductDetails} from './components/ProductDetails';
import {Cart} from './components/Cart';  

  
  


function App() {
  return (
    <>
       <Router>
       <Routes>
          <Route exact path="/" element={<Products/>} />
          <Route exact path="/products/:id" element={<ProductDetails/>} />
          <Route exact path="/cart" element={<Cart/>} />
       </Routes>
       </Router>
    </>
  );
}

export default App;
