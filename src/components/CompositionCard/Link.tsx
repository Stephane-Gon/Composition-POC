import { ReactNode } from 'react'


interface CardLinkProps {
  children: ReactNode
}

const CardLink = ({ children }: CardLinkProps) => {
  return (
    <span>{ children }</span>
  )
}

export default CardLink