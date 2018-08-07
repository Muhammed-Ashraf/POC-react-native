import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import InventoryList from '../../components/InventoryList/InventoryList';
import InventoryTotal from '../../components/InventoryTotal/InventoryTotal';
import AutoCompleteExamle from '../AutoCompleteExample';

import styles from './checkoutStyle';

import { getTotalInventoryList, setQuery, addInventory, updateInventory, someAction } from '../../store/actions/index';


const logo = require('../../assets/logo-next-billion-white.png');

class CheckoutScreen extends Component {


    componentWillMount() {
        this.props.onLoadList();
    }

    onMenuPressed = () => {
        this.props.navigation.openDrawer();
    }

    findProduct(query) {
        console.log('query' + query);
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

    addItem(nme, val, unt, clr, i) {
        console.log('inside add inventory');
       

        const alreadyAdded = this.handleCheck(nme);

        if (alreadyAdded) {
            console.log('exists');
            // console.log(val);
            // value = parseInt(val, 10) + 1;
            // console.log(value);
            // this.props.onUpdate(nme, value);
        } else {
            // this.props.checkoutList.push({
            //     name: nme,
            //     unit: unt,
            //     value: val,
            //     color: clr,
            //     id: i,
            // });
            this.props.onAdd(nme, val, unt, clr, i);
        }
        this.props.onSearch('');
    }

    handleCheck(val) {
        return this.props.checkoutList.some(item => val === item.name);
    }

    renderList(inventoryTotal, inventoryList) {
        return (
            <View style={{ flex: 1 }}>
                <InventoryTotal unit={this.props.checkoutUnit} value={this.props.checkoutValue} />
                <InventoryList inventoryList={this.props.checkoutList} />
            </View >
        );
    }

    render() {
        const query = this.props.query;
        console.log(query);
        const searchedList = this.findProduct(query);
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
                        data={searchedList}
                        defaultValue={query}
                        onChangeText={text => this.props.onSearch(text)}
                        placeholder="Search Product"
                        renderItem={({ name, value, unit, color, id }) => (
                            <TouchableOpacity onPress={() => this.addItem(name, value, unit, color, id)}>
                                <Text style={styles.itemText}>
                                    {name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                    <View style={styles.listContainer}>
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
        checkoutList: state.inventoryList.checkoutList,
        totalUnits: state.inventoryList.unit,
        totalValue: state.inventoryList.value,
        checkoutUnit: state.inventoryList.checkoutUnit,
        checkoutValue: state.inventoryList.checkoutValue,
        query: state.inventoryList.query,
        isLoading: state.ui.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadList: () => dispatch(getTotalInventoryList()),
        onSearch: (query) => dispatch(setQuery(query)),
        onAdd: (name, value, unit, color, id) => dispatch(addInventory(name, value, unit, color, id)),
        onUpdate: (name, unit) => dispatch(updateInventory(name, unit))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);

