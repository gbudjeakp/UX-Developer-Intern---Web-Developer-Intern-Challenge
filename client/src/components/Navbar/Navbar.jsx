/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { AppProvider, Frame, TopBar } from '@shopify/polaris'


export default function Navbar ({ searchResult, setSearchResult }) {
  // This clears up the search bar
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchResult('')
  })

  // This handles the search Change
  const handleSearchChange = useCallback((value) => {
    setSearchResult(value)
  })

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
      searchField={searchFieldMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
    />
  )

  return (
    <div style={{ height: '100px' }}>
      <AppProvider
        theme={theme}
      >
        {/* Searfield will not display if the end point wnds with the nominations route */}
        {window.location.pathname !== '/nominations' ? <Frame topBar={topBarMarkup} /> : null}
      </AppProvider>
    </div>
  )
}
