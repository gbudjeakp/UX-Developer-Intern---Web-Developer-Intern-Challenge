import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Link } from 'react-router-dom'
import { MediaCard, Layout, AppProvider } from '@shopify/polaris'

function Nomination () {
  const { nominationlist, removeNomination } = useContext(GlobalContext)

  return (
    <div>
      <AppProvider>
        <Link to='/'>Home</Link>
        <Layout>
          <Layout.Section>
            {nominationlist.length > 0 ? (
              <div style={{ width: '50%', marginLeft: '120px', paddingBottom: '20px', paddingTop: '10px' }}>
                {nominationlist.map((movie, index) => (

                  <MediaCard
                    key={index}
                    title={movie.Title}
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
