import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class InventoryListHeading extends Component {
    render() {
        return (
            <View style={styles.heading}>
                <View style={[styles.colorCode]} />
                <View style={{ flex: 0.5 }}>
                    <Text style={[styles.headingText, { marginLeft: 8 }]}>Product</Text>
                </View>
                <View style={{ flex: 0.2 }}>
                    <Text style={styles.headingText}>Value</Text>
                </View>
                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={[styles.headingText, { marginRight: 16 }]}>Unit</Text>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#1d2029',
        justifyContent: 'space-between'
    },
    headingText: {
        color: 'white',
    },
    colorCode: {
        marginLeft: 16,
        width: 7,
        height: 7,
        backgroundColor: 'transparent'
    }
});
export default InventoryListHeading;
