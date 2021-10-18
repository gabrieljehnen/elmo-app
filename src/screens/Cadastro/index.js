import React from "react";
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo';

export default ({ navigation }) => {
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.background}>
            <View style={styles.textAndLogo}>
                <Image style={styles.logo} source={require('../../assets/elmo-logo.png')}/>
                <Text style={styles.title}> Sistema de coleta de casos de uso </Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.boxTitle}> Realizar cadastro </Text>
                <TextInput style={styles.input} placeholder="E-mail"/>
                <TextInput style={styles.input} placeholder="Nome"/>
                <TextInput style={styles.input} placeholder="Profissão"/>
                <TextInput keyboardType = 'numeric' style={styles.input} placeholder="Telefone"/>
                <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>

                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.button} placeholder="teste">
                    <Text style={styles.textButton}> VOLTAR </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} placeholder="teste">
                        <Text style={styles.textButton}> CADASTRAR </Text>
                    </TouchableOpacity>
                </View>
                </View>
         
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#024A96',
        alignItems: 'center'
    },

    box: {
        position: 'absolute',
        top: 110,
        backgroundColor: '#fff',
        width: '90%', 
        borderRadius: 16,
        paddingBottom: 100,
    },

    textAndLogo: {

        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

    },

    title: {

        color: '#fff',
        fontSize: 20,
        textAlign: 'left',
        width: 180,
        paddingLeft: 15
    },

    logo: {

        width: 100,
        resizeMode: 'contain'
    },

    input: {

        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: '5%',
        marginRight: '5%',
        height: '13%',
        width: '90%',
        marginTop: 20,
        paddingLeft: 20
    },

    button: {

        borderRadius: 15,
        backgroundColor: '#024A96',
        width: 150,
        margin: 10,
        height: 40,
        marginTop: 30,
        marginLeft: '5%',
    },

    buttons: {  
        alignItems: 'center',
        marginLeft: '1%',
        flexDirection: "row",
    },  

    boxTitle:{

        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 20,
        textAlign: 'left'
    },

    textButton: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 7
    },

    goBack: {
        position: 'absolute',
        top: 700,
        left: '28%',
    },

    loginText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
        textAlign: 'center'
    }

})