import { ReactNode } from 'react'

import { ContentWrapper } from './styles'

interface CardContentProps {
  children: ReactNode
}

const CardContent = ({ children }: CardContentProps) => {
  return (
    <ContentWrapper>{ children }</ContentWrapper>
  )
}

export default CardContent