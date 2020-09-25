import React, { Component } from 'react';
import { Container } from "./styles/App"

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export default class taskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : [], // toda vez que isso for mofificado, o que está  dentro do render será renderizado de novo 
            //todos: [{text:'Primeira Tarefa', completed: true}] // exemplo de objeto que contem a lista de tarefas
        }
    }

    render() {
              
        return (
            <Container>
                <section className="card">
                    <AddTodo addTodoFn={this.addTodo}></AddTodo>
                    <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos}></TodoList>
                     {/*passamos funções e variáveis como parâmetro para compartilhar entre os componentes  */}
                </section>
            </Container>
        );
    }

    //  Função que pega os todos do Local Storage
    componentDidMount = () => {
        const todos = localStorage.getItem('todos');

        if(todos){ // se tiver todos
            console.log('Has todos', todos)
            const savedTodos = JSON.parse(todos)
            this.setState({todos: savedTodos }) // setState é uma função assincrona
        }else{ // se não tiver
            console.log('No todos')
        }
    }

   // Função que adiciona o 'objeto todo (com text, completed)' ao 'Array de todos'
    addTodo = async (todo) => {
        await this.setState({ todos: [...this.state.todos, {
            text: todo,
            completed: false
        }] });
        
        localStorage.setItem('todos', JSON.stringify(this.state.todos)) // salva os todos no localStorage
        console.log(localStorage.getItem('todos'))
    } 

    // Função que seta todo como completado
    updateTodo = async (todo) => {
       const newTodos = this.state.todos.map(newTodo => {
            
            if (todo === newTodo) {
                return{
                    text: todo.text,
                    completed: !todo.completed
                }
            }
            else {
                return newTodo
            }
        });
        await this.setState({todos: newTodos})
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  
}