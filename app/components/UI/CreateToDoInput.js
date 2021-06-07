import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity,Text, TextInput } from 'react-native';

export default function CreateToDoInput( { submitHandler } ) {

        const [text, setText] = useState('');

        const changeHandler = (inputValue) => {
            setText(inputValue);
        }

    return(
        <View>
            <TextInput style={styles.textInput} 
                placeholder='New To Do...' 
                placeholderTextColor='white' 
                underlineColorAndroid='transparent'
                onChangeText={ changeHandler }>
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={ () => submitHandler(text) } title='Submit ToDo'>
                <Text style={styles.buttonText}>Submit To Do</Text>
            </TouchableOpacity>
                
        </View>
    )
};

const styles = StyleSheet.create({
    textInput :
    {
      alignSelf: 'stretch',
      color:'#fff',
      bottom:20,
      padding:20,
      backgroundColor:'#252525',
      borderTopWidth :2,
      borderTopColor:'#ededed'  
    },
    button: 
    {
        backgroundColor:'#B2FFD6',
        padding:30,
        paddingVertical: 20,
        borderRadius: 8,
        margin:6,
        marginHorizontal: 10

    },
    buttonText:  
    {
        textAlign: 'center',
        fontWeight: '700',
        color: '#2D2A32',
    }

})