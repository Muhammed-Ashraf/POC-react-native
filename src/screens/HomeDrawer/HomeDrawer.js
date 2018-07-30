import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';

import styles from './homeDrawerStyle';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={() => navigation.navigate('Checkout')}>
                                Checkout
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={() => navigation.navigate('AddInventory')}>
                                Add Inventory
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default SideMenu;
