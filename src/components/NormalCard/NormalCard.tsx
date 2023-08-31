// Styles
import { Card, Image, ContentWrapper } from "./styles"

interface NormalCardProps {
  img?: string,
  icon?: JSX.Element,
  iconRight?: boolean,
  category?: string,
  date?: string,
  title: string,
  description: string,
  onClick?: () => void,
}

const NormalCard = (props: NormalCardProps) => {
  return (
    <Card>
      {
        props.img && <Image src={props.img} alt={props.title}  />
      }
      <ContentWrapper>
        {
          props.category && <h4>{ props.category }</h4>
        }
        {
          props.date && <p>{ props.date }</p>
        }
        <h3>{props.title}</h3>
        <p>{ props.description }</p>

        <span>
          { 
            props.icon && !props.iconRight && props.icon
          }
          <h4>Find Out More</h4>
          { 
            props.icon && props.iconRight && props.icon
          }
        </span>
      </ContentWrapper>
      
    </Card>
  )
}

export default NormalCard