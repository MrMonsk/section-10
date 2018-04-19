import actionTypes from '../../constants/actionTypes';

const incrementCounter = (incrementer) => ({
  type: actionTypes.INCREMENT_COUNTER,
  payload: incrementer,
});

const decrementCounter = (decrementer) => ({
  type: actionTypes.DECREMENT_COUNTER,
  payload: decrementer,
});

const resetCounter = () => ({
  type: actionTypes.RESET_COUNTER,
});

const showError = () => ({
  type: actionTypes.SHOW_ERROR,
})

const conditionalReset = () => (
  (dispatch, getState) => {
    const { currentValue } = getState().counterReducer;

    if (currentValue >= 10) {
      dispatch(resetCounter());
      return;
    }

    dispatch(showError());    
  }
)

export default {
  incrementCounter,
  decrementCounter,
  resetCounter,
  conditionalReset,
}
