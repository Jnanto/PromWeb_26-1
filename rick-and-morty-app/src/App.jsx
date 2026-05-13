import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import FilterBySpecies from './pages/FilterBySpecies/FilterBySpecies'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import ErrorPage from './pages/ErrorPage/ErrorPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especie" element={<FilterBySpecies />} />
        <Route path="/personaje/:id" element={<CharacterDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
