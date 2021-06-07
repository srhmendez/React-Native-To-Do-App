import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function ToDoItem({ item, pressHandler }) {

    return(

        
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.toDoTaskObject}>
                <MaterialIcons style={styles.icon} name="delete" size={18} color='#333' />
                <Text style={styles.todoText}>{ item.text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    toDoTaskObject: {
        padding:16,
        paddingRight:50,
        marginTop: 16, 
        borderColor: 'green',
        borderWidth: 1, 
        borderStyle: 'dashed',
        borderRadius: 10,
        flex: 1, 
        flexDirection: 'row',
    },
    icon:
    {
        marginRight: 20,
    },
    todoText:
    {
        paddingRight:10,
        flexWrap:'wrap',
    }
})