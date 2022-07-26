import { initState } from '../initState'

export const inputsReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'DATA_TYPING':
      return { ...state, ...payload };
    case 'INPUTS_CLEAR':
        return { ...payload }
    default:
      return state;
  }
}
