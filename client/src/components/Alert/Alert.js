import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { AppProvider, Banner } from '@shopify/polaris'
function Alert () {
  const { nominationlist } = useContext(GlobalContext)
  return (
    <div>
      {(nominationlist.length === 5) && (
        <AppProvider>
          <div>
            <Banner
              title='You have now selected your top 5 nominations. Note that you can only nominate your favourite 5 movies. If you are not happy with your selection, click the "Nominations List" button above to remove selections'
              status='success'
            />
          </div>
        </AppProvider>

      )}
    </div>
  )
}

export default Alert
