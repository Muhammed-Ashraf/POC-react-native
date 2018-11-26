import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const inventoryListItem = props => (
    <View style={[styles.heading]}>
        <View style={[styles.colorCode, { backgroundColor: props.color }]} />
        <View style={{ flex: 0.5 }}>
            <Text style={[styles.headingText, { marginLeft: 8 }]}>{props.name}</Text>
        </View>
        <View style={{ flex: 0.2 }}>
            <Text style={styles.headingText}>{props.value}</Text>
        </View>
        <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={[styles.headingText, { marginRight: 16 }]}>{props.unit}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#16171c',
        justifyContent: 'space-between'
    },
    headingText: {
        color: 'white'
    },
    colorCode: {
        marginLeft: 16,
        width: 7,
        height: 7,
        backgroundColor: 'transparent'
    }
});

export default inventoryListItem;
