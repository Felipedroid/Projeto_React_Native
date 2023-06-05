import React, { useState } from 'react';
import { FlatList, Text, Button, StyleSheet, View } from 'react-native';
import Cabecalho from './cabecalho';
import ItensListados from './novosItens/ItensListados';
import AdcionarItem from './novosItens/AdcionarItens';
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
    navigation.navigate('Details', { total: calcularTotal() });
  };

  return (
    <View style={styles.container}>
      <Cabecalho />
      <View style={styles.conteudo}>
        <AdcionarItem funcao={submeterInformacao} />
        <Button title="TOTAL" onPress={navigateToDetails} />
        <FlatList
          data={lista}
          renderItem={({ item }) => (
            <ItensListados props={item} funcao={apertarItem} />
          )}
        />
      </View>
    </View>
  );
}

function DetailsScreen({ route }) {
  const { total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Valor Total: R$ {total}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={AppScreen}
          options={{
            headerTitle: 'Minha Lista',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: 'TOTAL',
            headerTitleAlign: 'center',
          }}
        />
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
    width:'100%',
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
