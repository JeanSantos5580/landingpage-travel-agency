import { PaperPlaneTilt } from '@phosphor-icons/react'
import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 315px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0px 1.852px 3.148px 0px rgba(0, 0, 0, 0),
    0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01),
    0px 20px 13px 0px rgba(0, 0, 0, 0.01),
    0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01),
    0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02),
    0px 100px 80px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  small {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }
`

export const Image = styled.img`
  width: 130%;
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 20px 42px;
  gap: 20px;
`

export const MainText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const TotalDays = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const IconNavigation = styled(PaperPlaneTilt).attrs(({ theme }) => ({
  size: 20,
  weight: 'fill',
  color: theme.colors.black,
}))``
