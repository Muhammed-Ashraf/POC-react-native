import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, Platform, ImageBackground, Text, Image } from 'react-native';

import DrawerItem from '../../components/DrawerItem/DrawerItem';

import styles from './homeDrawerStyle';

const banner = require('../../assets/banner-drawer.jpg');
const dummyPic = require('../../assets/dummy-photo.png');

class SideMenu extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={banner}
                    style={styles.banner}
                >
                    <Image
                        source={dummyPic}
                        style={styles.profilePic}
                    />
                    <Text style={[styles.email, { marginBottom: 4 }]}>Charlie Austin</Text>
                    <Text style={styles.email}>austin@gmail.com</Text>
                </ImageBackground>
                <ScrollView>

                    <DrawerItem
                        onPressed={() => {
                            navigation.navigate('Checkout');
                            this.props.navigation.toggleDrawer();
                        }}
                        title='Checkout'
                        icon={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'
                        }
                    />
                    <DrawerItem
                        onPressed={() => {
                            navigation.navigate('ViewInventory');
                            this.props.navigation.toggleDrawer();
                        }}
                        title='View Inventory'
                        icon={Platform.OS === 'android' ? 'md-eye' : 'ios-eye'}
                    />
                    <DrawerItem
                        onPressed={() => {
                            navigation.navigate('AddInventory');
                            this.props.navigation.toggleDrawer();
                        }}
                        title='Add Inventory'
                        icon={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    />


                </ScrollView>
            </View >
        );
    }
}


export default SideMenu;
