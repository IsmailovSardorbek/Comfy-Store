import './cards-list.css'
import items from '../../data/items.json'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

export default function CardsList() {
  return (
    <div className="cards">
      <div className="container">
        <h1 className="featured">
          <span className="slash">/ </span>
          Featured
        </h1>

        <div className="cards-container">
          {items.slice(0, 3).map((item, index) => {
            return <Card {...item} key={index} />
          })}
        </div>

        <Link to="/products" className="all-products">
          all products
        </Link>
      </div>
    </div>
  )
}
