import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'
// initial state
const initialState = {
  nominationlist: []
}

// creating context and exporting it
export const GlobalContext = createContext(initialState)

// Making a provider component
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions button
  const nominatemovie = (movies) => {
    dispatch({ type: 'NOMINATE_MOVIE_FOR_SHOPPIES', payload: movies })
  }
  return (
    <GlobalContext.Provider value={
      { NoinationList: state.nominationlist, nominatemovie }
    }
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
