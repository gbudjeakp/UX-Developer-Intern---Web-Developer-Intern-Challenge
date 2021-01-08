import React from 'react'
import { Card, Layout, MediaCard, Page, AppProvider, Button } from '@shopify/polaris'

function MovieList ({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <AppProvider key={index}>
            <Page title='Vote For Favourite Movie for the Shoppies Award' separator>
              <Layout>
                <Layout.Section>
                  <Card sectioned>
                    {/* <MediaCard
                      title={movie.Title}
                      primaryAction={{
                        content: 'Nominate',
                        onAction: () => {}
                      }}
                      description={`${movie.Year}`}
                      size='small'
                    >
                      <img
                        alt='movie poster'
                        width='100%'
                        height='100%'
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        src={movie.Poster}
                      />
                    </MediaCard> */}
                    <img src={movie.Poster} alt='poster' />
                    <h1>{movie.Title}</h1>
                    <h3>{movie.Year}</h3>
                    <Button>Nominate</Button>
                  </Card>
                </Layout.Section>
              </Layout>

            </Page>
          </AppProvider>

        )
      })}
    </div>
  )
}

export default MovieList
