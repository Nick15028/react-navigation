import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'


export default function ProfileScreen(props) {

    const [myBookCount, setMyBookCount] = useState(0)
    const [myBookListName, setMyBookListName] = useState([])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            loadStorage()
        })
        return unsubscribe

    }, [myBookCount])

    const loadStorage = async () => {
        let bookGet = await StorageHelper.getMySetting('myList')

        // 法一
        // let a = JSON.parse(bookGet)
        // let newArray = []
        // a.forEach((thing) => {
        //     newArray.push(thing.animal_colour + '的' + thing.animal_kind)
        // });

        // setMyBookCount(a.length)
        // setMyBookListName(newArray)

        // 法二
        let a = JSON.parse(bookGet)
        setMyBookCount(a.length)
        setMyBookListName(a)

    }



    // const [name, setName] = useState('')

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
            <Text>我收藏了{myBookCount}個寵物認養</Text>
            {/* 法一渲染 */}
            {/* {
                myBookListName.map((pet, index) => {
                    return (<Text key={index}>認養寵物為：{pet}</Text>)
                })
            } */}

            {/* 法二渲染 */}
            {
                myBookListName.map((pet, index) => {
                    return (<Text key={index}>認養寵物為：{pet.animal_colour + '的' + pet.animal_kind}</Text>)
                })
            }

            {/* <StatusBar style="auto" />
            <TextInput
                maxLength={10}
                style={{ height: 50, width: 300, borderWidth: 5, borderColor: 'darkgrey', backgroundColor: 'grey', fontSize: 28, textAlign: 'center', color: 'white' }}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Text>Hello {name}!</Text>
            <Button
                title='設定名字'
                onPress={() => changeName()}
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
