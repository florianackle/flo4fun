import apiClient from './apiService.ts'

export interface PokemonData {
  id: number
  name: string
  sprites?: any
}

export async function getPokemonById(id: number): Promise<PokemonData> {
  const response = await apiClient.get(`/pokemon/${id}`)
  return response.data
}

export async function getPokemonSpeciesById(id: number): Promise<any> {
  const response = await apiClient.get(`/pokemon-species/${id}`)
  return response.data
}

export function getRandomPokemonId(): number {
  return Math.floor(Math.random() * 151) + 1
}
