import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../../public/images/logo.svg'
import { useState } from 'react'

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [showMenu, setShowMenu] = useState(false)

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })

  const [scrollY, setScrollY] = useState(window.scrollY)

  window.addEventListener('scroll', () => {
    setScrollY(window.scrollY)
  })

  return (
    <div className={`navbar ${scrollY > 50 ? 'sticky' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <button className="burger-btn" onClick={() => setShowMenu(true)}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className={`menu ${showMenu ? 'show' : ''}`}>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  {windowWidth <= 700 && (
                    <i className="fa-solid fa-home page-icon"></i>
                  )}
                  <span className="page-name">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  {windowWidth <= 700 && (
                    <i className="fa-solid fa-couch page-icon"></i>
                  )}
                  <span className="page-name">Products</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  {windowWidth <= 700 && (
                    <i className="fa-solid fa-book page-icon"></i>
                  )}
                  <span className="page-name">About</span>
                </Link>
              </li>
            </ul>
            {windowWidth <= 700 && (
              <button className="close" onClick={() => setShowMenu(false)}>
                &times;
              </button>
            )}
          </div>

          <a className="site-logo" href="#">
            <img src={logo} alt="" />
          </a>

          <button className="shopping-cart-btn">
            <i className="fa-solid fa-cart-plus"></i>
            <div className="items-counter">0</div>
          </button>
        </div>
      </div>
    </div>
  )
}
