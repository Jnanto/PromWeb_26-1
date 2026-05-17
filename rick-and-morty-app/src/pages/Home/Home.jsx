import { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Typography,
  Pagination,
  Box,
  Alert,
} from '@mui/material'
import { getCharacters } from '../../services/api'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import misigmortyImg from '../../images/misigmorty.png'
import './Home.css'

function Home() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCharacters()
    }, 400)

    return () => clearTimeout(timer)
  }, [page, searchTerm])

  const fetchCharacters = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getCharacters({ page, name: searchTerm })
      setCharacters(data.results)
      setTotalPages(data.info.pages || 1)
    } catch (err) {
      setError(err.message)
      setCharacters([])
    } finally {
      setLoading(false)
    }
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    setPage(1)
  }

  const handlePageChange = (_event, value) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container 
      maxWidth="lg" 
      className="home-container"
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundImage: 'none',
        '@media (min-width: 900px)': {
          backgroundImage: `url(${misigmortyImg})`,
          backgroundSize: '200px auto',
        }
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Todos los Personajes
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        className="home-subtitle"
      >
        Explora el universo de Rick and Morty
      </Typography>

      <Box className="search-bar-wrapper">
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
      </Box>

      {loading && <LoadingSpinner />}

      {error && (
        <Alert severity="error" className="home-alert">
          {error}
        </Alert>
      )}

      {!loading && !error && characters.length === 0 && (
        <Alert severity="info" className="home-alert">
          No se encontraron personajes con ese criterio.
        </Alert>
      )}

      {!loading && !error && characters.length > 0 && (
        <>
          <Grid container spacing={3}>
            {characters.map((character) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={character.id} className="home-grid-item">
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>

          {totalPages > 1 && (
            <Box className="home-pagination">
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </Box>
          )}
        </>
      )}
    </Container>
  )
}

export default Home
