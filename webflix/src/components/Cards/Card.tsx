import { Movie } from '@/Utils/types'
import Link from 'next/link'
import React from 'react'

export const Card = ({ Poster, Title, Year, imdbID }: Movie) => {
  return (
    <Link href={`/movie/${imdbID}`} title=''>
      <div className="w-11/12 relative mx-auto cursor-pointer">
        <img src={Poster} className="w-64 h-64 object-cover" />
        <div className="absolute bottom-0 left-0 w-full h-14 bg-darkGray text-white">
          <p>{Title}</p>
          <p>{Year}</p>
        </div>
      </div>
    </Link>
  )
}