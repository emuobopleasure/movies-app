import React, { useState } from 'react'

const Movie = ({movie}) => {
  const [display, setDisplay] = useState(false)

  const onHover = () => {
    setDisplay(true)
  }

  const defaultPoster = 'https://www.omdbapi.com/src/poster.jpg'


  return (
    <div className=''>
        <div className='movie h-[200px] w-[200px] md:w-[300px] md:h-[300px] bg-[#000000] p-[10px] rounded-[12px] relative overflow-hidden'>
          <img src={movie.Poster == 'N/A' ? defaultPoster :  movie.Poster} className='movie-cover w-full h-full object-cover hover:scale-110 transition ease-in-out delay-50'/>
          <p className='movie-title text-[18px] text-[#FFFFFF] font-["DM-Sans"] leading-[23px] font-normal md:text-[24px] md:leading-[31px] w-[10vw] absolute top-[40%] left-[25%] right-[20%]'>
              {movie.Title}
          </p>
        </div>
    </div>
  )
}

export default Movie