import Header from './components/Header'
import { ThemeProvider } from './context/ThemeContextProvider'


const App = () => {
  return (
    <ThemeProvider>

      <Header />
    </ThemeProvider>
  )
}

export default App