import {
  ContainerCard,
  IconNavigation,
  Image,
  Info,
  MainText,
  TotalDays,
} from './styles'

type Props = {
  path: string
  destination: string
  price: string
  totalDays: number
}

export function DestinationCard({
  path,
  destination,
  price,
  totalDays,
}: Props) {
  return (
    <ContainerCard>
      <Image src={path} alt="" />
      <Info>
        <MainText>
          <small>{destination}</small>
          <small>{price}</small>
        </MainText>
        <TotalDays>
          <IconNavigation />
          <small>{totalDays} days trip</small>
        </TotalDays>
      </Info>
    </ContainerCard>
  )
}
