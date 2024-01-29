import {
  Button,
  Buttons,
  Cards,
  CategorySection,
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
} from './styles'
import { CategoryCard } from '../components/CategoryCard'
import logo from '../assets/jadoo-logo.png'
import heroImg from '../assets/traveller.png'
import decorator from '../assets/decore.png'
import antennaImg from '../assets/antenna.png'
import planeImg from '../assets/plane.png'
import micImg from '../assets/microphone.png'
import gearImg from '../assets/gear.png'

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
        <CategorySection>
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
        </CategorySection>
      </ContainerHome>
    </>
  )
}
