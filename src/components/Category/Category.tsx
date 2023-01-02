import './category.css'

type CategoryProps = {
  category: string
  index: number
  filterByCategory: (category:string) => void
}

export default function Category({
  category,
  index,
  filterByCategory,
}: CategoryProps) {
  return (
    <li
      key={index}
      className="category-name"
      onClick={() => filterByCategory(category)}
    >
      {category}
    </li>
  )
}
