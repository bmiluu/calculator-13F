import { useState } from 'react'
import Header from './components/Header'
import KeyBoard from './components/KeyBoard'
import { ThemeProvider } from './context/ThemeContextProvider'
import { useTheme } from './context/ThemeContext'

const calculate = (value: string) => {
  const tokens = value.match(/(?:\d*\.?\d+|[+\-*/])/g) ?? []
  if (!tokens.length || tokens.length % 2 === 0) return null

  const numbers = tokens.filter((_, index) => index % 2 === 0).map(Number)
  const operators = tokens.filter((_, index) => index % 2 === 1)
  if (numbers.some((number) => Number.isNaN(number))) return null

  for (let index = 0; index < operators.length;) {
    if (operators[index] === '*' || operators[index] === '/') {
      const result = operators[index] === '*'
        ? numbers[index] * numbers[index + 1]
        : numbers[index + 1] === 0 ? NaN : numbers[index] / numbers[index + 1]
      if (!Number.isFinite(result)) return null
      numbers.splice(index, 2, result)
      operators.splice(index, 1)
    } else {
      index += 1
    }
  }

  return operators.reduce((total, operator, index) => (
    operator === '+' ? total + numbers[index + 1] : total - numbers[index + 1]
  ), numbers[0])
}

const Calculator = () => {
  const { bgColor, textColor, dispColor } = useTheme()
  const [expression, setExpression] = useState('')
  const [display, setDisplay] = useState('0')

  const handleAction = (action: string) => {
    if (action === 'reset') {
      setExpression('')
      setDisplay('0')
      return
    }
    if (action === 'delete') {
      const next = expression.slice(0, -1)
      setExpression(next)
      setDisplay(next || '0')
      return
    }
    if (action === '=') {
      const result = calculate(expression)
      if (result === null) return
      const formatted = String(Number(result.toFixed(10)))
      setExpression(formatted)
      setDisplay(formatted)
      return
    }

    const isOperator = ['+', '-', '*', '/'].includes(action)
    const next = isOperator && expression === '' && action !== '-' ? expression : expression + action
    setExpression(next)
    setDisplay(next || '0')
  }

  return (
    <main className="calculator" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="calculator-inner">
        <Header />
        <output className="display" aria-live="polite" style={{ backgroundColor: dispColor }}>
          {display}
        </output>
        <KeyBoard onAction={handleAction} />
      </div>
    </main>
  )
}


const App = () => {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  )
}

export default App