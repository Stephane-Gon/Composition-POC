import { styled } from 'styled-components'
// Components
import CardsContainer from "./components/CardsContainer/CardsContainer"

function App() {

  return (
    <Wrapper>
      <HeaderWrapper>
        <h1>Normal Cards:</h1>
      </HeaderWrapper>
      <CardsContainer normal={true} />
      <HeaderWrapper>
        <h1>Composition Cards:</h1>
      </HeaderWrapper>
      <CardsContainer normal={false} />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  padding-block: 5rem 10rem;
  width: 100%;
`

const HeaderWrapper = styled.div`
  margin: 50px auto;
  text-align: center;
`