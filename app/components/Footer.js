import React from 'react';
import CreateToDoInput from './UI/CreateToDoInput';
import { StyleSheet, View } from 'react-native';


export default function Footer( { submitHandler } ) {


    return(

        <View style={styles.footer}>
            <CreateToDoInput submitHandler={ submitHandler } />
        </View>

    )
}

const styles = StyleSheet.create({
    footer:
    {
        position: 'absolute',
        bottom: 30,
        left :0,
        right:0,
        zIndex:10,
        backgroundColor: '#433E3F'
    }

})