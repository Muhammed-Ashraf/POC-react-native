import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import InventoryList from '../../components/InventoryList/InventoryList';
import InventoryTotal from '../../components/InventoryTotal/InventoryTotal';
import AutoCompleteExamle from '../AutoCompleteExample';

import styles from './checkoutStyle';

import { getTotalInventoryList, setQuery } from '../../store/actions/index';

const logo = require('../../assets/logo-next-billion-white.png');

class CheckoutScreen extends Component {

    componentWillMount() {
        this.props.onLoadList();
    }

    onMenuPressed = () => {
        this.props.navigation.openDrawer();
    }

    findProduct(query) {
        if (query === '') {
            console.log('no query');
            return [];
        }

        const inventoryList = this.props.inventoryList;
        const regex = new RegExp(`${query.trim()}`, 'i');
        filteredList = inventoryList.filter(inventory => inventory.name.search(regex) >= 0);
        console.log(filteredList);
        return inventoryList.filter(inventory => inventory.name.search(regex) >= 0);
    }

    renderList(inventoryTotal, inventoryList) {
        return (
            <View style={{ flex: 1 }}>
                <InventoryTotal unit={this.props.totalUnits} value={this.props.totalValue} />
                <InventoryList inventoryList={inventoryList} />
            </View >
        );
    }

    render() {
        const query = this.props.query;
        console.log(query);
        const inventoryList = this.findProduct(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="black"
                />
                <HeaderBar onMenuPressed={() => this.onMenuPressed()} title='Checkout' logo={logo} />
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <Autocomplete
                        autoCapitalize="none"
                        autoCorrect={false}
                        containerStyle={styles.autocompleteContainer}
                        data={inventoryList}
                        defaultValue={query}
                        onChangeText={text => this.props.onSearch(text)}
                        placeholder="Search Product"
                        renderItem={({ name }) => (
                            <TouchableOpacity onPress={() => this.props.onSearch(name)}>
                                <Text style={styles.itemText}>
                                    {name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                    <View style={styles.descriptionContainer}>
                        {this.renderList(this.props.totalUnits, this.props.inventoryList)}
                    </View>

                </View>
                <View style={styles.submitContainer}>
                    <TouchableOpacity style={{ paddingRight: 16 }}>
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        inventoryList: state.inventoryList.inventoryList,
        totalUnits: state.inventoryList.unit,
        totalValue: state.inventoryList.value,
        query: state.inventoryList.query,
        isLoading: state.ui.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadList: () => dispatch(getTotalInventoryList()),
        onSearch: (query) => dispatch(setQuery(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);

