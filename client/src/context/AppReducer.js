
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_NOMINATION_LIST':
      return {
        ...state,
        nominationlist: [action.payload, ...state.nominationlist]
      }
    case 'REMOVE_FROM_NOMINATIONLIST':
      return {
        ...state,
        nominationlist: state.nominationlist.filter(movies => movies.Title !== action.payload)
      }
    default:
      return state
  }
}
