import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';

export default function Footer() {


    return(

    <View>  
        <View style={styles.footer}>
            
            {/* Input for Adding a Task */}

            <TextInput style={styles.textInput} 
                placeholder='What do you have to do today?' 
                placeholderTextColor='white' 
                underlineColorAndroid='transparent'>
            </TextInput>

        </View>

        {/* Add Task Button */}

        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    footer:
    {
        position: 'absolute',
        bottom: 0,
        left :0,
        right:0,
        zIndex:10
    },
    textInput :
    {
      alignSelf: 'stretch',
      color:'#fff',
      padding:20,
      backgroundColor:'#252525',
      borderTopWidth :2,
      borderTopColor:'#ededed'  
    },
    addButton :
    {
        position:'absolute',
        zIndex:11,
        right:20,
        bottom:20,
        backgroundColor:'#8FD5A6',
        width:60,
        height:60,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation: 8,
    },
    addButtonText : 
    {
        color: '#0D5D56',
        fontSize:24,
    }
})