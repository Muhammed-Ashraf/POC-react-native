import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import InventoryList from '../../components/InventoryList/InventoryList';
import InventoryTotal from '../../components/InventoryTotal/InventoryTotal';
import AutoCompleteExample from '../AutoCompleteExample';

import styles from './checkoutStyle';

import { getTotalInventoryList } from '../../store/actions/index';
import { setQuery } from '../../store/actions/inventoryList';

const logo = require('../../assets/logo-next-billion-white.png');

class CheckoutScreen extends Component {


    componentWillMount() {
        this.props.onLoadList();
    }

    onMenuPressed = () => {
        this.props.navigation.openDrawer();
    }

    findFilm(query) {
        if (query === '') {
            return [];
        }

        const { inventoryList } = this.props.inventoryList;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return inventoryList.filter(film => film.name.search(regex) >= 0);
    }

    render() {
        const { query } = this.props.query;
        const inventoryList = this.findFilm(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return (

            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="black"
                />
                <HeaderBar onMenuPressed={() => this.onMenuPressed()} title='Checkout' logo={logo} />
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={inventoryList.length === 1 && comp(query, inventoryList[0].name) ? [] : inventoryList}
                    defaultValue=''
                    onChangeText={text => this.props.onQueryChange(text)}
                    placeholder="Enter Star Wars film title"
                    renderItem={({ name }) => (
                        <TouchableOpacity onPress={() => this.props.onQueryChange(name)}>
                            <Text style={styles.itemText}>
                                {name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                {/* <InventoryTotal unit={this.props.totalUnits} value={this.props.totalValue} />
                <InventoryList inventoryList={this.props.inventoryList} /> */}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        inventoryList: state.inventoryList.inventoryList,
        totalUnits: state.inventoryList.unit,
        totalValue: state.inventoryList.value,
        isLoading: state.ui.isLoading,
        query: state.inventoryList.query
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadList: () => dispatch(getTotalInventoryList()),
        onQueryChange: (query) => dispatch(setQuery(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);

