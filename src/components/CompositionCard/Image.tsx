import { Image } from "./styles"

interface CardImageProps {
  img: string,
  alt: string
}

const CardImage = ({ img, alt }: CardImageProps) => {
  return (
    <Image src={img} alt={alt} />
  )
}

export default CardImage