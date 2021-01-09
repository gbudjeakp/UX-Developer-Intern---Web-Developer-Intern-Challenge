import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { AppProvider, Layout, Card, Button } from '@shopify/polaris'

function MovieCard ({ movies }) {
  const { nominatemovie, nominationlist } = useContext(GlobalContext)

  // This helps to check and see if we have a matching Title in our array
  const nominatedMovie = nominationlist.find((o) => o.Title === movies.Title)
  // This triggers the disabled prop only if the movie exists in the array
  const nominationListDisabled = !!nominatedMovie

  return (
    <div>
      <AppProvider>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <img src={movies.Poster} alt='Movie Poster' />
              <h1>{movies.Title}</h1>
              <h3>{movies.Year}</h3>
              <Button disabled={nominationListDisabled} onClick={() => nominatemovie(movies)}>Nominate</Button>
            </Card>
          </Layout.Section>
        </Layout>
      </AppProvider>
    </div>
  )
}

export default MovieCard
