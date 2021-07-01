import React from 'react';
import { Text, View, ImageBackground, Button, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import alps from "../assets/alps.png"
import styles from "./styles/Smartphone"

export default function Alps({navigation}){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.logoContainer}>
            <Image source={alps} style={styles.logo}></Image>
            <Text style={styles.avatarLogo}>Alps</Text>
        </View>

        <View style={styles.inputField}>
            <View>
                <Text style={{ textAlign: "justify" }}>The Alps are the highest and most extensive mountain range system that lies entirely in Europe, stretching approximately 1200 km across eight Alpine countries (from west to east): France, Switzerland, Monaco, Italy, Liechtenstein, Austria, Germany, and Slovenia. </Text>
            </View>
        </View>

        <View style={styles.inputField}>
            <View>
                <Text style={styles.inputLbl} >Elevation</Text>
                <Text>4808.73 m (15,776.7 ft)</Text>
            </View>
        </View>

        {/* Bts */}
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => { Linking.openURL('https://en.wikipedia.org/wiki/Alps'); }}>
                <Text style={styles.loginLbl}>Read More</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.loginLbl}>Go Back!</Text>
            </TouchableOpacity>


        </View>

    </View>
    );
}