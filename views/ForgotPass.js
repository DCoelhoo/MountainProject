import React from 'react';
import { Text, View, ImageBackground, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles/Smartphone"
import imageBG from "../assets/bg.jpeg"
import logo from "../assets/logo1.png"
import { Feather } from '@expo/vector-icons';

export default function ForgotPass({navigation}){
    return (
        <ImageBackground source = {imageBG} style = {styles.bgContainer} blurRadius={5}>
            <View style={styles.logoContainer}>
                <Image source = {logo} style={styles.logo}></Image>
                <Text style={styles.textLogo}>Forgot Password</Text>
            </View>

            <Text>Enter your email, and you'll be able to reset your Password.</Text>

            {/* Email */}
            <View style={styles.inputField}>
            <Feather name="mail" size={24} color="black" style={styles.inputIcon} />
                <View>
                    <Text style={styles.inputLbl}>Email</Text>
                    <TextInput placeholder = "example.mail@gmail.com"></TextInput>
                </View>
            </View>
            

            {/* Btn */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("ResetPass")}> 
                    <Text style={styles.loginLbl}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
  
        
        </ImageBackground>
    );
}