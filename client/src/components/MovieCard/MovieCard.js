import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { AppProvider, MediaCard } from '@shopify/polaris'

function MovieCard ({ movies }) {
  const { nominatemovie, nominationlist } = useContext(GlobalContext)

  // This helps to check and see if we have a matching Title in our array
  const nominatedMovie = nominationlist.find((o) => o.Title === movies.Title)
  // This triggers the disabled prop only if the movie exists in the array
  let nominationListDisabled = !!nominatedMovie

  if (nominationlist.length === 5) {
    nominationListDisabled = true
  }
  return (
    <div>
      <AppProvider>
        <div style={{ width: '50%', marginLeft: '120px', paddingBottom: '20px', paddingTop: '10px' }}>
          <MediaCard
            title={movies.Title}
            size='small'
            primaryAction={{
              disabled: nominationListDisabled,
              content: 'Nominate',
              onAction: () => {
                nominatemovie(movies)
              }
            }}
            description={movies.Year}
          >
            <img
              alt='Movie Poster'
              width='100%'
              height='100%'
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              src={movies.Poster}
            />
          </MediaCard>
        </div>
      </AppProvider>
    </div>
  )
}

export default MovieCard
