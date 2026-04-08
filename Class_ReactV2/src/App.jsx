import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')

  const inputDigit = (digit) => {
    setDisplay(display === '0' ? String(digit) : display + digit)
  }

  const inputDot = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const clearDisplay = () => {
    setDisplay('0')
  }



  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="keypad">
        <button className="btn btn-util" onClick={clearDisplay}>AC</button>
        <button className="btn btn-util">+/-</button>
        <button className="btn btn-util">%</button>
        <button className="btn btn-op">÷</button>

        <button className="btn btn-num" onClick={() => inputDigit(7)}>7</button>
        <button className="btn btn-num" onClick={() => inputDigit(8)}>8</button>
        <button className="btn btn-num" onClick={() => inputDigit(9)}>9</button>
        <button className="btn btn-op">×</button>

        <button className="btn btn-num" onClick={() => inputDigit(4)}>4</button>
        <button className="btn btn-num" onClick={() => inputDigit(5)}>5</button>
        <button className="btn btn-num" onClick={() => inputDigit(6)}>6</button>
        <button className="btn btn-op">-</button>

        <button className="btn btn-num" onClick={() => inputDigit(1)}>1</button>
        <button className="btn btn-num" onClick={() => inputDigit(2)}>2</button>
        <button className="btn btn-num" onClick={() => inputDigit(3)}>3</button>
        <button className="btn btn-op">+</button>

        <button className="btn btn-num btn-zero" onClick={() => inputDigit(0)}>0</button>
        <button className="btn btn-num" onClick={inputDot}>.</button>
        <button className="btn btn-op">=</button>
      </div>
    </div>
  )
}

export default App
