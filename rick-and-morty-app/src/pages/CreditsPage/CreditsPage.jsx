import { useEffect } from 'react'
import { Container, Typography, Card, Chip, Divider, Box, IconButton, Tooltip } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import ApiIcon from '@mui/icons-material/Api'
import PersonIcon from '@mui/icons-material/Person'
import TvIcon from '@mui/icons-material/Tv'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import dedosImg from '../../images/dedos.png'
import './CreditsPage.css'

function CreditsPage() {
  useEffect(() => {
    if (window.innerWidth <= 900) return
    const el = document.documentElement
    const body = document.body
    el.style.overflow = 'hidden'
    el.style.height = '100dvh'
    body.style.overflow = 'hidden'
    body.style.height = '100dvh'
    return () => {
      el.style.overflow = ''
      el.style.height = ''
      body.style.overflow = ''
      body.style.height = ''
    }
  }, [])

  return (
    <Container maxWidth="lg" className="credits-container">

      <Box className="credits-header">
        <Typography variant="h3" className="credits-title">
          Créditos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Todo lo que hizo posible este proyecto
        </Typography>
      </Box>

      <div className="credits-body">

        <img src={dedosImg} alt="Rick and Morty" className="credits-side-img" />

        <div className="credits-grid">

          <Card className="credits-card" elevation={3}>
            <Box className="credits-card-header">
              <PersonIcon className="credits-icon" />
              <Typography className="credits-section-title credits-accent">
                Desarrollador
              </Typography>
            </Box>
            <Divider className="credits-divider" />
            <Typography variant="h6">Hector Julian Rodriguez</Typography>
            <Typography variant="body2" color="text.secondary">
              Estudiante del curso de  programación web 2026 grupo 1 -
              Universidad de la Amazonia.
            </Typography>
            <Box className="credits-card-header">
              <Typography variant="caption">
                <a href="https://github.com/Jnanto" target="_blank" rel="noopener noreferrer" className="credits-link">
                  github.com/Jnanto
                </a>
              </Typography>
              <Tooltip title="Ver GitHub">
                <IconButton component="a" href="https://github.com/Jnanto" target="_blank" rel="noopener noreferrer" size="small" className="credits-link-icon">
                  <OpenInNewIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Card>

          <Card className="credits-card" elevation={3}>
            <Box className="credits-card-header">
              <ApiIcon className="credits-icon" />
              <Typography className="credits-section-title credits-accent">
                API
              </Typography>
            </Box>
            <Divider className="credits-divider" />
            <Typography variant="h6">The Rick and Morty API</Typography>
            <Typography variant="body2" color="text.secondary">
              API pública y gratuita con todos los datos de personajes,
              episodios y locaciones del universo de Rick and Morty.
            </Typography>
            <Box className="credits-card-header">
              <Typography variant="caption">
                <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer" className="credits-link">
                  rickandmortyapi.com
                </a>
              </Typography>
              <Tooltip title="Ir al sitio oficial">
                <IconButton component="a" href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer" size="small" className="credits-link-icon">
                  <OpenInNewIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Card>

          <Card className="credits-card" elevation={3}>
            <Box className="credits-card-header">
              <CodeIcon className="credits-icon" />
              <Typography className="credits-section-title credits-accent">
                Tecnologías
              </Typography>
            </Box>
            <Divider className="credits-divider" />
            <Box className="credits-chip-row">
              {['React', 'Vite', 'React Router', 'Material UI', 'CSS'].map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" size="small" className="credits-chip" />
              ))}
            </Box>
          </Card>

          <Card className="credits-card" elevation={3}>
            <Box className="credits-card-header">
              <TvIcon className="credits-icon" />
              <Typography className="credits-section-title credits-accent">
                Serie original
              </Typography>
            </Box>
            <Divider className="credits-divider" />
            <Typography variant="h6">Rick and Morty</Typography>
            <Typography variant="body2" color="text.secondary">
              Creada por Dan Harmon y Justin Roiland. Emitida por Adult Swim.
              Todos los personajes y contenido pertenecen a sus respectivos autores.
            </Typography>
            <Box className="credits-card-header">
              <Typography variant="caption">
                <a href="https://www.adultswim.com/videos/rick-and-morty" target="_blank" rel="noopener noreferrer" className="credits-link">
                  adultswim.com
                </a>
              </Typography>
              <Tooltip title="Ir al sitio oficial">
                <IconButton component="a" href="https://www.adultswim.com/videos/rick-and-morty" target="_blank" rel="noopener noreferrer" size="small" className="credits-link-icon">
                  <OpenInNewIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Card>

        </div>

      </div>
    </Container>
  )
}

export default CreditsPage
