import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";

export default ({ navigation }) => {

    const [logado, setLogado] = useState(true)

    function alertLogin(){

        Alert.alert('Para realizar um relato de uso é necessário fazer login.', 'Deseja fazer o login?', [
            {
                text: 'Voltar',
                onPress(){
                    navigation.navigate('Perfil')
                }
            },
            {
                text: 'Fazer login',
                onPress(){
                    navigation.navigate('Perfil')
                }
            }
        ])
    }

    return(
        <View>{ logado ? <Text>Logado</Text> : alertLogin() }</View>
    )

}