import React, { useState } from 'react';
import { FlatList, Text, StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppScreen({ navigation }) {
  const [lista, setLista] = useState([]);

  const apertarItem = (key) => {
    setLista((prevLista) => {
      return prevLista.filter((texto) => texto.key !== key);
    });
  };

  const submeterInformacao = (texto, preco) => {
    setLista((prevLista) => {
      return [
        { texto: texto, preco: preco, key: Math.random().toString() },
        ...prevLista,
      ];
    });
  };

  const calcularTotal = () => {
    let total = 0;
    lista.forEach((item) => {
      total += parseFloat(item.preco);
    });
    return total.toFixed(2);
  };

  const navigateToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Button title="Detalhes" onPress={navigateToDetails} />
        <FlatList
          data={lista}
          renderItem={({ item }) => (
            <Text>{item.texto}: R$ {item.preco}</Text>
          )}
        />
        <Text style={styles.total}>Valor Total: R$ {calcularTotal()}</Text>
      </View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.detailsText}>Detalhes da Tela</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AppScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo: {
    flex: 1,
    padding: 40,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  detailsText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
