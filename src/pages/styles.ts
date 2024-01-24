import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex: 1;
    background: ${({ theme }) => theme.colors.white};
    `

export const Header = styled.header`
    width: 100%;
    display: flex;
`

export const Image = styled.img`
    width: 115px;
    height: 34px;
`

export const Button = styled.button`
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.gray_700};
    background: none;
    border: none;
`