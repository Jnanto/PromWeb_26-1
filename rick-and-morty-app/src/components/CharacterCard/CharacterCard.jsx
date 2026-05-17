import { useNavigate } from 'react-router-dom'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material'
import './CharacterCard.css'

const getEpisodeNumber = (url) => {
  if (!url) return '?'
  return url.split('/').pop()
}

function CharacterCard({ character }) {
  const navigate = useNavigate()

  const statusClass = `card-status-dot card-status-dot--${character.status.toLowerCase()}`

  return (
    <Card className="card-root">
      <CardActionArea onClick={() => navigate(`/personaje/${character.id}`)} className="card-action-area">
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          className="card-media"
        />
        <CardContent className="card-content">
          <Typography className="card-name">
            {character.name}
          </Typography>

          <Box className="card-status-row">
            <span className={statusClass} />
            <Typography variant="body2">
              {character.status} — {character.species}
            </Typography>
          </Box>

          <Box className="card-info-section">
            <Typography className="card-info-label">Última ubicación:</Typography>
            <Typography variant="body2">{character.location?.name}</Typography>
          </Box>

          <Box className="card-info-section">
            <Typography className="card-info-label">Visto por primera vez en:</Typography>
            <Typography variant="body2">Episodio {getEpisodeNumber(character.episode?.[0])}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CharacterCard
