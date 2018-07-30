import React, { Component } from 'react';
import { View, Text, StatusBar, Image, Alert, TouchableHighlight } from 'react-native';

import styles from './checkoutStyle';

const menuicon = require('../../assets/icon-menu.png');

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Checkout',
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTintColor: 'grey',
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center'
        },


        headerLeft: (
            <TouchableHighlight onPress={() => Alert.alert('adad', 'qdqdqd')}>
                <Image source={menuicon} />
            </TouchableHighlight>

        ),

        headerRight: (<View />)

    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="black"
                />
                <Text onPress={() => this.props.navigation.openDrawer()}>Checkout</Text>

            </View>
        );
    }
}
export default HomeScreen; 
