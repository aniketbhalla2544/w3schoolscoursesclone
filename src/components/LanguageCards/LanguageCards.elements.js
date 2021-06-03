import styled from 'styled-components';

export const GridContainer = styled.ul.attrs(() => ({

}))`

    list-style: none;
    padding: 0;
    
   display: grid;
   grid-gap: 30px;
   grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
   /* grid-auto-rows: minmax(60px, auto); */

   & > *{
       position: relative;
   

     
  
   }

`;
