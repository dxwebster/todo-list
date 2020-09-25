import styled from 'styled-components';
import imgBackground from '../assets/bg-01.jpg'

export const Container = styled.div`

   background: url(${imgBackground}) no-repeat center;
   background-size: cover;

   display: flex;
   flex-direction: column;
   
   align-items: center;
   justify-content: center;
   
   height: 100vh;

   
   .card {
      max-width: 450px;
      width: 100%;

      background: #fff;
      border-radius: 20px;
      padding: 30px;
      z-index: 1;
   }
       

`
