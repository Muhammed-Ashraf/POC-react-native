import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    banner: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end'
    },
    email: {
        marginLeft: 16,
        marginBottom: 16,
        color: 'white',
    },
    profilePic: {
        marginLeft: 16,
        marginBottom: 8,
        width: 85,
        height: 85,
        borderRadius: 85 / 2
    }

});

export default styles;
