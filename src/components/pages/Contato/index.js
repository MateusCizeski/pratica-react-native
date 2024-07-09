import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, StackActions } from "@react-navigation/native";

export default function Contato() {
    const navigation = useNavigation();

    function handleHome() {
        navigation.dispatch(StackActions.popToTop());
    }

    return (
        <View style={styles.container}>
            <Text>contato</Text>
            <Button title="voltar home" onPress={ handleHome }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});