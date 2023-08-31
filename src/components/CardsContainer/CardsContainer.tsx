// Components
import NormalCard from "../NormalCard/NormalCard"
import { CompositionCard } from "../CompositionCard"
// Styles
import { Wrapper } from "./styles"
// Images
import image from '../../assets/images/image1.jpg'
// Icons
import { ChevronRightIcon } from "../../design-system/icons/ChevronRight/ChevronRightIcon"
import { ChevronLeftIcon } from "../../design-system/icons/ChevronLeft/ChevronLeftIcon"

interface CardsContainerProps {
  normal: boolean
}

const CardsContainer = ({ normal }: CardsContainerProps) => {

  let content

  if(normal) {
    content = (
      <Wrapper>
        <NormalCard 
          title="Lorem ipsum dolor sit amet"
          description="Donec non imperdiet dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In id libero a arcu mollis iaculis sit amet ut lacus"
          category="News"
          date="31/08/2023"
          img={image}
          icon={<ChevronRightIcon fill="black" />}
          iconRight={true}
        />

        <NormalCard 
          title="Lorem ipsum dolor sit amet"
          description="Donec non imperdiet dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In id libero a arcu mollis iaculis sit amet ut lacus"
          date="31/08/2023"
          icon={<ChevronLeftIcon fill="black" />}
        />
      </Wrapper>
    )
  } else {
    content = (
      <Wrapper>
        <CompositionCard.Root>
          <CompositionCard.Image img={image} alt="Lorem ipsum dolor sit amet" />

          <CompositionCard.Content>
            <CompositionCard.Date date="31/08/2023"/>

            <CompositionCard.Text
              title="Lorem ipsum dolor sit amet"
              description="Donec non imperdiet dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In id libero a arcu mollis iaculis sit amet ut lacus"
            />

            <CompositionCard.Category category="Promotion"/>

            <CompositionCard.Link>
              <CompositionCard.Icon icon={<ChevronLeftIcon fill="black" />} />
              <CompositionCard.LinkText text="Find out More" />
            </CompositionCard.Link>
            
          </CompositionCard.Content>

        </CompositionCard.Root>

        <CompositionCard.Root>
          <CompositionCard.Content>
            <CompositionCard.Link>
              <CompositionCard.LinkText text="Find out More" />
              <CompositionCard.Icon icon={<ChevronRightIcon fill="black" />} />
            </CompositionCard.Link>

            <CompositionCard.Date date="31/08/2023"/>

            <CompositionCard.Text
              title="Lorem ipsum dolor sit amet"
              description="Donec non imperdiet dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In id libero a arcu mollis iaculis sit amet ut lacus"
            />
          </CompositionCard.Content>
        </CompositionCard.Root>
      </Wrapper>
    )
  }

  return content
}

export default CardsContainer