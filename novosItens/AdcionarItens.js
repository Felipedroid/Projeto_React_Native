import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AdcionarItem({ funcao }) {
  const [texto, setTexto] = useState('');
  const [preco, setPreco] = useState('');

  const adicionarItem = () => {
    funcao(texto, preco);
    setTexto('');
    setPreco('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do item"
        value={texto}
        onChangeText={(valor) => setTexto(valor)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o preço do item"
        value={preco}
        onChangeText={(valor) => setPreco(valor)}
        keyboardType="numeric"
      />
      <Button title="Adicionar" onPress={adicionarItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});
