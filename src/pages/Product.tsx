import items from '../data/items.json'

type ProductProps = {
  id: string
}

export default function Product({ id }: ProductProps) {
  const product = items.find((item) => item.id === id)

  return (
    <>
      <div className="page-title">
        <div className="container">
          <h1>Home / {product?.title}</h1>
        </div>
      </div>
      <div id="product">
        <div className="container">
          <div className="product-info">
            <div className="product-image">
              <img src={product?.imgUrl} />
            </div>
            <div className="product-description">
              <h1>{product?.title}</h1>
              <h2>by {product?.category}</h2>

              <h3>${product?.price}</h3>

              <p>
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                typewriter fingerstache pinterest pork belly narwhal. Schlitz
                venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                trust fund hashtag kinfolk microdosing gochujang live-edge
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
