import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    function navegaDetalhes() {
        navigation.navigate('Detalhes', {
            nome: 'mateus',
            email: 'mateus@teste.com'
        })
    }

    return (
        <View style={styles.container}>
            <Text>home</Text>
            <Button title="Ir para detalhes" onPress={ navegaDetalhes }/>
            <Button title="Ir para detalhes" onPress={() => navigation.openDrawer() }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000'
    }
});