import React from 'react';
import { Container } from './styles';

class TodoItem extends React.Component {

   render(){
      
      const { todo } = this.props
      
      return(
         <Container>
            <div className='todoItem'>
               <input type="checkbox" id={ todo.text } onClick={this.toggleTodo} className={'check'+ (todo.completed ? ' completed' : ' ')}/>
               <label  htmlFor={ todo.text }>{ todo.text }</label>
            </div>
         </Container>
      )
   }

   toggleTodo = () =>{
      this.props.updateTodoFn(this.props.todo)
   }

}

export default TodoItem
