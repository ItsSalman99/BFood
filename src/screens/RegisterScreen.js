import React, { useState, useEffect } from 'react';
import {View, Text, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Separator from '../components/Separator';
import loginregisterstyles from '../styles/loginregisterstyles';


const RegisterScreen = ({navigation}) => {

    return ( 
        <View style={loginregisterstyles.container}>
            <View style={loginregisterstyles.view1}>
                <Image source={require('../assets/logo.png')} style={loginregisterstyles.logo}/>
                <Text style={loginregisterstyles.h1}>Create new {'\n'}account</Text>
                <TextInput style={loginregisterstyles.input} placeholder="Enter your name ..."/>
                    <TextInput style={loginregisterstyles.input} placeholder="Enter your email ..."/>
                    <TextInput style={loginregisterstyles.input} placeholder="Enter your password ..."/>
                    <TextInput style={loginregisterstyles.input} placeholder="Repeat above password ..."/>
                    <TouchableOpacity style={loginregisterstyles.btn}>
                        <Text style={loginregisterstyles.btnText}>Go</Text>
                    </TouchableOpacity>
                    <Separator title="Already have an account"/>
                    <TouchableOpacity style={loginregisterstyles.btn} onPress={()=> navigation.navigate('loginScreen')}>
                        <Text style={loginregisterstyles.btnText}>Sign in</Text>
                    </TouchableOpacity>
            </View>
        </View>      
    )
}

export default RegisterScreen