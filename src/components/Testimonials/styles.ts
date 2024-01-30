import { CaretUp } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 173px;
`

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;

  small {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }

  h1 {
    font-family: 'Volkhov', sans-serif;
    font-size: 50px;
    font-weight: 700;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.purple_700};
  }
`
export const CardTestimonial = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 245px;
  background: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 4.25rem 2.125rem 2.125rem;
  border-radius: 10px;
  margin-right: 50px;
  box-shadow:
    0px 1.852px 3.148px 0px rgba(0, 0, 0, 0),
    0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01),
    0px 20px 13px 0px rgba(0, 0, 0, 0.01),
    0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01),
    0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02),
    0px 100px 80px 0px rgba(0, 0, 0, 0.02);
`

export const Image = styled.img`
  width: 68px;
  height: 68px;
  position: absolute;
  left: -34px;
  top: -34px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Comment = styled.small`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.tealish_blue};
`

export const Person = styled.small`
  display: flex;
  flex-direction: column;
  margin-top: 2.125rem;

  span {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }

  span:first-child {
    font-size: 18px;
    font-weight: 600;
  }

  span:last-child {
    font-size: 14px;
    font-weight: 400;
  }
`

export const Pagination = styled.small`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`

type IconRotation = {
  rotation: 'up' | 'down'
}

export const IconCaret = styled(CaretUp).attrs<IconRotation>(({ theme }) => ({
  size: 20,
  weight: 'bold',
  color: theme.colors.gray_700,
}))`
  transform: ${(props) =>
    props.rotation === 'up' ? `scaleY(1)` : `scaleY(-1)`};
  cursor: pointer;
`
