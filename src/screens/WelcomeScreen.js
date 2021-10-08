import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import welcomestyles from '../styles/welcomestyles';


const WelcomeScreen = () => {
    return (
        <View style={welcomestyles.container}>
            <View style={welcomestyles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={welcomestyles.logo}/>
            </View>
            <View style={welcomestyles.heading}>
                <Text style={welcomestyles.h1}>Food For Everyone</Text>
            </View>
            <View style={welcomestyles.imgContainer}>
                <Image source={require('../assets/food-service.png')} style={welcomestyles.img}/>
                <TouchableOpacity style={welcomestyles.btn}>
                    <Text style={welcomestyles.btnText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeScreen;