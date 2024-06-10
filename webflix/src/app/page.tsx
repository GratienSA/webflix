'use client'
import { Card } from '@/components/Cards/Card'
import { CardsContainer } from '@/Components/Cards/CardsContainer'
import { Search } from '@/Components/Search/Search'
import { Movie } from '@/Utils/types'
import Image from 'next/image'
import { useState } from 'react'
import { Triangle } from 'react-loader-spinner'

export default function Home() {
  const [moviesList, setMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <Search setMoviesList={setMoviesList} setIsLoading={setIsLoading} />

      {moviesList && <CardsContainer moviesList={moviesList} />}
      {
        <Triangle
          visible={isLoading}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      }
    </main>
  )
}
