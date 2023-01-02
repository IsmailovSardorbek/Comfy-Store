import './categories-list.css'
import Category from '../Category/Category'

type CategoriesListProps = {
  categories: string[]
  filterByCategory: (category: string) => void
}

export default function CategoriesList({
  categories,
  filterByCategory,
}: CategoriesListProps) {
  return (
    <ul className="category-list">
      {categories.map((category, index) => {
        return (
          <Category
            category={category}
            index={index}
            key={index}
            filterByCategory={filterByCategory}
          />
        )
      })}
    </ul>
  )
}
