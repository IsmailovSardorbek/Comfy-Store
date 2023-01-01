import './navbar.css'
import { Link } from 'react-router-dom'
import whiteLogo from '../../../public/images/logo.svg'
import darkLogo from '../../../public/images/logo-black.svg'
import { useContext, useState } from 'react'
import Context from '../context/Context'

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

  const { location } = useContext(Context)

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
                <Link
                  to="/"
                  className={`nav-link ${
                    location === '/' ? '' : 'change-color'
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {windowWidth <= 700 && (
                    <i className="fa-solid fa-home page-icon"></i>
                  )}
                  <span className="page-name">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/products"
                  className={`nav-link ${
                    location === '/' ? '' : 'change-color'
                  }`}
                >
                  {windowWidth <= 700 && (
                    <i className="fa-solid fa-couch page-icon"></i>
                  )}
                  <span className="page-name">Products</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/about"
                  className={`nav-link ${
                    location === '/' ? '' : 'change-color'
                  }`}
                >
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
            <img src={location === '/' ? whiteLogo : darkLogo} />
          </a>

          <button
            className={`shopping-cart-btn ${
              location === '/' ? '' : 'change-color'
            }`}
          >
            <i className="fa-solid fa-cart-plus"></i>
            <div className="items-counter">0</div>
          </button>
        </div>
      </div>
    </div>
  )
}
