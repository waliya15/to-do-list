import React, { Component } from 'react';
import uuid from 'uuid/v4'
import './ToDoListForm.css'

class ToDoListForm extends Component{
    constructor(props){
        super(props)
        this.state ={
            todo : ''
        }    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
    }

    handleSubmit(evt){
        evt.preventDefault();
        const newTodo = {...this.state, id : uuid()}
        this.props.add(newTodo)
        this.setState({todo : ''})
    }
    render(){
       
        return(
            <div className = 'ToDoListForm'>
                <form className = "Form" onSubmit = {this.handleSubmit}>
                <label htmlFor = 'todo'>New ToDo</label>
                    <input
                    type = 'text'
                    name = 'todo'
                    value = {this.state.todo}
                    onChange = {this.handleChange}
                    placeholder = 'New Todo'
                    ></input>
                    <button>Add todo</button>
                </form>
            </div>
        )
    }
}

export default ToDoListForm