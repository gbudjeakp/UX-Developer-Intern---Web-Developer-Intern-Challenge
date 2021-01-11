import React, { useCallback, useState } from 'react'
import { AppProvider, Frame, TopBar } from '@shopify/polaris'
import Alert from '../Alert/Alert'

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
    }
  }

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
      searchField={searchFieldMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  )

  return (
    <div style={{ height: '50px' }}>
      <AppProvider
        theme={theme}
      >
        <Alert />
        <Frame topBar={topBarMarkup} />
      </AppProvider>
    </div>
  )
}
