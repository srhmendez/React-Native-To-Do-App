import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ToDoItem({ item }) {

    return(

        
        <TouchableOpacity>
            <Text style={styles.toDoTaskObject}>{ item.text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    toDoTaskObject: {
        padding:16,
        marginTop: 16, 
        borderColor: '#bbb',
        borderWidth: 1, 
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})