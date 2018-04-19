import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// react-redux hoc
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <View>
        {
          this.props.counter.showError
          &&
          <Text style={styles.dangerZone}>Can't reset</Text>
        }
      <Text>{this.props.counter.currentValue}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dangerZone: {
    color: 'red',
    fontSize: 20,
  }
});

const mapStateToProps = (state) => ({
  counter: state.counterReducer,
});

export default connect(mapStateToProps)(Counter);