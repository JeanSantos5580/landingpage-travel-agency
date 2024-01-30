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
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }
`

export const Image = styled.img`
  width: 92px;
  margin-bottom: 30px;
`
