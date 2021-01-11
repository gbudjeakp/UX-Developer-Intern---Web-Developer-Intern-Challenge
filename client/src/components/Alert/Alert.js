import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { AppProvider, Banner } from '@shopify/polaris'
function Alert () {
  const { nominationlist } = useContext(GlobalContext)
  return (
    <div>
      {(nominationlist.length === 5) && (
        <AppProvider>
          <div style={{ paddingBottm: '90px' }}>
            <Banner
              title='You have now selected your top 5 nominations. Want to change your top 5? click on nomination list and remove unwanted nominations'
              status='success'
            />
          </div>
        </AppProvider>

      )}
    </div>
  )
}

export default Alert
