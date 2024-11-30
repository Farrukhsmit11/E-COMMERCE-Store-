import { useState } from 'react'
// import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import ProductCard from './components/ProductCard'
import FlashSales from './components/FlashSales'
import Products from './Products'
import Footer from './components/Footer'




function App() {

  return (
    <>
      <Banner />
      <Navbar />
      <Home />
      <FlashSales />
      <Products />
      <Footer />
      

    </>
  )
}

export default App
