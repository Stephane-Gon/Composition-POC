interface CardLinkTextProps {
  text: string
}

const CardLinkText = ({ text }: CardLinkTextProps) => {
  return (
    <h4>{ text }</h4>
  )
}

export default CardLinkText