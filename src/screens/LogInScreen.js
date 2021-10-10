import React from 'react';
import {View, Text, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Separator from '../components/Separator';
import loginregisterstyles from '../styles/loginregisterstyles';


const LogInScreen = ({navigation}) => {
    return (
        <View style={loginregisterstyles.container}>
            <View style={loginregisterstyles.view1}>
                <Image source={require('../assets/logo.png')} style={loginregisterstyles.logo}/>
                <Text style={loginregisterstyles.h1}>Welcome Back</Text>
                <Text>Log in with your credentials</Text>
                    <TextInput style={loginregisterstyles.input} placeholder="Enter your email ..."/>
                    <TextInput style={loginregisterstyles.input} placeholder="Enter your password ..."/>
                    <TouchableOpacity style={loginregisterstyles.btn}>
                        <Text style={loginregisterstyles.btnText}>Go</Text>
                    </TouchableOpacity>
                    <Separator title="Don't have an account"/>
                    <TouchableOpacity style={loginregisterstyles.btn} onPress={()=> navigation.navigate('registerScreen')}>
                        <Text style={loginregisterstyles.btnText}>Register</Text>
                    </TouchableOpacity>
            </View>
        </View>        
    )
}

export default LogInScreen