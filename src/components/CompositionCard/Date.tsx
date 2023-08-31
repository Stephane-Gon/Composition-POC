
interface CardDateProps {
  date: string
}

const CardDate = ({ date }: CardDateProps) => {
  return (
    <p>{ date }</p>
  )
}

export default CardDate