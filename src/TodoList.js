import React, { Component } from "react";
import Item from "./Item";

class TodoList extends Component {
    
    render() {
        return(
            <>
                <div id ="todo__list-container">
                    <ul>
                        {this.props.todos.map((todo) => { //map through each todo and render the item
                            return (
                                <Item 
                                    key={todo.id} //give the todo.id as a key because react will optimize performance when you pass a unique key
                                    todo={todo} //pass in the todo as a prop
                                    deleteTodoItem={() => this.props.deleteTodoItem(todo.id)} //pass in a delete function that uses this todo.id as the parameter
                                />
                            )
                        })}
                    </ul>
                </div>
            </>
        )}
}

export default TodoList;