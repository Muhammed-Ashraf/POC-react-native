import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const headerBar = props => (
    <View style={styles.container}>

        <TouchableOpacity style={styles.menuButton} onPress={props.onMenuPressed}>
            <View >
                <Icon
                    size={35}
                    name={Platform.OS === 'android' ? 'menu' : 'menu'}
                    color="#747474"
                />
            </View>
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.logoImage} source={props.logo} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        elevation: 4,
        height: 55,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    menuButton: {
        marginLeft: 8
    },
    title: {
        marginLeft: 8,
        fontSize: 20,
        flex: 1
    },
    logoImage: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
});

export default headerBar;
