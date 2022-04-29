import React, { Component } from 'react';
import Form from "./Form"
import TodoList from "./TodoList"
import './App.css';

let GlobalID = 0;

class Container extends Component {

    state = {
        todos: []
    };

    addTodoItem = (content) => {
        this.setState({ //add the new content with its id as an object {content, id}, to the array of todos []
            todos:[{content, id: GlobalID++}, ...this.state.todos] //place todo object in front of previous list
        })
    }

    deleteTodoItem = (targetIndex) => {
        this.setState({ // filter todos[] where todo that 
            todos: this.state.todos.filter((todo) => todo.id !== targetIndex)
        })
    }


    render() {
        return(
            <>
                <div id="container">

                    <Form 
                        addTodoItem={this.addTodoItem} //pass the addTodoItem function as a prop so the Form has access to add items
                    />

                    <TodoList 
                        deleteTodoItem = {this.deleteTodoItem} 
                        //pass the deleteTodoItem function as a prop so the TodoList has access to delete items 
                        //the TodoList will pass the function down to the Item, 
                        //this is technically called prop drilling since TodoList will never use the function

                        todos = {this.state.todos} //pass the todos so that the TodoList can map through the list and render the list items
                    />

                </div>
            </>
        )}
}

export default Container;
