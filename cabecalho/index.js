import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Cabecalho(props) {
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>ITENS E PREÇOS </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#3E54AC'
    },
    titulo: {

        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})