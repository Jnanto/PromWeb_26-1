import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage/LandingPage'
import Home from './pages/Home/Home'
import FilterBySpecies from './pages/FilterBySpecies/FilterBySpecies'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import CreditsPage from './pages/CreditsPage/CreditsPage'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -16 },
}

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="page-wrapper"
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/personajes" element={<Home />} />
            <Route path="/especie" element={<FilterBySpecies />} />
            <Route path="/personaje/:id" element={<CharacterDetail />} />
            <Route path="/creditos" element={<CreditsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
