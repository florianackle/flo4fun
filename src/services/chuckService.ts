import { createApiClient } from './apiService'

// Axios client for the Chuck Norris API
const chuckApiClient = createApiClient('https://api.chucknorris.io')

export interface ChuckJokeData {
  value: string
}

/**
 * Fetches a random Chuck Norris joke.
 */
export async function getRandomChuckJoke(): Promise<ChuckJokeData> {
  const response = await chuckApiClient.get<ChuckJokeData>('/jokes/random')
  return response.data
}
