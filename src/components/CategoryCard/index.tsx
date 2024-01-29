import { ContainerCard, Image } from './styles'

type Props = {
  path: string
  title: string
  description: string
}

export function CategoryCard({ path, title, description }: Props) {
  return (
    <ContainerCard>
      <Image src={path} alt="" />
      <h4>{title}</h4>
      <small>{description}</small>
    </ContainerCard>
  )
}
