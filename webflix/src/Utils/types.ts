export type Movie = {
  Poster: string
  Title: string
  Type?: string
  Year: string
  imdbID: string
}

export type MoviesList = {
  Search: [Movie]
  totalResults: string
}

export type paramsProps = {
  params: {
    id: string
  }
}

export type SingleMovieProps = {
  Actors: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: string
  Released: string
  Response: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
}

