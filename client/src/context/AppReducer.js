
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_NOMINATION_LIST':
      return {
        ...state,
        nominationlist: [action.payload, ...state.nominationlist]
      }
    default:
      return state
  }
}
