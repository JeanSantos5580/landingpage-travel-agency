import styled from 'styled-components'

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  padding: 0 140px;
  position: relative;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 48px 0;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 115px;
  height: 34px;
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 96px;
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

  h3 {
    color: ${({ theme }) => theme.colors.red_300};
  }

  h1 {
    font-family: 'Volkhov', sans-serif;
    font-size: 84px;
    color: ${({ theme }) => theme.colors.purple_700};
  }

  small {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.tealish_blue};
    font-weight: 500;
  }
`

export const ContainerHeroImage = styled.div`
  width: 350px;
  background: none;
  position: absolute;
  right: 250px;
  top: 150px;
  z-index: 0;
`
export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`

export const Decorator = styled.div`
  width: 600px;
  position: absolute;
  right: -50px;
  top: -50;
`
