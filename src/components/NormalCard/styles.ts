import { styled } from 'styled-components'

const Card = styled.div`
  background: #f1f1f1;
  color: #010101;
  width: 350px;
`

const Image = styled.img`
  width: 100%;
`

const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;


  & p {
    color: #192929;
  }

  & span {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`

export { Card, Image, ContentWrapper }