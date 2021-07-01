import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
    bgContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20

    },
    textLogo:{
        color: "white",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 5,
        opacity: 0.7
    },
    avatarLogo:{
        color: "black",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 5,
        opacity: 0.7
    },
    logo:{
        width: 120,
        height: 120,
    },
    inputLbl: {
        fontWeight: Platform.OS === "ios" ? "700" : "bold",
        letterSpacing: 1,
        marginTop: 10,
        justifyContent: "center",
        alignContent: "center",

    },
    inputIcon: {
        paddingRight: 15,
        paddingBottom: 5,
        marginTop: 20
    },
    inputField:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        width: Dimensions.get("screen").width * 0.7,
        alignItems: "center",
        marginBottom: 5,
    },
    infoField:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        width: Dimensions.get("screen").width * 0.7,
        alignItems: "center",
        marginBottom: 5,
    },
    btnContainer:{
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    loginLbl:{
        width: Dimensions.get("screen").width * 0.7,
        padding: 20,
        textAlign: "center",
        fontSize: 18,
        color: "white",
        fontWeight: Platform.OS === "ios" ? "700" : "bold",
    },
    forgotLbl:{
        width: Dimensions.get("screen").width * 0.7,
        padding: 20,
        textAlign: "center",
        fontSize: 16,
        color: "white",
        fontWeight: Platform.OS === "ios" ? "700" : "bold",
    },
    forgotBtn:{
        textAlign: "center",
        justifyContent: "center",
    },
    feedBtn:{
        width: Dimensions.get("screen").width * 0.8,
        height: 200,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(181, 185, 189, 0.5)",
        borderRadius: 15,
        marginTop: 30
    },
    logoutBtn:{
        width: 200,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(181, 185, 189, 0.5)",
        borderRadius: 15,
        marginBottom: 20 ,
        marginTop: 50
    },
    loginBtn:{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(181, 185, 189, 0.5)",
        borderRadius: 15,
        marginBottom: 20 ,
    }
});