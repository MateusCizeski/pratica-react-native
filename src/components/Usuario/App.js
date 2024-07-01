import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Usuario from './src/components/Usuario';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Sejá bem vindo!</Text>
      <Usuario nome={'mateus'} cargo={'programador'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  texto: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 35,
    fontWeight: 'bold'
  }
});