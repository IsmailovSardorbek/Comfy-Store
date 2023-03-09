import { Link, Route } from 'react-router-dom'
import './card.css'
import Product from '../../pages/Product'

type CardProps = {
  title: string
  imgUrl: string
  price: string | number
  id: string | number
}

export default function Card({ title, imgUrl, price, id }: CardProps) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={imgUrl} />
          <div className="card-buttons">
            <Link to={`/products/product-${id}`}>
              <button className="search">
                <i className="fa-solid fa-search"></i>
              </button>
            </Link>
            <button className="cart">
              <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h4 className="product-price">$ {price}</h4>
        </div>
      </div>
    </>
  )
}
