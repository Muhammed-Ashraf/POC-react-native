import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import InventoryList from '../../components/InventoryList/InventoryList';
import InventoryTotal from '../../components/InventoryTotal/InventoryTotal';

import styles from './viewInventoryStyle';

import { getTotalInventoryList } from '../../store/actions/index';

const logo = require('../../assets/logo-next-billion-white.png');

class ViewInventoryScreen extends Component {


    componentWillMount() {
        this.props.onLoadList();
    }

    onMenuPressed = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="black"
                />
                <HeaderBar onMenuPressed={() => this.onMenuPressed()} title='View Inventory' logo={logo} />
                <InventoryTotal unit='300' value='1000' />
                <InventoryList inventoryList={this.props.inventoryList} />

            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        inventoryList: state.inventoryList.inventoryList,
        isLoading: state.ui.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadList: () => dispatch(getTotalInventoryList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewInventoryScreen);

