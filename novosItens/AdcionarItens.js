import React, {useState} from "react"
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AdcionarItem({funcao}) {
    const [texto, setTexto] = useState('');
    const [preco, setPreco] = useState('');

    const pegarMudanca = (val) => {
        funcao(texto, preco);
        setTexto(val);
        setPreco(val);
    }

    return (
        <View style={styles.cabecalho}>

            <TextInput
                style={styles.input}
                placeholder="Digite o item"
                value={texto}
                onChangeText={(valor) => setTexto(valor)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o preço"
                value={preco}
                onChangeText={(valor) => setPreco(valor)}
            />

            <Button 
                title="Adicionar" 
                onPress={pegarMudanca} 
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});