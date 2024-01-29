import {
  Button,
  Buttons,
  Cards,
  ContainerButtons,
  ContainerHeroImage,
  ContainerHome,
  Decorator,
  Header,
  Hero,
  HeroButton,
  HeroImage,
  HeroTexts,
  Image,
  PlayButton,
  PlayButtonContainer,
  PlayIcon,
  Section,
  Steps,
  TravelSteps,
} from './styles'

import { CategoryCard } from '../components/CategoryCard'
import { DestinationCard } from '../components/DestinationCard'

import logo from '../assets/jadoo-logo.png'
import heroImg from '../assets/traveller.png'
import decorator from '../assets/decore.png'
import antennaImg from '../assets/antenna.png'
import planeImg from '../assets/plane.png'
import micImg from '../assets/microphone.png'
import gearImg from '../assets/gear.png'
import romeImg from '../assets/rome.png'
import bigBangImg from '../assets/bigBang.jpg'
import europeImg from '../assets/europe.jpg'
import { TravelStep } from '../components/TravelStep'
import { AirplaneTilt, ArrowsOut, HandCoins } from '@phosphor-icons/react'
import { TravelAd } from '../components/TravelStep/TravelAd'

export function Home() {
  return (
    <>
      <ContainerHome>
        <Decorator>
          <img src={decorator} alt="" />
        </Decorator>
        <Header>
          <Image src={logo} alt="" />
          <ContainerButtons>
            <Button>Destinations</Button>
            <Button>Hotels</Button>
            <Button>Flights</Button>
            <Button>Bookings</Button>
            <Button>Login</Button>
          </ContainerButtons>
        </Header>
        <Hero>
          <HeroTexts>
            <h3>Best Destinations around the world</h3>
            <h1>Travel, enjoy and live a new and full life</h1>
            <small>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </small>
            <Buttons>
              <HeroButton>Find out more</HeroButton>
              <PlayButtonContainer>
                <PlayButton>
                  <PlayIcon />
                </PlayButton>
                <small>Play Demo</small>
              </PlayButtonContainer>
            </Buttons>
          </HeroTexts>

          <Hero />
          <ContainerHeroImage>
            <HeroImage src={heroImg} alt="" />
          </ContainerHeroImage>
        </Hero>
        <Section>
          <small>Category</small>
          <h1>We Offer Best Services</h1>
          <Cards>
            <CategoryCard
              path={antennaImg}
              title="Calculated Weather"
              description="Built Wicket longer admire do barton vanity itself do in it."
            />
            <CategoryCard
              path={planeImg}
              title="Best Flights"
              description="Engrossed listening. Park gate sell they west hard for the."
            />
            <CategoryCard
              path={micImg}
              title="Local Events"
              description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
            />
            <CategoryCard
              path={gearImg}
              title="Customization"
              description="We deliver outsourced aviation services for military customers"
            />
          </Cards>
        </Section>
        <Section>
          <small>Top Selling</small>
          <h1>Top Destinations</h1>
          <Cards>
            <DestinationCard
              path={romeImg}
              destination="Rome, Italty"
              price="$5,42k"
              totalDays={12}
            />
            <DestinationCard
              path={bigBangImg}
              destination="London, UK"
              price="$4.2k"
              totalDays={12}
            />
            <DestinationCard
              path={europeImg}
              destination="Full Europe"
              price="$15k"
              totalDays={28}
            />
          </Cards>
        </Section>
        <TravelSteps>
          <Steps>
            <small>Easy and Fast</small>
            <h1>Book your next trip in 3 easy steps</h1>
            <TravelStep
              type="yellow"
              icon={<ArrowsOut size={24} weight="light" />}
              title="Choose Destination"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
            />
            <TravelStep
              type="red"
              icon={<HandCoins size={24} weight="light" />}
              title="Make Payment"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
            />
            <TravelStep
              type="blue"
              icon={<AirplaneTilt size={24} weight="light" />}
              title="Reach Airport on Selected Date"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
            />
          </Steps>
          <TravelAd />
        </TravelSteps>
      </ContainerHome>
    </>
  )
}
