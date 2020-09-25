import styled from 'styled-components';

export const Container = styled.div`
   .todoItem {
      padding: 15px 0 0;
      display:  flex;

      label{
         width: 100%
      }

      input.check{
         margin-right: 10px;
         align-self: center;
         text-decoration: none;
      }

      .completed + label{
         color: #ccc;
         font-style: italic;
         text-decoration: line-through;
      }         
   }



`
