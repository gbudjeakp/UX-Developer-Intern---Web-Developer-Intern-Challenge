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
            <Link style={{ color: 'black', backgroundColor: '#95BF47', textDecoration: 'none', padding: '15px 32px', marginLeft: '25px', position: 'fixed' }} to='/nominations'>Nominations List</Link>
          </div>
          <Switch>
            <Route exact path='/'>
              <h1 style={{ fontSize: '20px', textAlign: 'center' }}>Search and Nominate your favourite movie for the Shoppies Award</h1>
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
