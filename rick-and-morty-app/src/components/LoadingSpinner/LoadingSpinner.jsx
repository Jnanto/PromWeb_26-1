import { Box, CircularProgress, Typography } from '@mui/material'
import './LoadingSpinner.css'

function LoadingSpinner({ message = 'Cargando personajes...' }) {
  return (
    <Box className="spinner-container">
      <CircularProgress color="primary" size={60} />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  )
}

export default LoadingSpinner
