import React from 'react';
import { Text, View, ImageBackground, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles/Smartphone"
import imageBG from "../assets/bg.jpeg"
import logo from "../assets/logo1.png"
import { Feather } from '@expo/vector-icons';

export default function ResetPass({navigation}){
    return (
        <ImageBackground source = {imageBG} style = {styles.bgContainer} blurRadius={5}>
            <View style={styles.logoContainer}>
                <Image source = {logo} style={styles.logo}></Image>
                <Text style={styles.textLogo}>Reset your Password</Text>
            </View>

            {/* Password */}
            <View style={styles.inputField}>
            <Feather name="lock" size={24} color="black" style={styles.inputIcon} />
                <View>
                    <Text style={styles.inputLbl} >New Password</Text>
                    <TextInput placeholder = "*****************" secureTextEntry={true}></TextInput>
                </View>
            </View>
            
            {/* PasswordConf */}
            <View style={styles.inputField}>
            <Feather name="lock" size={24} color="black" style={styles.inputIcon} />
                <View>
                    <Text style={styles.inputLbl} >Confirm Password</Text>
                    <TextInput placeholder = "*****************" secureTextEntry={true}></TextInput>
                </View>
            </View>

            {/* ResetPass */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Login")}> 
                    <Text style={styles.loginLbl}>Reset Password</Text>
                </TouchableOpacity>
            </View>
  
        
        </ImageBackground>
    );
}