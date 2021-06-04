import Header from './Header';
import Footer from './Footer';
import ToDoItem from './ToDoItem';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

export default function Main() {

    const [todos, setTodos] = useState([
        { text: 'Create App', key: '1' },
        { text: 'Nail Interview', key: '2' },
        { text: 'Recieve Job Offer', key: '3'}
    ]);

    {/* Function for clicking on a to do list task, takes the key number and returns the non matching text properties*/}
    const pressHandler = (key) => {
        setTodos ((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
        });

    }

  return (

    <View style={styles.container}> 

        <Header />

        {/* Main Content (To Do List) */}
        <View style={styles.content}>

            {/* Insert Form Here */}
            <View style={styles.list}>
                <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <ToDoItem item={ item } 
                    //passing the pressHandler function into the ToDoItem Component so that it can 
                    pressHandler={ pressHandler }/>
                )} />

            </View>
        </View>

        <Footer />

    </View>   
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },

    content:
    {
        flex:1,
        marginBottom:100,
        padding:40,
        color: '#ddd'
        
    },

  
});
