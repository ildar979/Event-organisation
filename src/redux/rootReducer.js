import { combineReducers } from 'redux'
// import { inputsDateReducer } from './reducers/inputsDateReducer'
// import { datesReducer } from './reducers/datesReducer'
import { datasReducer } from './reducers/datasReducer'
import { inputsReducer } from './reducers/inputsReducer'

export const rootReducer = combineReducers({
  // dates: datesReducer,
  // inputsDate: inputsDateReducer,
  datas: datasReducer,
  inputs: inputsReducer
})
