import * as React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import ISSLocationScreen from './iss'
import MeteorScreen from './meteor'


export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate("MeteorScreen")}>
                    Meteor Tracker
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=> this.props.react.navigation.navigate("ISSLocationScreen")}>
                    ISS Loaction Tracker
                </TouchableOpacity>
            </View>
        )
    }
}