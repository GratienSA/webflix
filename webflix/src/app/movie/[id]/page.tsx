'use client'
import { getMovie } from '@/Services/movies'
import { paramsProps, SingleMovieProps } from '@/Utils/types'
import { useEffect, useState } from 'react'

const page = ({ params }: paramsProps) => {
  const [movieData, setMovieData] = useState<SingleMovieProps>()
  const [isLoaded, setIsLoaded] = useState(false)

  function getSingleMovie() {
    if (!isLoaded) {
      getMovie(params.id).then((res) => {
        setMovieData(res)
        setIsLoaded(true)
      })
    }
  }

  getSingleMovie()

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={movieData?.Poster} className="w-full h-72 object-contain" />
      <h1 className="text-3xl text-center my-6">{movieData?.Title}</h1>
      <p className="text-white">{movieData?.Plot}</p>
    </div>
  )
}

export default page
