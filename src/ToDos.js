import React, { Component } from 'react';
import './Todos.css'

class ToDos extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEdit : false , 
            completed : false ,
            td : ''
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.toggleLineThrough = this.toggleLineThrough.bind(this)
    }

    toggleEdit(){
        this.setState({isEdit : !this.state.isEdit })
    }

    toggleLineThrough(){
        this.setState({completed : !this.state.completed })
    }

    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
    }

    handleEdit(){
        this.props.edit(this.props.id , this.state.td)
        this.toggleEdit()
    }

    render(){
        const currTodoItem = this.state.isEdit
                    ? <div className = 'ToDos'>
                        <form onSubmit = {this.handleEdit}>
                        <input type = 'text' 
                             value = {this.state.td} 
                             onChange = {this.handleChange}
                             name = 'td'></input>
                        <button>Save</button>
                    </form>
                    </div>
                    : <div className = 'ToDos'>
                        <li className = {this.state.completed ? 'Todo-task completed' : 'Todo-task'}
                        onClick = {this.toggleLineThrough} > 
                        {this.props.todo} </li> 
                        <div className = 'Todo-buttons'>
                        <button onClick = {this.toggleEdit}> <i class="fas fa-pen"></i> </button>
                        <button onClick = {this.props.remove}> <i class="fas fa-trash"></i> </button>   </div> 
                    </div>
        return(
            <div >
                {currTodoItem}
            </div>
        )
    }
}
//textDecorationLine: this.state.completed ? 'line-through' : null ,
// style={{
    //color: this.state.completed ? 'rgba(255,255,255,.3)' : null }}

export default ToDos