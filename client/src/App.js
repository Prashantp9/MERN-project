import React from "react";
import Firstcontainer from "./container/Firstcontainer";
import Navbar from "./container/Navbar";
import Footer from "./container/Footer";
import Slider from "./container/Slider";
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductsPage from "./container/ProductsPage";
import Sign from "./container/sign/reg/Sign";
import Register from "./container/sign/reg/Register";
import Product from "./container/Product";
import Regsucess from "./container/sign/reg/Regsucess";
import Cart from "./Cart";
import BookMark from "./container/Bookmark"
import ProductState from "./context/productstate";


function App() {
  const [mode, setMode] = useState('dark');


  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
     
    }
    else {
      setMode('light');
     
    }
  }
  return (
    <>
    <ProductState>
    <Router>
    <div className="App">
     <Firstcontainer/>
     <Navbar mode={mode} togglemode={togglemode}/>
     
       <Routes>

         <Route path="/" element={<Slider/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/bookmark" element={<BookMark/>}/>
         <Route path="/success" element={<Regsucess/>}/>
         <Route path="/orders" element={<ProductsPage/>}/>
         <Route path="/signin" element={<Sign/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/product/:id" element={<Product/>}/>

       </Routes>
       <Footer/>

     
    </div>
     </Router>
     </ProductState>
    </>
  );
}

export default App;
