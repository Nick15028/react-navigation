import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';

var MOCKED_DATA = [
    {
        id: '1',
        note: '恭喜您！達成環島100次',
        date: '2020/01/28 14:00'
    },
    {
        id: '2',
        note: '您的會員身分認證，已經審核通過！',
        date: '2020/02/02 12:00'
    },
    {
        id: '3',
        note: '撥款通知：本公司已將款項$123456撥入到您的指定銀行帳戶',
        date: '2020/02/17 14:00'
    },
    {
        id: '4',
        note: '恭喜您！達成慢跑10次',
        date: '2020/04/02 14:00'
    },
    {
        id: '5',
        note: '您的會員身分認證，已經審核通過！',
        date: '2020/04/06 12:00'
    },
    {
        id: '6',
        note: '撥款通知：本公司已將款項$123456撥入到您的指定銀行帳戶',
        date: '2020/05/17 14:00'
    },
    {
        id: '7',
        note: '恭喜您！達成環島100次',
        date: '2020/05/28 16:00'
    },
    {
        id: '8',
        note: '您的會員身分認證，已經審核通過！',
        date: '2020/02/02 12:00'
    },
    {
        id: '9',
        note: '撥款通知：本公司已將款項$123456撥入到您的指定銀行帳戶',
        date: '2020/02/17 14:00'
    },
    {
        id: '10',
        note: '恭喜您！達成環島100次',
        date: '2020/01/28 14:00'
    },
    {
        id: '11',
        note: '您的會員身分認證，已經審核通過！',
        date: '2020/02/02 12:00'
    },
    {
        id: '12',
        note: '撥款通知：本公司已將款項$123456撥入到您的指定銀行帳戶',
        date: '2020/02/17 14:00'
    }

]

export default function HomeScreen(props) {

    const [food, setFood] = useState('candy')
    const [dataSource, setDataSource] = useState([])

    const changeFood = (foodGet) => {
        setFood(foodGet)
    }

    useEffect(() => {
        var book = MOCKED_DATA
        setDataSource(book)
    })

    const showNoticeDetail = (cases) => {
        props.navigation.push('HomeDetailScreen', { passProps: cases })
    }

    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
                <View>
                    <View style={styles.MainView}>
                        {/* <image/> */}
                        <View style={{ flex: 1 }}>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8 }}>
                                {cases.note}
                            </Text>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ marginTop: 8, fontSize: 14, marginBottom: 8 }}>
                                {cases.date}
                            </Text>
                        </View>
                        <Image source={require('../../assets/ic_arrow_right.png')} style={styles.image} />
                    </View>
                    <View style={styles.seperator} />

                </View>
            </TouchableOpacity >
        )
    }

    return (
        <View>
            {/* <Text>Home Screen</Text>
            <Text>{food}</Text>
            <StatusBar style="auto" />
            <Button
                title='go to next page'
                onPress={() => props.navigation.push('HomeDetailScreen', { name: 'nick', functionA: (arg) => changeFood(arg) })}
            /> */}
            <FlatList
                data={dataSource}
                renderItem={cases => renderBook(cases.item)}
                keyExtractor={cases => cases.id}
                style={{ backgroundColor: 'white' }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    MainView: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8
    },
    seperator: {
        height: 1,
        backgroundColor: '#dddd'
    },
    image: {
        width: 20,
        height: 30
    }
});
