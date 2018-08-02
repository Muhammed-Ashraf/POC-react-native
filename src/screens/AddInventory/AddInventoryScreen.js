import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import HeaderBar from '../../components/HeaderBar/HeaderBar';
import styles from './AddInventoryStyle';
import { getTotalInventoryList } from '../../store/actions/index';

const logo = require('../../assets/logo-next-billion-white.png');

class AddInventoryScreen extends Component {


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
                <HeaderBar onMenuPressed={() => this.onMenuPressed()} title='Add Inventory' logo={logo} />
                

            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        inventoryList: state.inventoryList.inventoryList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadList: () => dispatch(getTotalInventoryList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddInventoryScreen);

