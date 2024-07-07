import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('montou')
  }, [contador])

  return (
    <View style={styles.container}>
      <Button title='Aumentar' onPress={() => setContador(contador + 1)} />
        <Text style={{ fontSize: 30 }}>{contador}</Text>
      <Button title='Diminuir' onPress={() => setContador(contador - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});