import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from './Home';
import Perfil from './Perfil';
import Relatos from './Relatos';
import Suporte from './Suporte';
import FAQ from './FAQ';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function HomeStackScreen(){

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HomeStack" component={Home}/>
            <Stack.Screen name="FAQ" component={FAQ}/>
        </Stack.Navigator>
    )
}


function PerfilStackScreen(){

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Perfil" component={Perfil}/>
        </Stack.Navigator>
    )
}

function RelatosStackScreen(){

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Relatos" component={Relatos}/>
        </Stack.Navigator>
    )
}

function SuporteStackScreen(){

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Suporte" component={Suporte}/>
        </Stack.Navigator>
    )
}

function BottomTab(){

    return(

        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen options={{
            tabBarIcon: (tabInfo) => {
                return(                         
                    <FontAwesome5 name="home" color={tabInfo.focused ? "#024A96" : "#8e8e93"} size={25, 25}/> )}
            }} name="HomeTab" component={HomeStackScreen}/>


            <Tab.Screen options={{
            tabBarIcon: (tabInfo) => {
                return(                         
                    <FontAwesome5 name="user-alt" color={tabInfo.focused ? "#024A96" : "#8e8e93"} size={25, 25}/> )}
            }} name="PerfilTab" component={PerfilStackScreen}/>


            <Tab.Screen options={{
            tabBarIcon: (tabInfo) => {
                return(                         
                    <FontAwesome5 name="clipboard-check" color={tabInfo.focused ? "#024A96" : "#8e8e93"} size={25, 25}/> )}
            }} name="RelatosTab" component={RelatosStackScreen}/>


            <Tab.Screen options={{
            tabBarIcon: (tabInfo) => {
                return(                         
                    <FontAwesome5 name="star" color={tabInfo.focused ? "#024A96" : "#8e8e93"} size={25, 25}/> )}
            }} name="SuporteTab" component={SuporteStackScreen}/>

        </Tab.Navigator>
    )
}

const UserView = () => {
    
    return(
        <View style={{backgroundColor: '#fff', height: 200 }}>
            <Image source={require('../assets/images.png')} style={{ width: 100, height: 100, marginLeft: '25%', marginTop: 20 }} />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20}}> Usuário anônimo </Text>
            <Text style={{ textAlign: 'center', fontSize: 16}}> Profissional da Saúde </Text>
        </View>
    )
}

const CustomDrawer = (props) => {

    return(
        <View style={{flex: 1}}>
            <UserView/>
            <DrawerContentScrollView>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <DrawerItem
                label="Sair"
                icon={({color, size}) => (
                    <Entypo name="log-out" color={color} size={size} ></Entypo>
                )}/>
        </View>
    )
}


export default function MainStack(){

    return(

        <Drawer.Navigator screenOptions={{
            drawerStyle: { width: 240 },
            swipeEdgeWidth: 300,
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: '#024A96'
            }
        }} drawerContent={(props) => <CustomDrawer {...props}/>}>

            <Drawer.Screen name="HomeDrawer" options={{ 
                    drawerIcon: ({color, size}) => (
                        <FontAwesome5 name="home" color={color} size={size}></FontAwesome5>
                    ),
                    title: 'SCCU ELMO',
                    drawerLabel: 'Home',
                    headerStyle: { backgroundColor: '#024A96'},
                    headerTintColor: '#fff',
                     
                }} component={HomeStackScreen}/>

            <Drawer.Screen name="Perfil" options={{
                drawerIcon: ({color, size}) => (
                    <FontAwesome5 name="user-alt" color={color} size={size} ></FontAwesome5>
                )}} component={PerfilStackScreen}/>

            <Drawer.Screen name="Relatos" options={{
                drawerIcon: ({color, size}) => (
                    <FontAwesome5 name="clipboard-check" color={color} size={size} ></FontAwesome5>
                )}} component={RelatosStackScreen}/>

            <Drawer.Screen name="Suporte" options={{
                drawerIcon: ({color, size}) => (
                    <Entypo name="star" color={color} size={size} ></Entypo>
                )}} component={SuporteStackScreen}/>

        </Drawer.Navigator>
    )
}