import React, { useCallback, useState } from 'react'
import { AppProvider, Frame, TopBar } from '@shopify/polaris'


export default function Navbar ({ searchResult, setSearchResult }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  )

  // This clears up the search bar
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchResult('')
  }, [])

  // This handles the search Change
  const handleSearchChange = useCallback((value) => {
    setSearchResult(value)
  }, [])

  const handleNavigationToggle = useCallback(() => {
    console.log('toggle navigation visibility')
  }, [])

  const theme = {
    colors: {
      topBar: {
        background: '#95BF47'
      }
    },
    logo: {
      width: 124,
      topBarSource:
        '',
      accessibilityLabel: 'The Shoppies'
    }
  }

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Edit User Setting' }, { content: 'Logout' }]
        }
      ]}
      name='Dharma'
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  )

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchResult}
      placeholder='Search'
      showFocusBorder
    />
  )

  

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchField={searchFieldMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  )

  return (
    <div style={{ height: '250px' }}>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Avatar: {
              label: 'Avatar',
              labelWithInitials: 'Avatar with initials {initials}'
            },
            Frame: { skipToContent: 'Skip to content' },
            TopBar: {
              toggleMenuLabel: 'Toggle menu',
              SearchField: {
                clearButtonLabel: 'Clear',
                search: 'Search'
              }
            }
          }
        }}
      >
        <Frame topBar={topBarMarkup} />
      </AppProvider>
    </div>
  )
}
