import { createApiClient } from './apiService'

// Axios-Client for PokeAPI
const pokeApiClient = createApiClient('https://pokeapi.co/api/v2')

// Interfaces for PokeAPI data
export interface OfficialArtwork {
  front_default: string
}

export interface PokemonOtherSprites {
  'official-artwork': OfficialArtwork
}

export interface PokemonSprites {
  front_default: string
  other: PokemonOtherSprites
}

export interface PokemonData {
  id: number
  name: string
  sprites: PokemonSprites
}

export interface PokemonName {
  name: string
  language: {
    name: string
    url: string
  }
}

export interface PokemonSpeciesData {
  id: number
  names: PokemonName[]
}

/**
 * Fetches Pokémon data by id
 */
export async function getPokemonById(id: number): Promise<PokemonData> {
  const response = await pokeApiClient.get<PokemonData>(`/pokemon/${id}`)
  return response.data
}

/**
 * Fetches Pokémon species data by id
 * needed to get the German name (yes, for real...)
 */
export async function getPokemonSpeciesById(id: number): Promise<PokemonSpeciesData> {
  const response = await pokeApiClient.get<PokemonSpeciesData>(`/pokemon-species/${id}`)
  return response.data
}

/**
 * Generates a random Pokémon id
 * 1st generation Pokémon are from 1 to 151
 */
export function getRandomPokemonId(): number {
  return Math.floor(Math.random() * 151) + 1
}
