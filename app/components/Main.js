import Header from './Header';
import Footer from './Footer';
import ToDoItem from './ToDoItem';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard, Alert, Text} from 'react-native';

export default function Main() {

    /* To Do Array and setTodos function using State */
    const [todos, setTodos] = useState([
        { text: 'Create App', key: '1' },
        { text: 'Nail Interview', key: '2' },
        { text: 'Recieve Job Offer', key: '3'}
    ]);

    /* Function for clicking on a to do list task, takes the key number and deletes the matching key number*/
    const pressHandler = (key) => {
        setTodos ((todos) => {
            return todos.filter(todo => todo.key != key)
        });

    }
    /* Function passing the text in the todos array as a new todo & generating a random key, copying the prevTodos using the spread operator and then sending it to another component with props */
    const submitHandler = (text) => {

        // Adding input validation to prevent users from entering in todo's less than 3 characters in length
        if (text.length > 3){
            setTodos((todos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...todos
                ];
            });
        } else {
            //Adding an alert if the input text string is less than 3 characters
            Alert.alert("Attention!", "Todos must be longer than two characters. Please try again.", [
                {text: 'Continue', onPress: () => console.log('alert closed')}
            ]);
        }

    }

  return (
    /* Adding the TouchableWithoutFeedback Wrapper to allow user to dismiss keyboard by clicking anywhere outside of the keyboard */
    <TouchableWithoutFeedback onPress={ () => {
        Keyboard.dismiss();

    }}>
        
        <View style={styles.container}> 
        
            <Header />

            {/* Main Content (To Do List) */}
            <View style={styles.content}>
                <Text style={styles.tasksTitle}>
                    Today's Tasks
                </Text>
                {/* Form */}
                <View style={styles.list}>
                    
                    {/* rendering data from todos array into the flatlist and then passing the to do item as a prop so that it can recieve the styling of the ToDoItem Component */}
                    <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <ToDoItem item={ item } 
                        //passing the pressHandler function into the ToDoItem Component so that it can listen for 
                        pressHandler={ pressHandler }/>
                    )} >
                        
                    </FlatList>

                </View>
            </View>
            
            {/* Passing submitHandler function into the CreateToDoInput component */}
            <Footer submitHandler={ submitHandler } />

        </View>
    </TouchableWithoutFeedback>   
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    tasksTitle: 
    {
        fontSize:20,
    },
    content:
    {
        flex:1,               
        padding:40,
        paddingBottom: 180,
        height:300
        
    },
    list:
    {
        flex:1,
        paddingBottom: 20

    }
  
});
