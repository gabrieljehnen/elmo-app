import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({ navigation }) => {

    const [selected, setSelected] = useState();
    var date = new Date();

    const cur_date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

    return(
        <View style={{backgroundColor: "#fff"}}>
            <Text style={styles.title}> Seus Dados </Text>

            <View>
                <TextInput style={styles.input} placeholder="Relator do Caso"/>
                <TextInput style={styles.input} placeholder="Local"/>
                <TextInput style={styles.input} value={cur_date} editable={false}/>
                
                <Picker selectedValue={selected} onValueChange={(itemValue, itemIndex) =>
                    setSelected(itemValue)
                } style={styles.picker}>

                    <Picker.Item label="Questionário" value="Questionario" />
                    <Picker.Item label="Sugestão" value="Sugestao" />
                    <Picker.Item label="Elogio" value="Elogio" />
                    <Picker.Item label="Outro" value="Outro" />
                </Picker>

                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonVoltar}> 
                        <Text style={styles.textButton}> VOLTAR </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonProximo}> 
                        <Text style={styles.textButton}> PROXIMO </Text>
                    </TouchableOpacity>
                </View>
                

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        margin: '4%',
        paddingBottom: 10
    },

    input: {
        color: '#000',
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        marginLeft: '5%',
        height: 45,
        marginBottom: '6%',
        paddingLeft: 15,
    },

    picker: {
        width: '95%',
        marginLeft: '5%',
        borderColor: 'black',
        borderWidth: 1, 
        color: 'black',
    },

    buttonsView: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: 'center',
        width: '90%',
        margin: '5%',
        height: '20%'
    },

    buttonProximo: {
        backgroundColor: '#024A96',
        width: 125,
        height: 40,
        borderRadius: 30,
        alignSelf:'flex-end',
    },

    buttonVoltar: {
        backgroundColor: '#024A96',
        width: 125,
        height: 40,
        borderRadius: 30,
        alignSelf:'flex-end',
        marginRight: 20
    },

    textButton: {
        paddingVertical: 7,
        fontSize: 15,
        color: '#fff',
        textAlign: 'center'
    },

})