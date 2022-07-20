import React, { useState, useEffect } from 'react'
import MovieList from './MovieList'
import SearchForm from './SearchForm'

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const [movies, setMovies] = useState([])

 
  const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=13849d19&'

  let data;

  const fetchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`)
    data = await response.json()
    console.log(data)
    setMovies(data.Search)
  }

  const searchMovie = (search) => {
    // return data.movies.filter(item => item.name
    //   .toLowerCase()
    //   .includes(search.toLowerCase()))
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    let res = searchMovie(e.target.value)
    console.log('res', res)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <main>
        <div className='main my-[4rem] flex flex-col gap-[1.5rem] md:gap-[3.2rem]'>
            <SearchForm 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              searchMovie={searchMovie}
              handleChange={handleChange}
              />
            <MovieList
              movies={movies}
              setMovies={setMovies}
              fetchMovies={fetchMovies}
              url={url}
            />
            <MovieList
              movies={movies}
              setMovies={setMovies}
              fetchMovies={fetchMovies}
              url={url}
            />
        </div>
    </main>
  )
}

export default Main