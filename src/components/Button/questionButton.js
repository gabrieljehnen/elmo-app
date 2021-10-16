import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo';


export default function QuestionButton ({text, text2}){
    return(

        <TouchableOpacity>
                <View style={styles.box}>
                    <View style={styles.iconAndText}>
                        <Entypo size={25, 25} color={'#024A96'} name="chat"/>
                        <Text style={styles.question}> { text } </Text> 
                    </View>
                    <View style={{width: '90%', marginLeft: '5%', marginRight: '5%', marginBottom: '5%'}}>
                    { (text2 === null) ? <Text style={styles.verResposta}> VER RESPOSTA </Text> : <Text style={styles.answer}> {text2} </Text>}
                    </View>
            </View>     

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    iconAndText: {
        paddingVertical: 15,
        marginLeft: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: '3%',
        marginRight: '3%'
    },

    box: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 20,
        borderWidth: 2,
        borderRadius: 14,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#fff',
        shadowRadius: 16,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 10,
        marginBottom: 7,
        marginTop: 10,
    },

    question: {
        fontSize: 16,
        paddingLeft: 10,
        fontWeight: 'bold',
        paddingRight: 20,
    },
    answer: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify'
    },

    verResposta: {
        color: '#024A96',
        fontWeight: 'bold',
        textAlign: 'right'
    }
})