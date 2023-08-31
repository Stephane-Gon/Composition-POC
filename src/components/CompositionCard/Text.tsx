interface CardTextProps {
  title: string,
  description: string
}

const CardText = ({ title, description }: CardTextProps) => {
  return (
    <div>
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  )
}

export default CardText