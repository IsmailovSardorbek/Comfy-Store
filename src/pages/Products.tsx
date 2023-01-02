import { useState } from 'react'
import Card from '../components/Card/Card'
import CardsList from '../components/CardsList/CardList'
import SearchForm from '../components/SearchForm/SearchForm'
import items from '../data/items.json'

export default function Products() {
  const [filteredItems, setFilteredItems] = useState(items)

  console.log(filteredItems)

  const [rangeValue, setRangeValue] = useState('80')

  return (
    <>
      <div className="page-title">
        <div className="container">
          <h1>Home / Products</h1>
        </div>
      </div>

      <div className="products">
        <div className="container">
          <div className="products-container">
            <SearchForm
              rangeValue={rangeValue}
              setRangeValue={setRangeValue}
              setFilteredItems={setFilteredItems}
            />
            <div className="cards-container">
              {filteredItems.length ? (
                filteredItems.map((item, index) => {
                  return <Card {...item} key={index} />
                })
              ) : (
                <h1>Sorry, No Products Matched Your Search</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
