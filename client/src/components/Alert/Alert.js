import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { AppProvider, Banner } from '@shopify/polaris'
function Alert () {
  const { nominationlist } = useContext(GlobalContext)
  return (
    <div>
      {(nominationlist.length === 5) && (
        <AppProvider>
          <Banner
            title='You have now added five movies to your nomination list.'
            status='success'
            // onDismiss={() => {}}
          />
        </AppProvider>

      )}
    </div>
  )
}

export default Alert
