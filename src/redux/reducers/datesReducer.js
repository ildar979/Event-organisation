import { initState } from '../initState'

export const datesReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_DATE':
      return [ ...state, payload ]
    default:
      return state;
  }
}
