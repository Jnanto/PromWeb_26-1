import { useNavigate } from 'react-router-dom'
import { Typography, Button, Box } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import bgImg from '../../images/unnamed.jpg'
import './ErrorPage.css'

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="error-wrapper" style={{ '--error-bg-image': `url(${bgImg})` }}>
      <Box className="error-box">
        <ErrorOutlineIcon className="error-icon" />
        <Typography variant="h2" component="h1" fontWeight={700} className="error-title">
          404
        </Typography>
        <Typography variant="h5" className="error-subtitle">
          Wubba Lubba Dub Dub!
        </Typography>
        <Typography variant="body1" className="error-text">
          La página que buscas se perdió en otra dimensión.
        </Typography>
        <Button
          variant="contained"
          size="large"
          className="error-btn"
          onClick={() => navigate('/')}
        >
          Volver al Inicio
        </Button>
      </Box>
    </div>
  )
}

export default ErrorPage
