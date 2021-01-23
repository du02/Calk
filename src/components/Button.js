import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

export default (props) => {

    const stylesButtonBase = [styles.button];
    if(props.double) stylesButtonBase.push(styles.buttonDouble);
    if(props.triple) stylesButtonBase.push(styles.buttonTriple);
    if(props.operation) stylesButtonBase.push(styles.operationButton);

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButtonBase}>{props.label}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        borderStartColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 0.2,
        borderColor: '#cecece',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
});