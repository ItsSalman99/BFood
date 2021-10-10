import React from "react";
import { View,Text } from "react-native";

const Separator = (props) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
                <Text style={{width: 200, textAlign: 'center'}}>{props.title}</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
    )
}

export default Separator;