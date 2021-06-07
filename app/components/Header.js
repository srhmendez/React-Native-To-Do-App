import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
        paddingTop: 10,
        

    },
    headerText: {
        color: 'black',
        padding: 10,
        paddingTop:35,
        fontSize: 26,
        fontWeight: "500"

    },

})