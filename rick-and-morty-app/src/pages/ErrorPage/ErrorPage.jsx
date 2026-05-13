import { useNavigate } from 'react-router-dom'
import { Container, Typography, Button, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import './ErrorPage.css'

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="md" className="error-container">
      <Box className="error-box">
        <ErrorOutlineIcon className="error-icon" />
        <Typography variant="h2" component="h1" fontWeight={700}>
          404
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Wubba Lubba Dub Dub!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          La página que buscas se perdió en otra dimensión.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<HomeIcon />}
          onClick={() => navigate('/')}
        >
          Volver al Inicio
        </Button>
      </Box>
    </Container>
  )
}

export default ErrorPage
