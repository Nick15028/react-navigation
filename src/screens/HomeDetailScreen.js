import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeDetailScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Home Detail Screen</Text>
            <StatusBar style="auto" />
            <Button
                title='go back'
                onPress={() => props.navigation.pop()} />
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
