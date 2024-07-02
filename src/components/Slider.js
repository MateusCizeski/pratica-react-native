import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [valor, setValor] = useState(50);
  return (
    <View style={styles.container}>
      <Slider 
        minimumValue={0}
        maximumValue={100}
        value={valor}
        onValueChange={ (valorSelecionado) => setValor(valorSelecionado) }
        minimumTrackTintColor='#000fff'
        maximumTrackTintColor='#ff0000'
      />
      <Text style={{textAlign: 'center', fontSize: 25}}>Valor: {valor.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  }
});