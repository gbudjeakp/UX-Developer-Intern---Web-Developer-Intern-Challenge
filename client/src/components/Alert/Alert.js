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
            title='Your shipping label is ready to print.'
            status='success'
            action={{ content: 'Print label' }}
            onDismiss={() => {}}
          />
        </AppProvider>

      )}
    </div>
  )
}

export default Alert
