import categories from '../../data/categories.json'
import CategoriesList from '../CategoriesList/CategoriesList'
import { useRef, useState } from 'react'
import items from '../../data/items.json'
import './search-form.css'

type RangeValueProps = {
  rangeValue: number | string
  setRangeValue: (n: any) => void
  setFilteredItems: (array: any) => void
}

export default function SearchForm({
  rangeValue,
  setRangeValue,
  setFilteredItems,
}: RangeValueProps) {
  const textInputRef = useRef(null)

  function handleDrag(e: React.ChangeEvent<HTMLInputElement>) {
    setRangeValue(e.target.value)
    setFilteredItems(
      items.filter((item) => Number(item.price) <= Number(e.target.value))
    )
  }

  return (
    <div className="search-form">
      <input
        ref={textInputRef}
        type="text"
        placeholder="Search..."
        className="search-input"
      />
      <div className="categories">
        <h4 className="categories-title">Company</h4>
        <CategoriesList categories={categories} />
      </div>
      <div className="price">
        <h4 className="price-title">Price</h4>
        <input
          type="range"
          min={0}
          max={80}
          defaultValue={80}
          onChange={handleDrag}
        />

        <p>Value: ${rangeValue}</p>
      </div>
    </div>
  )
}
