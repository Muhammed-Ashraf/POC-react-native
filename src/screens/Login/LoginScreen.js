import React, { Component } from 'react';
import {
    Text, StatusBar, View, Image,
    TextInput, TouchableHighlight, Alert, AsyncStorage,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import styles from './loginStyle';

const imageSource = require('../../assets/logo-next-billion.png');

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Homes' })],
});
class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        loginButtonPressStatus: false,
        // for validation
        // controls: {
        //     id: {
        //         value: '',
        //         valid: false,
        //         validationRules: {

        //         }
        //     },
        //     password: {
        //         value: '',
        //         valid: false,
        //         validationRules: {

        //         }
        //     }
        // },
        id: '',
        password: '',
        isAllFieldsFilled: false,
        isLoggedIn: false
    };
    componentWillMount = () => {
        AsyncStorage.getItem('IS_LOGGED_IN').then((value) => {
            if (value === 'true') {
                console.log('inside if');
            } else {
                console.log('inside else');
            }
        });

        console.log('hai');
    }

    // methods to manage login button states 
    onLoginButtonHideUnderlay = () => {
        this.setState({ loginButtonPressStatus: false });
    };


    onLoginButtonShowUnderlay = () => {
        this.setState({
            loginButtonPressStatus: true
        });
    }

    // method to handle login button press
    onLoginButtonPress = () => {
        if (this.state.password === '' || this.state.id === '') {
            this.setState({ isAllFieldsFilled: false });
            Alert.alert('All Fields are Mandatory');
        } else {
            this.setState({ isAllFieldsFilled: true });
            this.setLoggedIn();
            // this.props.navigation.navigate('Homes');

            this.props.navigation.dispatch(resetAction);
        }
    }

    setLoggedIn = () => {
        AsyncStorage.setItem('IS_LOGGED_IN', 'true');
        console.log('saved');
    }
    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('IS_LOGGED_IN');
            if (value !== null) {
                // We have data!!
                console.log(value);
                return value;
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="white"
                />
                <View style={styles.logoContainer}>
                    <Image
                        source={imageSource}
                        style={styles.logoImage}
                    />
                </View>
                {/* <View style={styles.textInputContainer}> */}
                <TextInput
                    underlineColorAndroid='#fc7f33'
                    selectionColor="gray"
                    placeholder="ID"
                    // returnKeyType={'next'}
                    //for validation
                    // onChangeText={(val) => this.updateInputState('id', val)}
                    onChangeText={(id) => this.setState({ id })}
                    value={this.state.id}
                    returnKeyType={'done'}
                    onSubmitEditing={() => { this.passwordTextInput.focus(); }}
                    blurOnSubmit={false}
                    style={[styles.idTextInput]}
                />
                {/* </View> */}


                <TextInput
                    secureTextEntry
                    underlineColorAndroid='#fc7f33'
                    selectionColor="gray"
                    placeholder="Password"
                    returnKeyType={'done'}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    ref={(input) => { this.passwordTextInput = input; }}
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    style={styles.textInput}
                />


                <TouchableHighlight
                    onPress={this.onLoginButtonPress}
                    underlayColor={'darkorange'}
                    style={this.state.loginButtonPressStatus ?
                        styles.loginButtonPressed : styles.loginButton}
                    onHideUnderlay={this.onLoginButtonHideUnderlay}
                    onShowUnderlay={this.onLoginButtonShowUnderlay}
                >
                    <Text style={this.state.loginButtonPressStatus ? styles.loginButtonTextPressed : styles.loginButtonText}>
                        Login
                    </Text>
                </TouchableHighlight>
                <Text style={styles.recoveryPasswordText}> Recover Password </Text>
                <View style={styles.underline} />
            </View>
        );
    }
}

export default LoginScreen;
