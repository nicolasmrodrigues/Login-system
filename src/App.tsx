import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import RoutesElement from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesElement />
    </BrowserRouter>
  )
}

export default App
