import { Fragment } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import './App.css'
import Product from './pages/Product'

export default function App() {
  const pathname = useLocation().pathname

  return (
    <Fragment>
      <Navbar pathname={pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-1" element={<Product id="1" />} />
        <Route path="/product-2" element={<Product id="2" />} />
        <Route path="/product-3" element={<Product id="3" />} />
        <Route path="/product-4" element={<Product id="4" />} />
        <Route path="/product-5" element={<Product id="5" />} />
        <Route path="/product-6" element={<Product id="6" />} />
        <Route path="/product-7" element={<Product id="7" />} />
        <Route path="/product-8" element={<Product id="8" />} />
        <Route path="/product-9" element={<Product id="9" />} />
        <Route path="/product-10" element={<Product id="10" />} />
        <Route path="/product-11" element={<Product id="11" />} />
        <Route path="/product-12" element={<Product id="12" />} />
      </Routes>
    </Fragment>
  )
}
