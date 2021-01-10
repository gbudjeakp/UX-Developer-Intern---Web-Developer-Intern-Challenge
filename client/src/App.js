import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import NominationList from './components/NominationList/Nomination'
import MovieData from './components/MovieData/MovieData'
import Signup from './components/Signup/Signup'
import Navbar from './components/Navbar/Navbar'

function App () {
  return (
    <div>
      <Signup />
      {/* <GlobalProvider>
        <MovieData />
        <Router>
          <Switch>
            <Route exact path='/list'>
              <NominationList />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider> */}
    </div>
  )
}

export default App
