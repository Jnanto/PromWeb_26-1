import react from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Age from './Components/Age/Age'
import Calculator from './Components/Calculator/Calculator'
import ApiSimpsons from './Components/ApiSimpsons/ApiSimpsons'

function App() {

  return (
    <div className="App">
      <Header />
      <h1>Aldo tiene lista la polla</h1>
      <Age />
      <Calculator />
      <ApiSimpsons />
      <Footer />
    </div>
  )
}
export default App