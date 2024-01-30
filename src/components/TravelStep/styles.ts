import styled from 'styled-components'

export const ContainerTravelStep = styled.div`
  display: flex;
  gap: 1.3125rem;
  align-items: center;
  margin-bottom: 3rem;
`
const ACTION_COLORS = {
  yellow: 'orange_400',
  red: 'red_400',
  blue: 'blue_700',
} as const

interface Actions {
  type: keyof typeof ACTION_COLORS
}

export const Icon = styled.div<Actions>`
  display: flex;
  min-width: 48px;
  min-height: 48px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors[ACTION_COLORS[props.type]]};
  border-radius: 12px;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h5 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700 !important;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }

  small {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400 !important;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }
`
