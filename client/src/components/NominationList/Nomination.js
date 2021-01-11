import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { MediaCard, Layout, AppProvider, Card } from '@shopify/polaris'

function Nomination () {
  const { nominationlist, removeNomination } = useContext(GlobalContext)

  return (
    <div>
      <AppProvider>
        <Layout>
          <Layout.Section>
            {nominationlist.length > 0 ? (
              <div>
                {nominationlist.map((movie, index) => (
                  <Card key={index}>
                    <MediaCard
                      title={movie.title}
                      size='small'
                      primaryAction={{
                        content: 'Remove Nominee',
                        onAction: () => {
                          removeNomination(movie.Title)
                        }
                      }}
                      description={movie.Year}
                    >
                      <img
                        alt='Movie Poster'
                        width='100%'
                        height='100%'
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        src={movie.Poster}
                      />
                    </MediaCard>
                  </Card>
                ))}
              </div>
            ) : (
              <h2 style={{ fontSize: '20px', marginLeft: '55px', width: '70%' }}>There are currently no movies in your nomination list! Nominate some by searching up your favourite movies and clicking the nominate button to add them!</h2>
            )}
          </Layout.Section>
        </Layout>
      </AppProvider>
    </div>
  )
}

export default Nomination
