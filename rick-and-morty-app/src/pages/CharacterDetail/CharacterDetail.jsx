import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  Chip,
  Box,
  Button,
  Alert,
  Divider,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { getCharacterById } from '../../services/api'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import './CharacterDetail.css'

const getStatusColor = (status) => {
  switch (status) {
    case 'Alive':
      return 'success'
    case 'Dead':
      return 'error'
    default:
      return 'default'
  }
}

function CharacterDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getCharacterById(id)
        setCharacter(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCharacter()
  }, [id])

  if (loading) return <LoadingSpinner message="Cargando detalle..." />

  if (error) {
    return (
      <Container maxWidth="md" className="detail-container">
        <Alert severity="error">{error}</Alert>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          className="back-button-error"
        >
          Volver al inicio
        </Button>
      </Container>
    )
  }

  if (!character) return null

  return (
    <Container maxWidth="md" className="detail-container">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        className="back-button"
      >
        Volver
      </Button>

      <Card>
        <Grid container>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              image={character.image}
              alt={character.name}
              className="detail-media"
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box className="detail-content">
              <Typography variant="h4" component="h1" gutterBottom>
                {character.name}
              </Typography>

              <Box className="detail-chips">
                <Chip
                  label={character.status}
                  color={getStatusColor(character.status)}
                />
                <Chip label={character.species} variant="outlined" />
                {character.type && (
                  <Chip label={character.type} variant="outlined" />
                )}
              </Box>

              <Divider className="detail-divider" />

              <Typography variant="body1" className="detail-field">
                <strong>Género:</strong> {character.gender}
              </Typography>
              <Typography variant="body1" className="detail-field">
                <strong>Origen:</strong> {character.origin?.name || 'Desconocido'}
              </Typography>
              <Typography variant="body1" className="detail-field">
                <strong>Ubicación actual:</strong>{' '}
                {character.location?.name || 'Desconocida'}
              </Typography>
              <Typography variant="body1" className="detail-field">
                <strong>Apariciones en episodios:</strong>{' '}
                {character.episode?.length || 0}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export default CharacterDetail
