import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FlatButton({text, text2, name}){

    return(
        <TouchableOpacity>
            <View style={style.containerStyle}>
                <View style={style.iconAndText}>
                    <MaterialComunity size={25, 25} name={name} color={'#024A96'}/>
                    <Text style={style.title}> { text } </Text> 
                </View>
                <Text style={style.info}> { text2 } </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({

    iconAndText: {
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },  
    
    containerStyle: {

        backgroundColor: '#fff',
        flex: 1,
        paddingBottom: 90,
        paddingTop: 20,
        paddingLeft: 20,
        borderWidth: 2,
        borderRadius: 14,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#fff',
        shadowRadius: 16,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 10,
        marginLeft: 10,
        marginBottom: 14,
        marginRight: 10,
      },

    title: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingLeft: 7
        
    },

    info: {
        fontSize: 16,
        color: '#024A96',
        fontWeight: 'bold',
        letterSpacing: 1,
        marginLeft: '46%',
        marginTop: '6%'
    }
})

