import {
  Button,
  ContainerButtons,
  ContainerHeroImage,
  ContainerHome,
  Decorator,
  Header,
  Hero,
  HeroImage,
  HeroTexts,
  Image,
} from './styles'
import logo from '../assets/jadoo-logo.png'
import heroImg from '../assets/traveller.png'
import decorator from '../assets/decore.png'

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
          </HeroTexts>
          <ContainerHeroImage>
            <HeroImage src={heroImg} alt="" />
          </ContainerHeroImage>
        </Hero>
      </ContainerHome>
    </>
  )
}
