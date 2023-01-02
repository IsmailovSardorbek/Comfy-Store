import './category.css'

type CategoryProps = {
  category: string
  index: number
}

export default function Category({ category, index }: CategoryProps) {
  return (
    <li key={index} className="category-name">
      {category}
    </li>
  )
}
