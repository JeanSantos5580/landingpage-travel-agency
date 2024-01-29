import { ContainerTravelStep, Content, Icon } from './styles'
import { ReactNode } from 'react'

type Props = {
  type: 'yellow' | 'red' | 'blue'
  icon: ReactNode
  title: string
  description: string
}

export function TravelStep({ type, icon, title, description }: Props) {
  return (
    <ContainerTravelStep>
      <Icon type={type}>{icon}</Icon>
      <Content>
        <h5>{title}</h5>
        <small>{description}</small>
      </Content>
    </ContainerTravelStep>
  )
}
