import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from '@mui/material'
import './CharacterCard.css'

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

function CharacterCard({ character }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/personaje/${character.id}`)
  }

  return (
    <Card className="card-root">
      <CardActionArea onClick={handleClick} className="card-action-area">
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          className="card-media"
        />
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom noWrap>
            {character.name}
          </Typography>

          <Box className="chip-container">
            <Chip
              label={character.status}
              color={getStatusColor(character.status)}
              size="small"
            />
            <Chip label={character.species} variant="outlined" size="small" />
          </Box>

          <Typography variant="body2" color="text.secondary">
            <strong>Género:</strong> {character.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CharacterCard
