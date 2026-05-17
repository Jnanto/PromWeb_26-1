import { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import portalImg from '../../images/portal.png'
import { useDarkMode } from '../../context/DarkModeContext/DarkModeContext'
import './Navbar.css'

const navLinks = [
  { label: 'Personajes', path: '/personajes' },
  { label: 'Filtrar por Especie', path: '/especie' },
  { label: 'Créditos', path: '/creditos' },
]

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { darkMode, toggleDarkMode } = useDarkMode()

  const toggleDrawer = (open) => () => setDrawerOpen(open)

  const drawerContent = (
    <Box className="navbar-drawer-box" role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={link.path}
              selected={location.pathname === link.path}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="sticky" elevation={4} className="navbar-appbar">
      <Toolbar>
        <IconButton
          component={RouterLink}
          to="/"
          color="inherit"
          className="navbar-logo-btn"
        >
          <img src={portalImg} alt="Portal" className="navbar-portal-icon" />
        </IconButton>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleDarkMode} className="navbar-theme-toggle">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box className="navbar-links">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                color="inherit"
                className={`navbar-button ${location.pathname === link.path ? 'navbar-button-active' : ''}`}
              >
                {link.label}
              </Button>
            ))}
            <IconButton color="inherit" onClick={toggleDarkMode} className="navbar-theme-toggle">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
