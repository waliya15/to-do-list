import React, { Component } from 'react';
import ToDoListForm from './ToDoListForm'
import ToDos from './ToDos'
import uuid from 'uuid/v4'
import './TodoList.css'


class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state ={
            todos : []
        }
        this.addTodo = this.addTodo.bind(this)
        this.remove =this.remove.bind(this)
        this.edit = this.edit.bind(this)
    }

    addTodo(td){
        this.setState({todos : [...this.state.todos , td]})
    }

    remove(id){
        this.setState(st => ({todos : st.todos.filter(td => td.id !== id)}))
    }

    edit(id , updatedTodo){
        const newTodos = this.state.todos.map(td => {
            if(td.id === id){
                return {...td , todo : updatedTodo }
            }
            else{
                return td
            }
        })
        this.setState({todos : newTodos})
    }

    render(){
        return(
            <div className = 'ToDoList'>
                <h1>Todo List!!!</h1>
                <ul>
                {this.state.todos.map(todo => 
                <ToDos  todo  = {todo.todo} 
                        id = {todo.id}
                        key = {todo.id}
                        remove = {() => this.remove(todo.id)}
                        edit = {this.edit}
                        />)}
                </ul>
               
                <ToDoListForm add = {this.addTodo}/>
            </div>
        )
    }
}

export default ToDoList