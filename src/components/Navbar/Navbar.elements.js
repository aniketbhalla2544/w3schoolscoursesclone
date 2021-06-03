import styled from 'styled-components';
import w3LogoImg from 'images/w3logo.png';

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    --MenuItemsSpacing: 20px;
    --theme-green: ${props => props.theme.colors.themeGreen};
    
    & > *{
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    & a:link,
    & a:visited{
        color: var(--theme-green);
        text-decoration: none;

        &:hover{
            text-decoration: underline;
            text-decoration-color: var(--theme-green);
        }
    }

    & a[href*="https://www.w3schools.com/"]{
        padding-right: var(--MenuItemsSpacing);
        position: relative;
       
        &::after{
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            display: inline-block;
            height: 40%;          
            border-right: 2px solid var(--theme-green); 
        }
    }

    & a[href*="#"]{
        padding-left: var(--MenuItemsSpacing);
    }

   
`;

export const Logo = styled.div.attrs(() => ({
    className: "position-relative",
}))`
    
    border: ${props => props.border ? "2px solid red" : "none"};
    position: relative;

    &::before{
        content: "";
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url(${w3LogoImg}) no-repeat center;
        background-size: contain; 
    }
  
`;

export const GridContainer = styled.div.attrs(props => ({
    className: "container",
}))`

    border: ${props => props.border ? "2px solid red" : "none"};
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 50px;

    & > *{
        /* border: 1px solid red; */
    }
`;

export const Header = styled.header.attrs(props => ({
    className: "container-fluid"
}))`

    border: ${props => props.border ? "2px solid red" : "none"};
    padding: 15px 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    /* box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3); */
     
`;


