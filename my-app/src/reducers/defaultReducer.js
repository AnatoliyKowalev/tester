import {initialState} from './../components/chartContent/Chart'

export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'LIGHT_MODE':
    {
    	 return { ...state, chartHeight: action.payload }
    }
     
  }
  return state
}

