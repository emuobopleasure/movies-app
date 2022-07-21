import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {

  

  return (
    <section>
        <div className='movie-list-section pl-[28px] md:pl-[77px]'>
            <p className='category-title text-[18px] leading-[23px] font-normal text-[#000000] mb-[26px] md:text-[24px] md:leading-[31px] font-["DM-Sans"]'>
                Movie Category
            </p>
            <div className='flex gap-[10px] overflow-x-scroll'>
                {
                  movies.map((movie) => (
                    <Movie
                    key={movie.imdbID}
                      movie={movie}
                    />
                  ))
                }
            </div>
        </div>
    </section>
  )
}

export default MovieList