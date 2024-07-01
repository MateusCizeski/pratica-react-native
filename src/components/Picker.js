import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    { key: 1, nome: 'Golf 1.6', valor: 62.000 },
    { key: 2, nome: 'Saveiro 1.6', valor: 29.000 },
    { key: 3, nome: 'Gol 1.0', valor: 25.000 },
    { key: 4, nome: 'BMW 120i', valor: 109.000 },
    { key: 4, nome: 'Uno 1.0', valor: 12.000 },
  ]);

  let carrosItem = carros.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome}/>
  })

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={carroSelecionado}
        onValueChange={ (itemValue, itemIndex) => setCarroSelecionado(itemValue) }
      >
        {carrosItem}
      </Picker>

      <Text style={styles.carros}>Carro: {carros[carroSelecionado].nome}</Text>
      <Text style={styles.carros}>Valor: {carros[carroSelecionado].valor.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  carros: {

  }
});