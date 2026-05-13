# Rick and Morty - Aplicación React

Aplicación web SPA desarrollada en React que consume la [Rick and Morty API](https://rickandmortyapi.com/) para visualizar, filtrar y buscar personajes de la serie.

## 🚀 Características

- ✅ Visualización de personajes en tarjetas
- ✅ Navegación con `react-router-dom`
- ✅ Filtrado por especie (Human, Alien, Robot, etc.)
- ✅ Buscador por nombre
- ✅ Paginación
- ✅ Vista de detalle de cada personaje
- ✅ Diseño responsivo (móvil, tablet, escritorio)
- ✅ Manejo de estados de carga y errores
- ✅ Página 404 personalizada

## 🛠️ Tecnologías

- **React 18** + **Vite**
- **react-router-dom** (gestión de rutas)
- **Material UI (MUI)** (componentes y estilos)
- **Fetch API** (consumo de servicios REST)

## 📦 Instalación y ejecución

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

## 📁 Estructura del proyecto

```
rick-and-morty-app/
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── CharacterCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/              # Vistas / rutas
│   │   ├── Home.jsx
│   │   ├── FilterBySpecies.jsx
│   │   ├── CharacterDetail.jsx
│   │   └── ErrorPage.jsx
│   ├── services/           # Lógica de consumo de API
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🗺️ Rutas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Listado de todos los personajes con buscador |
| `/especie` | Filtrar personajes por especie |
| `/personaje/:id` | Detalle individual de un personaje |
| `*` | Página 404 (rutas no encontradas) |

## 🌐 Despliegue en Vercel

1. Crear cuenta en [vercel.com](https://vercel.com)
2. Importar el repositorio de GitHub
3. Vercel detecta automáticamente que es un proyecto Vite
4. Hacer clic en "Deploy"

## 🌐 Despliegue en Netlify

1. Crear cuenta en [netlify.com](https://netlify.com)
2. Arrastrar la carpeta `dist/` (después de `npm run build`)
3. O conectar el repositorio de GitHub

**Nota:** Para que las rutas funcionen al recargar la página en producción, crear un archivo `public/_redirects` con:
```
/*    /index.html   200
```

## 📝 Autor

Proyecto desarrollado como entregable académico.

## 🔗 API utilizada

[Rick and Morty API](https://rickandmortyapi.com/api/character) — API pública gratuita.
