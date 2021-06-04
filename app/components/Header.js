import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

export default function Header() {


    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>To Do App</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#231F20',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'

    },
    headerText: {
        color: 'white',
        padding: 10,
        fontSize: 26,
        fontWeight:700

    },

})