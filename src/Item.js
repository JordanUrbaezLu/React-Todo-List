import React, { Component } from "react";

class Item extends Component {

    render() {
        return(
            <li>
                <span>{this.props.todo.content}</span>
                <button onClick ={this.props.deleteTodoItem}>Delete Todo</button>
            </li>
        )}
}

export default Item;