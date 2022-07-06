import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeDetailScreen(props) {

    // const name = props.route.params.name || 'nothing get'
    const passProps = props.route.params.passProps || 'nothing get'
    return (
        <View style={styles.container}>
            <Text>Home Detail Screen</Text>
            <Text>{passProps.note}</Text>
            <StatusBar style="auto" />
            {/* <Button
                title='go back'
                onPress={() => props.navigation.pop()} />
            <Text>{name}</Text>
            <Button
                title='change first page food'
                onPress={() => props.route.params.functionA('apple')}
            /> */}
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
