import React, { useState } from 'react';
import { FlatList, Text ,StyleSheet,View} from 'react-native';
import Cabecalho from './cabecalho';
import ItensListados from './novosItens/ItensListados';
import AdcionarItem from './novosItens/AdcionarItens';

export default function App() {

  const [lista, setLista] = useState([]);

  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(texto => texto.key != key);
      }
    )
  }

  const submeterInformacao = (texto, preco) => {
    setLista((prevLista) => {
      return [
        { texto: texto, preco: preco, key: Math.random().toString() },
        ...prevLista
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
    

  return (

    <View style={styles.container}>
      <Cabecalho />
      <View style={styles.conteudo}>

        <AdcionarItem funcao={submeterInformacao} />

        <View style={styles.estiloLista}>
         <FlatList
          data={lista}
          renderItem={({item}) => (
            <ItensListados props={item} funcao={apertarItem}/>
          )}
          />
        </View>
        <View style={styles.rodape}>
          <Text>Valor Total: R$ {calcularTotal()}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##e0e5e5',
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
  rodape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});
