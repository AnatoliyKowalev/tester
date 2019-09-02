import initialState from './../store/store'
// import { setLightMode } from './../actions/lightMode'

let switchMode = (state = initialState, action) => {
  switch (action.type) {
    case 'LIGHT_MODE':
      {
        return { ...state, chartHeight: action.payload }
      }
  }
  return state
}

export default switchMode