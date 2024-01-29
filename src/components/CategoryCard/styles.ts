import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 250px;
  height: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 24px;

  border: 1px solid red;

  h4 {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.purple_700};
    text-align: center;
    margin-bottom: 1rem;
  }

  small {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }
`

export const Image = styled.img`
  width: 92px;
  margin-bottom: 30px;
`
