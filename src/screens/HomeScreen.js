import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'


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
        // var book = MOCKED_DATA
        // setDataSource(book)
        fetchData()
    }, [])

    useEffect(() => {
        let getAll = []
        dataSource.map(a => {
            if (a.addToMyList === true) {
                getAll.push(a)
            }
        })
        saveToStorage(getAll)
    })

    const saveToStorage = async (getMyBooks) => {
        try {
            await StorageHelper.setMySetting('myList', JSON.stringify(getMyBooks))
        } catch (err) {
            console.log(err)
        }

    }

    const fetchData = () => {
        const REQUEST_URL = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL'

        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                setDataSource(responseData)
            })
            .catch((err) => {
                console.log('error 是 ', err)
            })
    }

    const showNoticeDetail = (cases) => {
        props.navigation.push('HomeDetailScreen', { passProps: cases })
    }


    const pressRow = (cases) => {
        const newDatas = dataSource.map(a => {
            let copyA = { ...a }
            if (copyA.animal_id === cases.animal_id) {
                copyA.addToMyList = !copyA.addToMyList
            }
            return copyA
        })
        setDataSource(newDatas)
    }

    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
                <View>
                    <View style={styles.MainView}>
                        {/* <image/> */}
                        <TouchableOpacity onPress={() => pressRow(cases)}>
                            {cases.addToMyList === true ? <Image style={styles.imageCheck} source={require('../images/ck2.png')} /> : <Image style={styles.imageCheck} source={require('../images/ck1.png')} />}
                        </TouchableOpacity>
                        <Image
                            source={{ uri: cases.album_file ? cases.album_file : 'https://zxcv.cx/Images/404.png' }}
                            style={styles.thumbnail}
                        />
                        <View style={{ flex: 1 }}>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8 }}>
                                {cases.animal_place}
                            </Text>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ marginTop: 8, fontSize: 14, marginBottom: 8 }}>
                                {cases.animal_bodytype === 'MEDIUM' ? '中型' :
                                    cases.animal_bodytype === 'SMALL' ? '小型' : '大型'}{"/" + cases.animal_colour + '的' + cases.animal_kind}
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
                keyExtractor={cases => cases.animal_id.toString()}
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
    },
    thumbnail: {
        width: 50,
        height: 60,
        marginRight: 10
    },
    imageCheck: {
        width: 25,
        height: 25,
        marginRight: 10
    }
});
