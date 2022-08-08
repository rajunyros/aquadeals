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
import {Profile} from './components/Profile';
import {PodcastApi} from './components/PodcastApi';

import AudioPlayer from './components/audio/AudioPlayer';
import AudioPlayer2 from './components/audio/AudioPlayer2';







import Hooks from './components/hooks/Hooks';

import UseMemoHook from './components/hooks/UseMemoHook';  
import UseMemoHook2 from './components/hooks/UseMemoHook2';
import UseRef from './components/hooks/UseRef';
import UseLayoutEffect from './components/hooks/UseLayoutEffect';
import UseCallBack from './components/hooks/UseCallBack';  
import UseCallBack2 from './components/hooks/UseCallBack2';
import UseDebugValue from './components/hooks/UseDebugValue';









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
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/podcast" element={<PodcastApi/>} />
                        <Route exact path="/audioplayer" element={<AudioPlayer/>} />
                                                <Route exact path="/audioplayer2" element={<AudioPlayer2/>} />




            <Route exact path="/hooks" element={<Hooks/>} />
            <Route exact path="/useMemoHook" element={<UseMemoHook/>} />
            <Route exact path="/useMemoHook2" element={<UseMemoHook2/>} />
            <Route exact path="/useRef" element={<UseRef/>} />
            <Route exact path="/useLayoutEffect" element={<UseLayoutEffect/>} />
            <Route exact path="/useCallBack" element={<UseCallBack/>} />
            <Route exact path="/useCallBack2" element={<UseCallBack2/>} />
                        <Route exact path="/useDebugValue" element={<UseDebugValue/>} />


         </Routes>
       </Router>
    </>
  );
}

export default App;
