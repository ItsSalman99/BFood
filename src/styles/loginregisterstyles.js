import { StyleSheet } from "react-native";

const loginregisterstyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    view1:{
        flex: 0.5,
        padding: 20,
    },
    logo:{
        width: 60,
        height: 60
    },
    h1: {
        marginTop: 30,
        color: 'black',
        fontSize: 40,
    },
    input:{
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        marginTop: 20
    },
    btn:{
        backgroundColor: '#fd4c3a',
        marginTop: 20,
        padding: 15,
        borderRadius: 20,
    },
    btnText:{
        color: 'white',
        fontSize: 20,
        textAlign: "center"
    }
})

export default loginregisterstyles