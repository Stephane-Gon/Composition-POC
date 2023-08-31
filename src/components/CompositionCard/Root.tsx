import { ReactNode } from 'react'

import { Card } from "./styles"

interface RootProps {
  children: ReactNode
}

const CardRoot = (props: RootProps) => {
  return (
    <Card>
      { props.children }
    </Card>
  )
}

export default CardRoot