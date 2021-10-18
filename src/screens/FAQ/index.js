import React, { useState } from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FlatButton from "../../components/Button/button";
import Container from "../../components/container";
import TextTitle from "../../components/TextTitle/textTitle";
import QuestionButton from "../../components/Button/questionButton";

export default () => {

    const [duvidas, setDuvidas] = useState([

        { pergunta: 'Posso utilizar um objeto acochoado dentro do emlo para deixar os pacientes mais confortáveis?',
          resposta: 'Sim, você pode utilizar recursos para deixar o uso do Elmo mais confortável. '
          +'Mas é importante o cuidado na escolha por objetos limpos e não perfurantes, '
          +'recomendamos a utilização de uma toalha.'  },

        { pergunta: 'O que é o Lorem Ipsum?',
          resposta: 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. ' +
          'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500,'+
           'quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só '+
           'sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. '+
           'Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, '+
           'e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.'  },

        { pergunta: 'O que é o Lorem Ipsum?',
          resposta: 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. ' +
          'O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500,'+
           'quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só '+
           'sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. '+
           'Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, '+
           'e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.'  }
        ])

    const [clicado, setClicado] = useState(Array.from({ length: duvidas.length }, _ => false))

    return(
            <View style={{backgroundColor: '#fff', flex: 1}}>
              <ScrollView style={{width: '95%', margin: '2%'}}>
                <Container>
                <TextTitle text="Perguntas frequentes (FAQ)" text2="Sua dúvida já pode ter sido respondida, busque entre as principais respostas."> </TextTitle>
                    {     
                         duvidas.map((item, index) => {
                            const [selectedActivity, setSelectedActivity] = useState(false)
                            return(
                                <View key={index}>
                                    <TouchableOpacity onPress={() => setSelectedActivity(prev => !prev)}> 
                                    <QuestionButton text={item.pergunta} text2={ selectedActivity ? item.resposta : null }/> 
                                    </TouchableOpacity>
                                </View>
                            )
                        })} 
                        </Container>
                  </ScrollView>
            </View>

    )
}