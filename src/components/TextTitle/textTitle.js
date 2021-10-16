import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TextTitle({text, text2}){

    return(
        <View>
            <Text style={styles.h1}> {text} </Text>
            <Text style={styles.label}> {text2} </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    h1: {
        fontSize: 28,
        margin: '2%'
    },
    label: {
        fontSize: 16,
        color: 'gray',
        margin: '2%',
        paddingBottom: 10
    }
})