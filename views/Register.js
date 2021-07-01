import React from 'react';
import { Text, View, ImageBackground, Button, Image, TextInput, TouchableOpacity  } from 'react-native';
import logo from "../assets/logo1.png"
import { Feather } from '@expo/vector-icons';
import styles from "./styles/Smartphone"
import imageBG from "../assets/bg.jpeg"

export default function Register({ navigation }){
    return(
        <ImageBackground source = {imageBG} style = {styles.bgContainer} blurRadius={5}>
            <View style={styles.logoContainer}>
                <Image source = {logo} style={styles.logo}></Image>
                <Text style={styles.textLogo}>Register Page</Text>
            </View>

            {/* Name */}
            <View style={styles.inputField}>
            <Feather name="user" size={24} color="black" style={styles.inputIcon} />
                <View>
                    <Text style={styles.inputLbl}>Name</Text>
                    <TextInput placeholder = "Your name here"></TextInput>
                </View>
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

            {/* PasswordConf */}
            <View style={styles.inputField}>
            <Feather name="lock" size={24} color="black" style={styles.inputIcon} />
                <View>
                    <Text style={styles.inputLbl} >Confirm Password</Text>
                    <TextInput placeholder = "*****************" secureTextEntry={true}></TextInput>
                </View>
            </View>
            

            {/* LoginBtn */}
            <View style={styles.btnContainer}>
                
                <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Home")}> 
                    <Text style={styles.loginLbl}>Register</Text>
                </TouchableOpacity>
            

            {/* RegisterBtn */}
                <Text>Already have an account?</Text>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Login")}> 
                    <Text style={styles.loginLbl}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
