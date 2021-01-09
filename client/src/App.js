import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
// import NominationList from './components/NominationList/Nomination'
import MovieData from './components/MovieData/MovieData'


function App () {
  return (
    <div>
      <GlobalProvider>
        <MovieData />
      </GlobalProvider>
    </div>
  )
}

export default App
