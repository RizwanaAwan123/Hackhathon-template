import React from "react";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Mainsection from "./components/Mainsection";
import Newstyle from "./components/newstyle";
import Product from "./components/Product";
import Topcategory from "./components/Topcategory";
import Card from "./components/card/Product/card";
import ProductPage from "./components/card/Product/product";
import Contact from "./components/contact";
import BuyingProduct from "./components/card/buyingProduct";
import Faq from "./components/faq";



export default function Home() {
  return (
    <div className='m-3'>
      
      <Mainsection/>
      <Feature/>
      <Topcategory/>
      <Newstyle/>
      <Product/>
        <Footer/>
      
    </div>
  );
};