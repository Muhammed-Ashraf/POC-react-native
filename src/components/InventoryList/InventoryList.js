import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const inventoryList = props => (
    <View style={styles.container}>
        <View style={styles.heading}>
            <Text style={[styles.headingText, { marginLeft: 16 }]}>Product</Text>
            <Text style={styles.headingText}>Value</Text>
            <Text style={[styles.headingText, { marginRight: 16 }]}>Unit</Text>
        </View>
        <FlatList
            ItemSeparatorComponent={this.flatListSeparator}
            data={[{ title: 'Knorr - 7g', unit: '20', value: '$5.55' },
            { title: 'Knorr - 14g', unit: '20', value: '$5.55' },
            { title: 'Knorr - 28g', unit: '20', value: '$5.55' },
            { title: 'Clear - 5ml', unit: '20', value: '$5.55' },
            { title: 'Clear - 5ml', unit: '20', value: '$5.55' },
            { title: 'Knorr - 7g', unit: '20', value: '$5.55' },
            { title: 'Surf - 100g', unit: '20', value: '$5.55' },
            { title: 'Knorr - 7g', unit: '20', value: '$5.55' },
            { title: 'Pepsi - 1l', unit: '20', value: '$5.55' }
            ]
            }
            renderItem={({ item }) =>
                <View style={styles.cellContentViewStyle}>
                    {(() => {
                        switch (item.title.split('-')[0]) {
                            case 'Knorr ':
                                contentBackgroundColor = 'steelblue';
                                break;
                            case 'Clear ':
                                contentBackgroundColor = '#747aed';
                                break;
                            case 'Surf ':
                                contentBackgroundColor = '#ef735d';
                                break;
                            default: contentBackgroundColor = 'white';
                        }
                    })()}
                    {console.log(contentBackgroundColor)}

                    <Text style={styles.cellHeaderStyle} style={{ backgroundColor: contentBackgroundColor, borderWidth: 1, borderColor: 'black', borderRadius: 8, overflow: 'hidden', textAlign: 'center', height: 25, width: 100 }}>{item.title}</Text>
                    <Text style={styles.cellHeaderStyle1}>{item.unit}</Text>
                    <Text style={styles.cellHeaderStyle1}>{item.value}</Text>
                </View>
            }
            keyExtractor={(item, index) => index.toString()}
        />

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
        backgroundColor: '#1d2029',
        justifyContent: 'space-between'
    },
    headingText: {
        color: 'white'
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
