import {
  Button,
  ButtonMobilePlatforms,
  Container,
  Discover,
  Logo,
  Main,
  MediasButtons,
  MobilePlatforms,
  Rights,
  Section,
  Sections,
  SocialMedias,
  Text,
} from './styles'
import logo from '../../assets/logo.png'
import {
  AppleLogo,
  FacebookLogo,
  GooglePlayLogo,
  InstagramLogo,
  TwitterLogo,
} from '@phosphor-icons/react'

export function Footer() {
  return (
    <Container>
      <Main>
        <Logo>
          <img src={logo} alt="" />
          <small>
            Book your trip in minute, get full Control for much longer.
          </small>
        </Logo>
        <Sections>
          <Section>
            <h3>Company</h3>
            <small>About</small>
            <small>Careers</small>
            <small>Mobile</small>
          </Section>
          <Section>
            <h3>Contact</h3>
            <small>Help/FAQ</small>
            <small>Press</small>
            <small>Affilates</small>
          </Section>
          <Section>
            <h3>More</h3>
            <small>Airlinefees</small>
            <small>Airline</small>
            <small>Low fare tips</small>
          </Section>
        </Sections>
        <SocialMedias>
          <MediasButtons>
            <Button>
              <FacebookLogo size={32} weight="light" />
            </Button>
            <Button>
              <InstagramLogo size={32} weight="regular" />
            </Button>
            <Button>
              <TwitterLogo size={32} weight="regular" />
            </Button>
          </MediasButtons>
          <Discover>
            <h3>Discover our app</h3>
            <MobilePlatforms>
              <ButtonMobilePlatforms>
                <GooglePlayLogo size={32} weight="light" />
                <Text>
                  <span>Get it on</span> <span>Google Play</span>
                </Text>
              </ButtonMobilePlatforms>
              <ButtonMobilePlatforms>
                <AppleLogo size={32} weight="light" />
                <Text>
                  <span>Available on the</span> <span>Apple store</span>
                </Text>
              </ButtonMobilePlatforms>
            </MobilePlatforms>
          </Discover>
        </SocialMedias>
      </Main>
      <Rights>All rights reserved@jadoo.co</Rights>
       
    </Container>
  )
}
