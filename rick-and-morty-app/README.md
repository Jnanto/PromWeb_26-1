# Rick and Morty - Aplicación React

Aplicación web SPA desarrollada en React que consume la [Rick and Morty API](https://rickandmortyapi.com/) para visualizar, filtrar y buscar personajes de la serie.

## Características

- Visualización de personajes en tarjetas
- Navegación con `react-router-dom`
- Filtrado por especie (Human, Alien, Robot, etc.)
- Buscador por nombre
- Paginación
- Vista de detalle de cada personaje
- Diseño responsivo (móvil, tablet, escritorio)
- Manejo de estados de carga y errores
- Página 404 personalizada

## Tecnologías

- **React 18** + **Vite**
- **react-router-dom** (gestión de rutas)
- **Material UI (MUI)** (componentes y estilos)
- **Fetch API** (consumo de servicios REST)

## Instalación y ejecución

### Requisitos previos
- Node.js 18 o superior
- npm

### Pasos

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd rick-and-morty-app
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir el navegador en: [http://localhost:5173](http://localhost:5173)

### Build de producción
```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
rick-and-morty-app/
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── CharacterCard/
│   │   ├── LoadingSpinner/
│   │   ├── Navbar/
│   │   └── SearchBar/
│   ├── context/            # Contextos de la aplicación
│   │   └── DarkModeContext/
│   ├── images/             # Imágenes y recursos estáticos
│   ├── pages/              # Vistas / rutas
│   │   ├── CharacterDetail/
│   │   ├── CreditsPage/
│   │   ├── ErrorPage/
│   │   ├── FilterBySpecies/
│   │   ├── Home/
│   │   └── LandingPage/
│   ├── services/           # Lógica de consumo de API
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── main.css
├── index.html
├── package.json
└── vite.config.js
```

## Rutas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio (Landing Page) |
| `/personajes` | Listado de todos los personajes con buscador |
| `/especie` | Filtrar personajes por especie |
| `/personaje/:id` | Detalle individual de un personaje |
| `/creditos` | Página de créditos e información |
| `*` | Página 404 de error (rutas no encontradas) |



## Autor

Proyecto desarrollado como entregable académico.

## API utilizada

[Rick and Morty API](https://rickandmortyapi.com/api/character) 
