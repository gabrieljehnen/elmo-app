import React from "react";
import { View, Text, StatusBar, Image, Button } from "react-native";
import FlatButton from '../../components/Button/button';
import Container from '../../components/container';
import TextTitle from "../../components/TextTitle/textTitle";
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
 
export default ({navigation}) => {
    

    return(
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <Container>
            <StatusBar backgroundColor="#013C79"/>
        
            <TextTitle text="Sistema de coleta de casos de uso do ELMO" text2="Sua ajuda é muito importante para a evolução deste projeto. "> </TextTitle>
        

            <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
                <FlatButton text="Perguntas frequentes" text2="VER PERGUNTAS" name="information"/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
                <FlatButton text="Relato de uso" text2="FAZER UM RELATO" name="clipboard-check"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
                <FlatButton text="Dados estatísticos" text2="VISUALIZAR DADOS" name="chart-bar"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
                <FlatButton text="Manual de operações" text2="ACESSAR MANUAL" name="text-box-multiple"/>
            </TouchableOpacity>
                </Container>
            </View>
    )
    

 
}
