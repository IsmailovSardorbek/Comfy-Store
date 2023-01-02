import { Fragment } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Context from './context/Context'
import Products from './pages/Products'
import './App.css'

export default function App() {
  const pathname = useLocation().pathname

  return (
    <Fragment>
      <Navbar pathname={pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Fragment>
  )
}
