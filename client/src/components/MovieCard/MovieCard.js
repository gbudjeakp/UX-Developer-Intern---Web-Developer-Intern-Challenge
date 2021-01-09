import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { AppProvider, MediaCard, Layout, Card } from '@shopify/polaris'

function MovieCard ({ movies }) {
  const { nominatemovie } = useContext(GlobalContext)
  return (
    <div>
      <AppProvider>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <MediaCard
                portrait='true'
                size='small'
                title={movies.Title}
                primaryAction={{
                  content: 'Nominate',
                  onAction: () => {
                    nominatemovie(movies)
                  }
                }}
                description={movies.Year}
              >
                <img
                  alt='Movie Poster'
                  width='25%'
                  height='50%'
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  src={movies.Poster}
                />
              </MediaCard>
            </Card>
          </Layout.Section>
        </Layout>

      </AppProvider>
    </div>
  )
}

export default MovieCard
