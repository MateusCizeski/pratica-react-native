import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    async function loadData() {
      await AsyncStorage.getItem('@nome').then((value) => {
        setNome(value);
      });
    }

    loadData();
  }, []);

  async function gravarNome() {
    await AsyncStorage.setItem('@nome', input);
    setNome(input);
  }

  // const letrasNome = nome.length;
  const letrasNome = useMemo(() => {
    return nome.length;
  }, [nome]);

  function chamarInput() {
    // inputRef.current.focus();
    inputRef.current.clear();
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput 
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
          ref={inputRef}
        />
        <TouchableOpacity onPress={gravarNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>Possui: {letrasNome} letras</Text>

      <TouchableOpacity onPress={ chamarInput }>
        <Text>Chamar input</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao: {
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome: {
    marginTop: 15,
    fontSize: 30
  }

});