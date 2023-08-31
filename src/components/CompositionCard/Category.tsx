
interface CardCategoryProps {
  category: string
}

const CardCategory = ({ category }: CardCategoryProps) => {
  return (
    <h4>{ category }</h4>
  )
}

export default CardCategory