import styled from 'styled-components';

export const Container = styled.div`

padding: 15px;

   li {
      padding: 15px 0 0;;
      display:  flex;

      input.check{
         margin-right: 10px;
         align-self: center;
      }

      input[type=checkbox]:checked + label {
         color: #ccc;
         font-style: italic;
         text-decoration: line-through;
      } 
                  
   }    

`
