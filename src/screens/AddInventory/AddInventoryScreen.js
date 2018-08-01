import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import HeaderBar from '../../components/HeaderBar/HeaderBar';

import styles from './AddInventoryStyle';

const logo = require('../../assets/logo-next-billion-white.png');

class AddInventoryScreen extends Component {

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
                <HeaderBar onMenuPressed={() => this.onMenuPressed()} title='Add Inventory' logo={logo} />
                <Text onPress={() => this.props.navigation.openDrawer()}>Add Inventory</Text>

            </View>
        );
    }
}
export default AddInventoryScreen;
