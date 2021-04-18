import React from 'react';
import ajax from '../ajax';

import {View, Text, StyleSheet} from 'react-native';

class App extends React.Component {
  state = {
    deals: [],
  };
  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState(() => {
      return {deals};
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bakesale</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default App;
