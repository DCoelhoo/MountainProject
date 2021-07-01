import * as React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles/Smartphone"
import everest from "../assets/everest.jpg"
import alps from "../assets/alps.png"
import himalayas from "../assets/himalayas.jpg"
import avatar from "../assets/avatar1.png"
import { Feather } from '@expo/vector-icons';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TouchableOpacity style={styles.feedBtn} onPress={() => navigation.navigate("Everest")}>
        <Text style={styles.loginLbl}>Everest</Text>
        <Image source={everest} style={styles.logo}></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.feedBtn} onPress={() => navigation.navigate("Alps")}>
        <Text style={styles.loginLbl}>Alps</Text>
        <Image source={alps} style={styles.logo}></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.feedBtn} onPress={() => navigation.navigate("Himalayas")}>
        <Text style={styles.loginLbl}>Himalayas</Text>
        <Image source={himalayas} style={styles.logo}></Image>
      </TouchableOpacity>

    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.logoContainer}>
        <Image source={avatar} style={styles.logo}></Image>
        <Text style={styles.avatarLogo}>Diogo Gonçalves</Text>
      </View>

      {/* Name */}
      <View style={styles.inputField}>
        <Feather name="user" size={24} color="black" style={styles.inputIcon} />
        <View>
          <Text style={styles.inputLbl}>Name</Text>
          <Text>Diogo Gonçalves</Text>

        </View>
      </View>

      {/* Username */}
      <View style={styles.inputField}>
        <Feather name="mail" size={24} color="black" style={styles.inputIcon} />
        <View>
          <Text style={styles.inputLbl}>Email</Text>
          <Text>email.example@gmail.com</Text>

        </View>
      </View>

      {/* Password */}
      <View style={styles.inputField}>
        <Feather name="lock" size={24} color="black" style={styles.inputIcon} />
        <View>
          <Text style={styles.inputLbl} >Password</Text>
          <Text>*********************</Text>
        </View>
      </View>

      {/* ChangePass */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("ForgotPass")}>
          <Text style={styles.loginLbl}>Change Password</Text>
        </TouchableOpacity>


      {/* ChangeEmail */}
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("ResetEmail")}>
        <Text style={styles.loginLbl}>Change Email</Text>
      </TouchableOpacity>

      
      </View>

    </View>
  );
}

function Logout({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Are you sure you want to leave?</Text>
      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLbl}>Yes, I want to leave!</Text>
      </TouchableOpacity>
    </View>

  );
}

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (

    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#fead2a',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout-variant" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

