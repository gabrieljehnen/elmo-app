import React from "react";
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation }) => {
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.background}>
            <View style={styles.textAndLogo}>
                <Image style={styles.logo} source={require('../../assets/elmo-logo.png')}/>
                <Text style={styles.title}> Sistema de coleta de casos de uso </Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.boxTitle}> Meu acesso </Text>
                <TextInput style={styles.input} placeholder="E-mail"/>
                <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>
                

                <TouchableOpacity style={styles.button} placeholder="teste">
                    <Text style={styles.textButton}> ENTRAR AGORA </Text>
                </TouchableOpacity>

                </View>

                <View style={styles.footer}>
                    <Text style={{ fontSize: 15, color: '#ddd', textAlign: 'center', paddingBottom: 10}}> Não possui uma conta? </Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Cadastro')}}> 
                        <Text style={styles.registerText}> REALIZAR CADASTRO </Text>
                    </TouchableOpacity>
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
        top: 150,
        backgroundColor: '#fff',
        width: '90%', 
        borderRadius: 16,
        paddingBottom: 70,
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

        width: 150,
        resizeMode: 'contain'
    },

    input: {

        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: '5%',
        marginRight: '5%',
        height: '25%',
        width: '90%',
        marginTop: 20,
        paddingLeft: 20
    },

    button: {

        borderRadius: 15,
        backgroundColor: '#024A96',
        width: '90%',
        height: 35,
        marginTop: 30,
        marginLeft: '5%',
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
        paddingTop: 5
    },

    footer: {
        position: 'absolute',
        top: 530,
        left: '28%',
    },

    registerText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }

})