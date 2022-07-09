import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'
import { useMappedState, useDispatch } from 'redux-react-hook';
import { changeName } from '../redux/action';


export default function ProfileScreen(props) {

    const [name, setName] = useState('')
    const myNewName = useMappedState(state => state.newName)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     loadStorage()
    //     console.log('useEffect')
    // }, [])

    // const loadStorage = async () => {
    //     let nameGet = await StorageHelper.getMySetting('name')
    //     console.log('loadStorage！')
    //     if (nameGet) {// if(name!== null)
    //         setName(nameGet)
    //     }
    // }
    // const changeName = async () => {
    //     try {
    //         await StorageHelper.setMySetting('name', name)
    //     } catch (error) {
    //         console.error(error);
    //     }

    // }
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <StatusBar style="auto" />
            <TextInput
                maxLength={10}
                style={{ height: 50, width: 300, borderWidth: 5, borderColor: 'darkgrey', backgroundColor: 'grey', fontSize: 28, textAlign: 'center', color: 'white' }}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            {/* <Text>Hello {name}!</Text> */}
            <Text>Hello {myNewName}</Text>
            {/* <Button
                title='設定名字'
                onPress={() => changeName()}
            /> */}
            <Button
                title='redux 設定名字'
                onPress={() => dispatch(changeName(name))}
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
