import {
  Buildings,
  HeartStraight,
  Leaf,
  MapTrifold,
  NavigationArrow,
} from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 370px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  border-radius: 26px;
  box-shadow:
    0px 1.852px 3.148px 0px rgba(0, 0, 0, 0),
    0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01),
    0px 20px 13px 0px rgba(0, 0, 0, 0.01),
    0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01),
    0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02),
    0px 100px 80px 0px rgba(0, 0, 0, 0.02);

  small {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.tealish_blue};
    margin-bottom: 1.3125rem;
  }
`
export const Image = styled.img`
  width: 100%;
`

export const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.875rem;
  margin-top: 1.625rem;
`

export const AditionalInfoOptions = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 28px;
`

export const Option = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray_200};
  cursor: pointer;
`
export const IconLeaf = styled(Leaf).attrs(({ theme }) => ({
  weight: 'fill',
  size: 14,
  color: theme.colors.gray_500,
}))``

export const IconMap = styled(MapTrifold).attrs(({ theme }) => ({
  weight: 'fill',
  size: 14,
  color: theme.colors.gray_500,
}))``

export const IconNavigation = styled(NavigationArrow).attrs(({ theme }) => ({
  size: 14,
  weight: 'fill',
  color: theme.colors.gray_500,
}))`
  transform: scaleX(-1);
`

export const NumberOfPeople = styled.div`
  display: flex;
  align-items: center;

  small {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.tealish_blue};
    margin-bottom: 0;
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }
`

export const IconBuilding = styled(Buildings).attrs(({ theme }) => ({
  size: 20,
  weight: 'regular',
  color: theme.colors.gray_500,
}))``

export const IconHeart = styled(HeartStraight).attrs(({ theme }) => ({
  size: 20,
  weight: 'light',
  color: theme.colors.purple_300,
}))`
  margin-left: auto;
  cursor: pointer;
`

export const SecondaryCard = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  top: 180px;
  right: -115px;
  width: 236px;
  height: 130px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  box-shadow:
    0px 1.852px 3.148px 0px rgba(0, 0, 0, 0),
    0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01),
    0px 20px 13px 0px rgba(0, 0, 0, 0.01),
    0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01),
    0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02),
    0px 100px 80px 0px rgba(0, 0, 0, 0.02);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  small {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.tealish_blue};
    margin: 0;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 14px;
  }
`

export const SecondaryCardImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
export const PercentageProcess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`
export const TripInfo = styled.div`
  display: flex;

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  span:first-child {
    color: ${({ theme }) => theme.colors.purple_200};
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.black};
  }
  span:last-child::before {
    content: '\00a0';
  }
`

export const PercentageBar = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray_200};
  overflow: hidden;

  &::before {
    content: '-';
    position: absolute;
    width: 40%;
    background-color: ${({ theme }) => theme.colors.purple_200};
  }
`
