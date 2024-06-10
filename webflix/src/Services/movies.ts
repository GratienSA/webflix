import axios from 'axios'

export async function getAllMovies(movieName: string) {
  const url = `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${movieName}`
  return axios.get(url).then((res) => res.data)
}

export async function getMovie(id: string) {
  const url = `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${id}`
  return axios.get(url).then((res) => res.data)
}
