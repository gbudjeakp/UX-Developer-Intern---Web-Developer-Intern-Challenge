import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import NominationList from './components/NominationList/Nomination'
import MovieData from './components/MovieData/MovieData'
import Alert from  './components/Alert/Alert'

function App () {
  return (
    <div>

      <GlobalProvider>
        <div style={{ padding: '0', position: 'fixed' }}>
          <Alert />
        </div>
        <Router>
          <div style={{
            marginTop: '100px',
            zIndex: '100',
            paddingTop: '50px',
            paddingBottom: '60px'
          }}
          >
            <Link style={{ color: 'black', backgroundColor: '#95BF47', textDecoration: 'none', padding: '15px 32px', marginLeft: '25px', position: 'fixed', zIndex: '100' }} to='/nominations'>Nominations List</Link>
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
