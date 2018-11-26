import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const drawerItem = props => (


    <TouchableOpacity style={styles.container} onPress={props.onPressed}>
        <View style={styles.iconContainer}>
            <Icon
                size={30}
                name={props.icon}
                color="#747474"
            />
        </View>
        <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45
    },
    title: {
        marginLeft: 16,
        fontSize: 15,
        flex: 1
    },

});

export default drawerItem;
