import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.gray_700};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    /* Short-hand -> font: 400 1rem Roboto, sans-serif */
}

@media screen and (max-width: 400px){
    body, input, textarea, button{
        font-size: 85%;
    }
}

@media screen and (min-width: 400px) and (max-width: 760px){
    body, input, textarea, button{
        font-size: 90%;
    }
}
`
