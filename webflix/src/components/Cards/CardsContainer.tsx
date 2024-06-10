import { Movie } from '@/Utils/types'
import React from 'react'
import { MovieSlider } from './Slider'
import { Card } from './Card'

export const CardsContainer = ({ moviesList }: any) => {
  return (
    <MovieSlider>
      {moviesList &&
        moviesList.map((movie: Movie) => {
          return (
            <div key={movie.imdbID}>
              <Card
                Poster={movie.Poster}
                Title={movie.Title}
                Year={movie.Year}
                imdbID={movie.imdbID}
              />
            </div>
          )
        })}
    </MovieSlider>
  )
}
