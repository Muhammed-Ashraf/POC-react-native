import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const inventoryTotal = props => (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
            <Text>Total: </Text>
            <Text>{props.unit} </Text>
            <Text> Units</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
            <Text>Total: </Text>
            <Text>rs </Text>
            <Text> {props.value}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#e4e4e6',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default inventoryTotal;
