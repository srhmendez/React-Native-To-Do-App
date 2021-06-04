import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ToDoItem({ item, pressHandler }) {

    return(

        
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.toDoTaskObject}>{ item.text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    toDoTaskObject: {
        padding:16,
        marginTop: 16, 
        borderColor: 'green',
        borderWidth: 1, 
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})