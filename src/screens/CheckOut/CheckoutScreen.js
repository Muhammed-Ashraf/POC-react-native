import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './checkoutStyle';
import HeaderBar from '../../components/HeaderBar/HeaderBar';

const logo = require('../../assets/logo-next-billion-white.png');

class CheckoutScreen extends Component {

    onMenuPressed = () => {
        this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="black"
                />
                <HeaderBar onMenuPressed={() => this.onMenuPressed()} title='Checkout' logo={logo} />
                <Text onPress={() => this.props.navigation.openDrawer()}>Checkout</Text>

            </View>
        );
    }
}
export default CheckoutScreen; 
