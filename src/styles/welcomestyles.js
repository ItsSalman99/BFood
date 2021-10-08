import { StyleSheet } from "react-native";

const welcomestyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fd4c3a',
    },
    logoContainer:{
        flex: 0.1,
        padding: 20,
    },
    logo:{
        width: 60,
        height: 60
    },
    heading:{
        flex: 0.3,
        padding: 25
    },
    h1:{
        color: 'white',
        fontSize: 60,
        fontWeight: "bold",
    },
    imgContainer:{
        flex: 0.6,
        alignItems: "center"
    },
    img:{
        width: 250,
        height: 250,
    },
    btn:{
        width: '80%',
        marginTop: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
    },
    btnText:{
        color: '#fd4c3a',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",   
    }
})

export default welcomestyles