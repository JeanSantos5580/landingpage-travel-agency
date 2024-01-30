import { PaperPlaneTilt } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 78px 156px;
  border-radius: 129px 20px 20px 20px;
  background: ${({ theme }) => theme.colors.purple_100};
  margin-top: 140px;

  h1 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 33px;
    font-weight: 600;
    line-height: 54px;
    color: ${({ theme }) => theme.colors.tealish_blue};
    z-index: 2; /* Bring text to the front */
  }
`

export const Icon = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    hsla(253, 73%, 56%, 1) 0%,
    hsla(236, 79%, 70%, 1) 80%
  );
  z-index: 2; /* Bring icon to the front */
`

export const IconPaperPlane = styled(PaperPlaneTilt).attrs(({ theme }) => ({
  size: 34,
  weight: 'fill',
  color: theme.colors.white,
}))``

export const Form = styled.form`
  display: flex;
  gap: 24px;
  margin-top: 74px;
  z-index: 2; /* Bring form to the front */
`

export const Button = styled.button`
  height: 68px;
  border: none;
  border-radius: 10px;
  padding: 22px 50px;
  background: linear-gradient(180deg, #ff946d 0%, #ff7d68 100%);

  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`

export const Input = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};

  input {
    border: none;
    outline: none;
    height: 68px;
    padding: 14px;
  }
`

export const Group01 = styled.img`
  position: absolute;
  bottom: 0;
  left: 30px;
  width: 300px;
  filter: opacity(0.2);
  z-index: 1;
`

export const Group02 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  filter: opacity(0.2);
  z-index: 1;
`
