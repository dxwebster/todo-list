import React from 'react';
import TodoItem from '../TodoItem'
import { Container } from './styles';

class TodoList extends React.Component {

   render(){
      const {todos} = this.props; // pegando a lista de todos que veio como parâmetro
      
      return(
         <Container>

            { todos.map((todo, index) =>
               <TodoItem updateTodoFn={this.updateTodo} key={index} todo={todo}></TodoItem>
            )}
         </Container>
      )
   }

   updateTodo = (todo) => {
      this.props.updateTodoFn(todo)
   }

}

export default TodoList
