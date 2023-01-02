import './categories-list.css'
import Category from '../Category/Category'

type CategoriesListProps = {
  categories: string[]
}

export default function CategoriesList({ categories }: CategoriesListProps) {
  return (
    <ul className="category-list">
      {categories.map((category, index) => {
        return <Category category={category} index={index} key={index} />
      })}
    </ul>
  )
}
