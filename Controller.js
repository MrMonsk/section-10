import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Counter from './Counter';
import counterActions from './redux/actions/counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Controller extends React.Component {
  static propTypes = {
    actions: {
      incrementCounter: PropTypes.func,
      decrementCounter: PropTypes.func,
      resetCounter: PropTypes.func,
      conditionalReset: PropTypes.func,
    },
  }

  state = {
    incrementer: 3,
    decrementer: 1,
  }

  _handleIncrement = () => {
    this.props.actions.incrementCounter(this.state.incrementer);
  }

  _handleDecrement = () => {
    this.props.actions.decrementCounter(this.state.decrementer);
  }

  _handleReset = () => {
    this.props.actions.resetCounter();
  }

  _handleConditionalReset = () => {
    this.props.actions.conditionalReset();
  }

  render() {
    return (
      <View style={styles.container}>
        <Counter />
        <Button onPress={this._handleIncrement} title="+3" />
        <Button onPress={this._handleDecrement} title="-1" />
        <Button onPress={this._handleReset} title="Reset" />
        <Button onPress={this._handleConditionalReset} title="Conditional Reset" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      incrementCounter: counterActions.incrementCounter,
      decrementCounter: counterActions.decrementCounter,
      resetCounter: counterActions.resetCounter,
      conditionalReset: counterActions.conditionalReset,
    },
    dispatch,
  ),
});

export default connect(null, mapDispatchToProps)(Controller);
