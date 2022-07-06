import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <StatusBar style="auto" />
            <Button
                title='go to profile detail screen'
                onPress={() => props.navigation.push('ProfileDetailScreen')}
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
