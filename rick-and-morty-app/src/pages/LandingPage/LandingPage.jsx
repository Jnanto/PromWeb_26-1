import { useNavigate } from 'react-router-dom'
import { Typography, Button } from '@mui/material'
import portalImg from '../../images/portal.png'
import bgImg from '../../images/Rick_Morty_bg.png'
import logoImg from '../../images/Logo_Landing.png'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing-wrapper" style={{ '--landing-bg-image': `url(${bgImg})` }}>
      <div className="landing-container">
        <img src={portalImg} alt="Portal" className="landing-portal" />

        <img src={logoImg} alt="Rick & Morty" className="landing-title-img" />

        <Typography variant="body1" className="landing-subtitle">
          Sumérgete entre los personajes de Rick and Morty
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          className="landing-btn"
          onClick={() => navigate('/personajes')}
        >
          Explorar
        </Button>
      </div>
    </div>
  )
}

export default LandingPage
