import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const [feed, setFeed] = useState([
    { id: 1, nome: 'Mateus', idade: 23, email: 'mateus@mateus.com' },
    { id: 2, nome: 'Mateus 2', idade: 23, email: 'mateus2@mateus2.com' },
    { id: 3, nome: 'Mateus 3', idade: 33, email: 'mateus3@mateus3.com' },
    { id: 4, nome: 'Mateus 4', idade: 43, email: 'mateus4@mateus4.com' },
    { id: 5, nome: 'Mateus 5', idade: 53, email: 'mateus5@mateus5.com' },
    { id: 6, nome: 'Mateus 6', idade: 63, email: 'mateus6@mateus6.com' },
  ]);
  return (
    <View style={styles.container}>
     
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item.id }
        data={feed}
        renderItem={ ({ item }) => <Pessoa data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  areaPessoa: {
    backgroundColor: '#121212',
    height: 200,
    marginBottom: 15
  }
});

function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={{ color: '#fff' }}>{props.data.nome}</Text>
      <Text style={{ color: '#fff' }}>{props.data.email}</Text>
    </View>
  )
}