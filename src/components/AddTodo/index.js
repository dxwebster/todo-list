import React from 'react';
import { Container } from './styles';

class AddTodo extends React.Component {

   constructor() {
      super();
      this.state = {
          todo: "",
      }
  }

   render(){
      return(     
         <Container>
            <h2>Lista de Tarefas</h2>
            <form onSubmit={(e) => this.submitTodo(e) } > 
               <input id="addTodoInput" onChange={ (e) => this.updateInput(e) } type="text" placeholder="Escreva sua próxima tarefa" className="task"/>
               <button type="submit">+</button>
            </form>
         </Container>
      )
   }

   updateInput = (e) => {
      this.setState({todo: e.target.value}) // inclui no todo o valor do input
   }

   submitTodo =(e) => {
      e.preventDefault(); // impede que o form envie
      this.props.addTodoFn(this.state.todo) // pega a função AddTodoFn pelo props
      document.getElementById('addTodoInput').value = ''; // limpa o input
   }
}

export default AddTodo
