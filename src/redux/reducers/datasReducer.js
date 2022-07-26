import { initState } from '../initState'

export const datasReducer = (state = initState, action) => {
  const { type , payload } = action
  switch (type) {
    case 'SET_DATA':
      return [ ...state, payload ]
    default:
      return state;
  }
}
