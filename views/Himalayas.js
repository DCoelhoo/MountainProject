import React from 'react';
import { Text, View, ImageBackground, Button, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import styles from "./styles/Smartphone"
import himalayas from "../assets/himalayas.jpg"

export default function Himalayas({navigation}){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.logoContainer}>
            <Image source={himalayas} style={styles.logo}></Image>
            <Text style={styles.avatarLogo}>Himalayas</Text>
        </View>

        <View style={styles.inputField}>
            <View>
                <Text style={{ textAlign: "justify" }}>The Himalayas, or Himalaya are a mountain range in South and East Asia separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has many of Earth's highest peaks, including the highest, Mount Everest, at the border between Nepal and China.</Text>
            </View>
        </View>

        <View style={styles.inputField}>
            <View>
                <Text style={styles.inputLbl} >Elevation</Text>
                <Text>	8848.86 m (29031.7 ft)</Text>
            </View>
        </View>

        {/* Bts */}
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => { Linking.openURL('https://en.wikipedia.org/wiki/Himalayas'); }}>
                <Text style={styles.loginLbl}>Read More</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.loginLbl}>Go Back!</Text>
            </TouchableOpacity>


        </View>

    </View>
    );
}