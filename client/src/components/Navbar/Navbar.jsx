import React, { useCallback, useState } from 'react'
import { AppProvider, VisuallyHidden, ActionList, Frame, TopBar } from '@shopify/polaris'


export default function Navbar () {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  )

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    []
  )

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false)
    setSearchValue('')
  }, [])

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value)
    setIsSearchActive(value.length > 0)
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
        'https://imgur.com/U8oee3C',
      accessibilityLabel: 'The Shoppies'
    }
  }

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Edit user Setting' }]
        }
      ]}
      name='Dharma'
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  )

  const searchResultsMarkup = (
    <ActionList
      items={[{ content: 'This should drop movie list items' }]}
    />
  )

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder='Search'
      showFocusBorder
    />
  )

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <VisuallyHidden>Secondary menu</VisuallyHidden>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [{ content: 'Edit User Settings' }]
        }
      ]}
    />
  )

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
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
