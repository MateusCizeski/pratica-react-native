import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

export default function App() {
  const [status, setStatus] = useState(false);
  return (
    <View style={styles.container}>
      <Switch 
        value={status}
        onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  }
});