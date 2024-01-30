import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 166px;
`
export const Main = styled.div`
  display: flex;
`

export const Logo = styled.div`
  width: 207px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 80px;

  img {
    width: 152px;
  }

  small {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 124.5%;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }
`
export const Sections = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-right: 80px;
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 34px;
    color: ${({ theme }) => theme.colors.black};
  }

  small {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.tealish_blue};
    cursor: pointer;
  }

  small + small {
    margin-top: 14px;
  }
`

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`
export const MediasButtons = styled.div`
  display: flex;
  gap: 25px;
`

export const Button = styled.button`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  box-shadow:
    0px 1.852px 3.148px 0px rgba(0, 0, 0, 0),
    0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01),
    0px 20px 13px 0px rgba(0, 0, 0, 0.01),
    0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01),
    0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02),
    0px 100px 80px 0px rgba(0, 0, 0, 0.02);
`

export const Discover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 124.5%;
    letter-spacing: 0.1px;
    color: ${({ theme }) => theme.colors.tealish_blue};
  }
`
export const MobilePlatforms = styled.div`
  display: flex;
  gap: 8px;
`
export const ButtonMobilePlatforms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  padding: 12px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 700;
  }
  span:last-child {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
  }
`

export const Rights = styled.span`
  align-self: center;
  margin: 80px 0;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 124.5%;
`
