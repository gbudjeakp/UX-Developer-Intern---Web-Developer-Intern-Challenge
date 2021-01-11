import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'
// initial state
const initialState = {
  nominationlist: window.localStorage.getItem('nominationlist') ? JSON.parse(window.localStorage.getItem('nominationlist')) : []
}

// creating context and exporting it
export const GlobalContext = createContext(initialState)

// Making a provider component
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    window.localStorage.setItem('nominationlist', JSON.stringify(state.nominationlist))
  })

  // Actions button
  const nominatemovie = (movies) => {
    dispatch({ type: 'ADD_TO_NOMINATION_LIST', payload: movies })
  }

 
  const removeNomination = (Title) => {
    dispatch({ type: 'REMOVE_FROM_NOMINATIONLIST', payload: Title })
  }

  return (
    <GlobalContext.Provider value={
      {
        nominationlist: state.nominationlist,
        nominatemovie,
        removeNomination
    
      }
    }
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
