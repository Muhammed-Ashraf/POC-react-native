import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoContainer: {
        width: '100%',
        backgroundColor: 'white',
        flex: 0.5,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {

        borderWidth: 1,
        borderColor: '#fc7f33',
        width: '60%',
        height: 45,
        marginBottom: 14,
        borderRadius: 25,

    },
    loginButtonText: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    loginButtonTextPressed: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    recoveryPasswordText: {
        fontSize: 13,
        textAlign: 'center',
        color: '#50443c',
    },
    errorText: {
        width: '60%',
        fontSize: 13,
        color: '#50443c',
    },

    loginButton: {
        backgroundColor: '#fc7f33',
        borderRadius: 25,
        marginBottom: 5,
        width: '60%',
        height: 40,
        justifyContent: 'center'
    },
    loginButtonPressed: {
        borderColor: '#fc7f33',
        backgroundColor: '#fc7f33',
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 5,
        width: '60%',
        height: 40,
        justifyContent: 'center'
    },
    textInput: {
        marginBottom: 10,
        height: 45,
        width: '60%'
        // color: 'blue',
    },
    idTextInput: {

        height: 45,
        width: '60%'
        // color: 'blue',
    },
    logoImage: {
        width: '100%',
        height: 125,
        resizeMode: 'contain'
    },
    underline: {
        width: '35%',
        height: 1,
        marginBottom: 80,
        backgroundColor: '#50443c30'
    }
});

export default styles;
