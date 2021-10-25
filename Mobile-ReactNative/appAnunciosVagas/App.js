import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/header/header'
import Anuncios from './src/anuncios/anuncios';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Anuncios />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
  },
});
