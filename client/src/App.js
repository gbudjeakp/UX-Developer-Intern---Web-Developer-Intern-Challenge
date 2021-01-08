import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import NominationList from './components/NominationList/Nomination'
import MovieList from './components/MovieList/MovieList'
import axios from 'axios'
import { Card, Layout, MediaCard, Page, AppProvider, Button } from '@shopify/polaris'

function App () {
  const [movies, setMovies] = useState([])
  const [searchResult, setSearchResult] = useState('')

  useEffect(() => {
    const movieList = async () => {
      const fetchUrl = await axios.get('http://localhost:5000/users/movielist')
      const data = fetchUrl.data
      setMovies(data.Search)
    }
    movieList()
  }, [])

  return (
    <div>
      <Navbar searchResult={setSearchResult} setSearchResult={setSearchResult} />
      {/* <MovieList movies={movies} /> */}
    </div>
  )
}

export default App
