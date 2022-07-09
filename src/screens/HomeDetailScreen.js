import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function HomeDetailScreen(props) {

    // const name = props.route.params.name || 'nothing get'
    const passProps = props.route.params.passProps || 'nothing get'
    return (
        <View style={styles.container}>
            {/* <Text>Home Detail Screen</Text> */}
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
            <Text>{passProps.animal_kind + " " + passProps.animal_colour}</Text>
            <Text>{passProps.animal_place}</Text>
            <Text>{passProps.shelter_tel}</Text>
            <Image
                source={{ uri: passProps.album_file ? passProps.album_file : 'https://zxcv.cx/Images/404.png' }}
                style={styles.thumbnail}
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
    thumbnail: {
        width: 100,
        height: 120,
        marginRight: 10
    }
});
