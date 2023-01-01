import './card.css'

type CardProps = {
  title: string
  imgUrl: string
  price: string | number
}

export default function Card({ title, imgUrl, price }: CardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imgUrl} />
        <div className="card-buttons">
          <button className="search">
            <i className="fa-solid fa-search"></i>
          </button>
          <button className="cart">
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h4 className="product-price">{price}</h4>
      </div>
    </div>
  )
}
