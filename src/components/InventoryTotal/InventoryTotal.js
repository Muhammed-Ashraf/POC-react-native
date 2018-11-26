import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const inventoryTotal = props => (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginLeft: 16 }}>
            <Text>
                <Text style={styles.label}>Total: </Text>
                <Text style={styles.value}>{props.unit} </Text>
                <Text style={styles.label}>Units</Text>
            </Text>
        </View>

        <View style={{ flexDirection: 'row', marginRight: 16 }}>
            <Text>
                <Text style={styles.label}>Total: </Text>
                <Text style={[styles.value, { fontSize: 15 }]}>₹ </Text>
                <Text style={styles.value}>{props.value}</Text>
            </Text>
        </View>
    </View >
);

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#e4e4e6',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        color: '#15161b',
        fontSize: 15
    },
    value: {
        color: '#f05b21',
        fontSize: 20,
    }
});

export default inventoryTotal;
