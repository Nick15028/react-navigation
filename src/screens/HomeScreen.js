import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <StatusBar style="auto" />
            <Button
                title='go to next page'
                onPress={() => props.navigation.push('HomeDetailScreen')}
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
