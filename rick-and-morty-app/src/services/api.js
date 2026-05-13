const API_BASE_URL = 'https://rickandmortyapi.com/api/character'

export const getCharacters = async ({ page = 1, name = '', species = '' } = {}) => {
  const queryParams = new URLSearchParams()
  queryParams.append('page', page)
  if (name) queryParams.append('name', name)
  if (species) queryParams.append('species', species)

  const url = `${API_BASE_URL}?${queryParams.toString()}`
  const response = await fetch(url)

  if (!response.ok) {
    if (response.status === 404) {
      return { results: [], info: { pages: 0, count: 0 } }
    }
    throw new Error(`Error al consultar la API: ${response.status}`)
  }

  return await response.json()
}

export const getCharacterById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`)

  if (!response.ok) {
    throw new Error(`No se encontró el personaje con ID ${id}`)
  }

  return await response.json()
}
