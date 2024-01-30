import {
  CardTestimonial,
  Comment,
  Container,
  Content,
  IconCaret,
  Image,
  Pagination,
  Person,
  Titles,
} from './styles'
import avatar from '../../assets/avatar.png'

export function Testimonials() {
  return (
    <Container>
      <Titles>
        <small>Testimonials</small>
        <h1>What people say about Us.</h1>
      </Titles>
      <CardTestimonial>
        <Image src={avatar} alt="" />
        <Content>
          <Comment>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </Comment>
          <Person>
            <span>Mike Taylor</span>
            <span>Lahore, Pakistan</span>
          </Person>
        </Content>
      </CardTestimonial>
      <Pagination>
        <IconCaret rotation="up" />
        <IconCaret rotation="down" />
      </Pagination>
    </Container>
  )
}
