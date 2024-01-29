import { Play } from '@phosphor-icons/react'
import styled from 'styled-components'

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  padding: 0 8.75rem;
  position: relative;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 3rem 0;
  justify-content: space-between;
  margin-bottom: 80px;
  position: static;
  z-index: 1;
`

export const Image = styled.img`
  width: 115px;
  height: 34px;
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 6rem;
`

export const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray_700};
  background: none;
  border: none;
  cursor: pointer;
`
export const Hero = styled.div`
  display: flex;
`
export const HeroTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;

  h3 {
    color: ${({ theme }) => theme.colors.red_300};
  }

  h1 {
    font-family: 'Volkhov', sans-serif;
    font-size: 4.5rem;
    color: ${({ theme }) => theme.colors.purple_700};
  }

  small {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.tealish_blue};
    font-weight: 500;
  }
`

export const ContainerHeroImage = styled.div`
  width: 650px;
  background: none;
  position: absolute;
  right: 7.5rem;
  top: 9.375rem;
`
export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`

export const Decorator = styled.div`
  width: 37.5rem;
  position: absolute;
  right: 0;
  top: -3.125rem;
  overflow: hidden;
`
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.25rem;
  gap: 40px;
`

export const HeroButton = styled.button`
  height: 3.75rem;
  width: 10.625rem;
  padding: 1rem 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 0.625rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.orange_500};
  cursor: pointer;
`

export const PlayButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  small {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
  }
`

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 0.625rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.red_300};
`
export const PlayIcon = styled(Play).attrs(({ theme }) => ({
  weight: 'fill',
  color: theme.colors.white,
}))``

export const CategorySection = styled.div`
  display: flex;
  flex-direction: column;

  small {
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    align-self: center;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }

  h1 {
    font-family: 'Volkhov', sans-serif;
    font-size: 3.125rem;
    font-weight: 700;
    text-transform: capitalize;
    align-self: center;
    color: ${({ theme }) => theme.colors.purple_700};
    margin-bottom: 68px;
  }
`
export const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
`
