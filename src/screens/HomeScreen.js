import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {

    const [food, setFood] = useState('candy')

    const changeFood = (foodGet) => {
        setFood(foodGet)
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>{food}</Text>
            <StatusBar style="auto" />
            <Button
                title='go to next page'
                onPress={() => props.navigation.push('HomeDetailScreen', { name: 'nick', functionA: (arg) => changeFood(arg) })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
