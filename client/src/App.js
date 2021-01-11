import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import NominationList from './components/NominationList/Nomination'
import MovieData from './components/MovieData/MovieData'

function App () {
  return (
    <div>

      <GlobalProvider>
        <Router>
          <div style={{
            marginTop: '100px',
            zIndex: '100',
            paddingTop: '50px',
            paddingBottom: '60px'
          }}
          >
            <Link to='/nominations'>Nominations List</Link>
          </div>
          <Switch>
            <Route exact path='/'>
              <MovieData />
            </Route>
            <Route exact path='/nominations'>
              <NominationList />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
