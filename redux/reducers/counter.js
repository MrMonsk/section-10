import actionTypes from '../../constants/actionTypes';

const merge = (prev, next) => Object.assign({}, prev, next);

const INITIAL_STATE = {
  currentValue: 0,
  showError: false,
}

const counterReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return merge(state, { currentValue: state.currentValue + action.payload });
    case actionTypes.DECREMENT_COUNTER:
      return merge(state, { currentValue: state.currentValue - action.payload});
    case actionTypes.RESET_COUNTER:
      return INITIAL_STATE;
    case actionTypes.SHOW_ERROR:
      return merge(state, { showError: true });
    default:
      return state;
  }
}

export default counterReducer;