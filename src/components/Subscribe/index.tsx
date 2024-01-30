import { EnvelopeSimple } from '@phosphor-icons/react'
import {
  Button,
  Container,
  Form,
  Group01,
  Group02,
  Icon,
  IconPaperPlane,
  Input,
} from './styles'
import group01 from '../../assets/group01.png'
import group02 from '../../assets/group02.png'

export function Subscribe() {
  return (
    <Container>
      <Group01 src={group01} alt="" />
      <Group02 src={group02} alt="" />
      <Icon>
        <IconPaperPlane size={32} weight="light" />
      </Icon>
      <h1>
        Subscribe to get information, latest news and other interesting offers
        about Cobham
      </h1>
      <Form>
        <Input>
          <EnvelopeSimple size={21} weight="light" />
          <input type="text" placeholder="Your email" />
        </Input>
        <Button>Subscribe</Button>
      </Form>
    </Container>
  )
}
