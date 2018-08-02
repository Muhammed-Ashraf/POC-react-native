import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import InventoryListItem from '../InventoryListItem/InventoryListItem';
import InventoryListHeading from '../InventoryListHeading/InventoryListHeading';

const inventoryList = props => (
    <View style={styles.container}>
        <InventoryListHeading />
        <FlatList
            ItemSeparatorComponent={this.renderSeparator}
            data={[{ name: 'Knorr - 7g', unit: '20', value: '$5.55', color: 'red' },
            { name: 'Knorr - 14g', unit: '20', value: '$5.55', color: 'red' },
            { name: 'Knorr - 28g', unit: '20', value: '$5.55', color: 'red' },
            { name: 'Clear - 5ml', unit: '20', value: '$5.55', color: 'blue' },
            { name: 'Clear - 5ml', unit: '20', value: '$5.55', color: 'blue' },
            { name: 'Knorr - 7g', unit: '20', value: '$5.55', color: 'red' },
            { name: 'Surf - 100g', unit: '20', value: '$5.55', color: 'orange' },
            { name: 'Knorr - 7g', unit: '20', value: '$5.55', color: 'red' },
            { name: 'Pepsi - 1l', unit: '20', value: '$5.55', color: 'green' }
            ]
            }
            renderItem={({ item }) =>
                <InventoryListItem
                    color={item.color}
                    name={item.name}
                    value={item.value}
                    unit={item.unit}
                />
            }
            keyExtractor={(item, index) => index.toString()}
        />

    </View>
);
renderSeparator = () => {
    return (
        <View
            style={{
                height: 0.5,
                backgroundColor: '#323337',
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    cellHeaderStyle: {
        paddingLeft: '3%'
    },
    cellHeaderStyle1: {
        marginLeft: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
    },
    cellContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: '2%'
    },
    cellContentViewStyle: {
        flex: 1,
        flexDirection: 'row'
    },
});

export default inventoryList;
