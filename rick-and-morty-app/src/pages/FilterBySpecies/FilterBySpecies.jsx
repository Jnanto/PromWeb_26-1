import { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  Box,
  Alert,
} from '@mui/material'
import { getCharacters } from '../../services/api'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import misigmortyImg from '../../images/misigmorty.png'
import './FilterBySpecies.css'

const SPECIES_OPTIONS = [
  'Human',
  'Alien',
  'Humanoid',
  'Robot',
  'Mythological Creature',
  'Animal',
  'Cronenberg',
  'Disease',
  'Poopybutthole',
]

function FilterBySpecies() {
  const [species, setSpecies] = useState('Human')
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCharacters()
  }, [species, page])

  const fetchCharacters = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getCharacters({ page, species })
      setCharacters(data.results)
      setTotalPages(data.info.pages || 1)
    } catch (err) {
      setError(err.message)
      setCharacters([])
    } finally {
      setLoading(false)
    }
  }

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value)
    setPage(1)
  }

  const handlePageChange = (_event, value) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container 
      maxWidth="lg" 
      className="filter-container"
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
        Filtrar por Especie
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        className="filter-subtitle"
      >
        Selecciona una especie para ver los personajes correspondientes
      </Typography>

      <Box className="filter-select-wrapper">
        <FormControl fullWidth className="filter-select">
          <InputLabel id="species-select-label">Especie</InputLabel>
          <Select
            labelId="species-select-label"
            value={species}
            label="Especie"
            onChange={handleSpeciesChange}
          >
            {SPECIES_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {loading && <LoadingSpinner />}

      {error && (
        <Alert severity="error" className="filter-alert">
          {error}
        </Alert>
      )}

      {!loading && !error && characters.length === 0 && (
        <Alert severity="info" className="filter-alert">
          No se encontraron personajes de la especie "{species}".
        </Alert>
      )}

      {!loading && !error && characters.length > 0 && (
        <>
          <Grid container spacing={3}>
            {characters.map((character) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={character.id} className="filter-grid-item">
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>

          {totalPages > 1 && (
            <Box className="filter-pagination">
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

export default FilterBySpecies
