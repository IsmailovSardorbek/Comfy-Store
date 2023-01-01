import './hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="hero">
      <div className="dark-overlay">
        <div className="container">
          <h1 className="text-slanted">Rest, Relax, Unwind</h1>
          <p>Embrace your choices - we do</p>
          <Link to="/products" className="show-now">
            show now
          </Link>
        </div>
      </div>
    </div>
  )
}
