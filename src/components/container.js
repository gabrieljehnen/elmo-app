import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Container({children}){

    return(
        <SafeAreaView style={style.container}>{children}</SafeAreaView>
    )
}

const style = StyleSheet.create({

    container: {
        width: '95%',
        margin: '2%',
        backgroundColor: '#fff'
    }
})