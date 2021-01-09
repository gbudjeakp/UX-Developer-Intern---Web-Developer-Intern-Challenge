
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'NOMINATE_MOVIE_FOR_SHOPPIES ':
      return {
        ...state,
        NominationList: [action.payload, ...state.nominationlist]
      }
    default:
      return state
  }
}
