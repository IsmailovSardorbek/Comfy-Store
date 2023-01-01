import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Context from './components/context/Context'
import Products from './pages/Products'

export default function App() {
  const location = useLocation().pathname

  return (
    <>
      <Context.Provider value={{ location }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Context.Provider>
    </>
  )
}
