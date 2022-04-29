import React, { Component } from "react";

class Form extends Component {
    state = {
        input: "",
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoItem(this.state.input); //call the function that was passed down from parent and pass in the input value
        this.setState({ //change state back to empty to erase input value
            input: ""
        })
    }

    updateInput = (e) => {
        this.setState({ //any time the input value changes, updateInput will update the value of state
            input: e.target.value 
        });
    }

    render() {
        return(
            <>
                <form>
                    <input id="inputbox" type ="text" value={this.state.input} onChange = {this.updateInput} />
                    <button onClick = {this.handleSubmit}>Add Todo</button>
                </form>
            </>
        )}
}

export default Form;