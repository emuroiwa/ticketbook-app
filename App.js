/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
//import your components 
import EventList from './components/EventList';
//Export default the stateless component 
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.eventListHeader}>Ticket Book</Text>
    </ScrollView>
  )
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  eventListHeader: {
    fontSize: 20,
    color: '#000',
    alignItems: 'center'
  }
});