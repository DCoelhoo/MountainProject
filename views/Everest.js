import React from 'react';
import { Text, View, ImageBackground, Button, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import styles from "./styles/Smartphone"
import everest from "../assets/everest.jpg"

export default function Everest({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.logoContainer}>
                <Image source={everest} style={styles.logo}></Image>
                <Text style={styles.avatarLogo}>Everest</Text>
            </View>

            <View style={styles.inputField}>
                <View>
                    <Text style={{ textAlign: "justify" }}>Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point. Its elevation of 8,848.86 m was most recently established in 2020 by the Nepali and Chinese authorities.</Text>
                </View>
            </View>

            <View style={styles.inputField}>
                <View>
                    <Text style={styles.inputLbl} >Elevation</Text>
                    <Text>8848.86 m (29031.7 ft)</Text>
                </View>
            </View>

            {/* Bts */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => { Linking.openURL('https://en.wikipedia.org/wiki/Mount_Everest'); }}>
                    <Text style={styles.loginLbl}>Read More</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.loginLbl}>Go Back!</Text>
                </TouchableOpacity>


            </View>

        </View>
    );
}