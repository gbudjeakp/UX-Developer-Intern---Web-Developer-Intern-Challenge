import React, { useState, useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

function MovieList () {
  const [movies, setMovies] = useState([])
  const [searchResult, setSearchResult] = useState('')

  // const apiKey = process.env.API_KEY
  useEffect(() => {
    const movieList = async (searchResult) => {
      const fetchUrl = await axios.get(`https://www.omdbapi.com/?s=${searchResult}&apikey=${process.env.REACT_APP_API_KEY}`)
      const data = fetchUrl.data
      if (data.Search) {
        setMovies(data.Search)
      }
    }
    movieList(searchResult)
  }, [searchResult])
  return (
    <div>
      <Navbar searchresult={searchResult} setSearchResult={setSearchResult} />

      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <MovieCard movies={movie} />
          </div>
        )
      })}
    </div>
  )
}

export default MovieList
