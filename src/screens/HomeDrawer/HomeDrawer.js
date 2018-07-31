import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, Platform, Image } from 'react-native';

import DrawerItem from '../../components/DrawerItem/DrawerItem';

import styles from './homeDrawerStyle';

const imageSource = require('../../assets/banner-drawer.jpg');

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
                <Image
                    source={imageSource}
                    style={styles.banner}
                />
                <ScrollView>

                    {/* <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={() => navigation.navigate('Checkout')}>
                                Checkout
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={() => navigation.navigate('AddInventory')}>
                                Add Inventory
                            </Text>
                        </View> */}

                    <DrawerItem
                        onPressed={() => navigation.navigate('Checkout')}
                        title='Checkout'
                        icon={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'
                        }
                    />
                    <DrawerItem
                        onPressed={() => navigation.navigate('AddInventory')}
                        title=' Add Inventory'
                        icon={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    />

                </ScrollView>
            </View>
        );
    }
}


export default SideMenu;
