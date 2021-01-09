import React from 'react'
import { AppProvider, MediaCard, Layout, Card } from '@shopify/polaris'

function MovieCard ({ movies }) {
  return (
    <div>
      <AppProvider>
        <Layout>
          <Layout.Section>
            <Card sectioned style={{ backgroundColor: 'Black' }}>
              <MediaCard
                size='small'
                title={movies.Title}
                primaryAction={{
                  content: 'Nominate',
                  onAction: () => {}
                }}
                description={movies.Year}
              >
                <img
                  alt=''
                  width='100%'
                  height='100%'
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
