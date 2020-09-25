import styled from 'styled-components';

export const Container = styled.div`
      position: relative;

      h2 {
         display: block;
         font-weight: 700;
         font-size: 30px;
         color: #333333;
         line-height: 1.2;
         text-align: center;
         margin-bottom:20px;
      }

      input.task{
         font-size: 15px;
         line-height: 1.5;
         color: #666666;
         display: block;
         width: 100%;
         background: #e6e6e6;
         height: 50px;
         border-radius: 25px;
         padding: 0 30px 0 30px;

         ::placeholder { 
            color: #c0c0c0;
            opacity: 1; 
         }
      }

         button {
            width: 80px;
            height: 80px;
            display: block;
            border-radius: 50%;
            background: #bc21df;
            padding: 0 25px;
            cursor: pointer;
            font-size: 50px;
            line-height: 1.5;
            color: #fff;
            text-transform: uppercase;

            transition: all 0.4s;
            position: absolute;
            right: -20px;
            top: 40px;

            &:hover {
               background: #333333;
            }
         }
       

`
