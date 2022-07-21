import React, { useState, useEffect } from 'react'
import MovieList from './MovieList'
import SearchForm from './SearchForm'

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const [movies, setMovies] = useState([])

 
  
  // let data;
  
  const fetchMovies = async (searchTerm) => {

    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=13849d19&`

    const response = await fetch(`${url}`)
    const data = await response.json()
    console.log(data)
    if (data.Search) {
      setMovies(data.Search)
    }
    console.log('film', movies)
  }
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    fetchMovies('Batman')
    fetchMovies(searchTerm)
  }, [searchTerm])

  return (
    <main>
        <div className='main my-[4rem] flex flex-col gap-[1.5rem] md:gap-[3.2rem]'>
            <SearchForm 
              searchTerm={searchTerm}
              handleChange={handleChange}
              />
            <MovieList
              movies={movies}
            />
            <MovieList
              movies={movies}
            />
        </div>
    </main>
  )
}

export default Main