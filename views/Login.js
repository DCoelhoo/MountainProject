import React from 'react';
import { Text, View, ImageBackground, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles/Smartphone"
import imageBG from "../assets/bg.jpeg"
import logo from "../assets/logo1.png"
import { Feather } from '@expo/vector-icons';

export default function Login({navigation}){
    return (
        <ImageBackground source = {imageBG} style = {styles.bgContainer} blurRadius={5}>
            <View style={styles.logoContainer}>
                <Image source = {logo} style={styles.logo}></Image>
                <Text style={styles.textLogo}>Welcome</Text>
            </View>

            {/* Username */}
            <View style={styles.inputField}>
            <Feather name="mail" size={24} color="black" style={styles.inputIcon} />
                <View>
                    <Text style={styles.inputLbl}>Email</Text>
                    <TextInput placeholder = "example.mail@gmail.com"></TextInput>
                </View>
            </View>

            {/* Password */}
            <View style={styles.inputField}>
            <Feather name="lock" size={24} color="black" style={styles.inputIcon} />
                <View>
                    <Text style={styles.inputLbl} >Password</Text>
                    <TextInput placeholder = "*****************" secureTextEntry={true}></TextInput>
                </View>
            </View>
            

            {/* LoginBtn */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Home")}> 
                    <Text style={styles.loginLbl}>Login</Text>
                </TouchableOpacity>
            

            {/* RegisterBtn */}

                <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Register")}> 
                    <Text style={styles.loginLbl}>Sign up for Free</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotBtn} onPress={()=>navigation.navigate("ForgotPass")}> 
                    <Text style={styles.forgotLbl}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>


        
        </ImageBackground>
    );
}