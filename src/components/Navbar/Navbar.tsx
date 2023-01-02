import './navbar.css'
import { Link } from 'react-router-dom'
import whiteLogo from '../../../public/images/logo.svg'
import darkLogo from '../../../public/images/logo-black.svg'
import { useState } from 'react'

type PathnameProps = {
  pathname: string
}

export default function Navbar({ pathname }: PathnameProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [showMenu, setShowMenu] = useState(false)

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })

  const [scrollY, setScrollY] = useState(window.scrollY)

  window.addEventListener('scroll', () => {
    setScrollY(window.scrollY)
  })

  const classes = []

  if (pathname !== '/' && scrollY > 20) classes.push('text-white')

  return (
    <div className={`navbar ${scrollY > 20 ? 'sticky' : ''}`}>
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
                    pathname !== '/' ? 'change-color' : 'text-white'
                  } ${classes.join('')}`}
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
                    pathname !== '/' ? 'change-color' : 'text-white'
                  } ${classes.join('')}`}
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
                    pathname !== '/' ? 'change-color' : 'text-white'
                  } ${classes.join('')}`}
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

          <Link className="site-logo" to="/">
            <img
              src={pathname === '/' || scrollY > 10 ? whiteLogo : darkLogo}
            />
          </Link>

          <button
            className={`shopping-cart-btn ${
              pathname === '/' ? '' : 'change-color'
            } ${classes.join('')}`}
          >
            <i className="fa-solid fa-cart-plus"></i>
            <div className="items-counter">0</div>
          </button>
        </div>
      </div>
    </div>
  )
}
