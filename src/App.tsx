import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { themes } from './styles/theme'
export function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
