import {
  AditionalInfoOptions,
  Container,
  Content,
  IconBuilding,
  IconHeart,
  IconLeaf,
  IconMap,
  IconNavigation,
  Image,
  NumberOfPeople,
  Option,
  PercentageBar,
  PercentageProcess,
  SecondaryCard,
  SecondaryCardImg,
  Title,
  TripInfo,
} from './styles'
import travelAd from '../../../assets/travelAd.png'
import rome from '../../../assets/rome2.png'

export function TravelAd() {
  return (
    <Container>
      <Image src={travelAd} alt="" />

      <Title>Trip To Greece</Title>
      <small>14-29 June | by Robbin joseph</small>
      <AditionalInfoOptions>
        <Option>
          <IconLeaf />
        </Option>
        <Option>
          <IconMap />
        </Option>
        <Option>
          <IconNavigation />
        </Option>
      </AditionalInfoOptions>
      <NumberOfPeople>
        <IconBuilding />
        <small>29 people going</small>
        <IconHeart />
      </NumberOfPeople>

      <SecondaryCard>
        <SecondaryCardImg src={rome} alt="" />
        <Content>
          <small>Ongoing</small>
          <h3>Trip to rome</h3>
          <PercentageProcess>
            <TripInfo>
              <span>40%</span>
              <span>completed</span>
            </TripInfo>
            <PercentageBar />
          </PercentageProcess>
        </Content>
      </SecondaryCard>
    </Container>
  )
}
