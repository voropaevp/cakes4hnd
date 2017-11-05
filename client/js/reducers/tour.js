import {
  TOUR_STEP
} from '../actions/tour'

export const initialState = {
  stage: 0
}

function Tour (state = initialState, action) {
  switch (action.type) {
    case TOUR_STEP:
      return Object.assign({}, state, {stage: state.stage + 1})
    default:
      return state
  }
}

export default Tour
