import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Usuario(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>Nome: {props.nome}</Text>
            <Text style={styles.text}>Cargo: {props.cargo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 160,
        backgroundColor: '#023047'
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }
});

export default Usuario;