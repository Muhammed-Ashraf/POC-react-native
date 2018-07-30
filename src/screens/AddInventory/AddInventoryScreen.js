import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './AddInventoryStyle';

class AddInventoryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => this.props.navigation.toggleDrawer()}>Add inventory </Text>
            </View>);
    }
}
export default AddInventoryScreen;
