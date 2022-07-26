import { initState } from "../initState";

export const inputsDateReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'DATE_TYPING':
      return { ...state, ...payload }
    default:
      return state;
  }
}
