import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Boton from './Components/Boton/Boton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Hola Mundo</h1>
        <h2>Esta es mi primera App en React muejejej</h2>
        <Boton text="Haz clic para aumentar" onClick={() => setCount(count + 1)} />
        <p>El contador es: {count}</p>
      </div>
    </>
  )
}

export default App
