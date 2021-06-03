
import { useContext, useState } from 'react';
import styled from 'styled-components';
import w3LogoImg from 'images/w3logo.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { totalFavCoursesContext } from 'context/TotalFavCourses';

const Card = ({ name, header: { bgColor, txtColor }, description, price }) => {

    const [totalFavCourses, changeTotalFavCourses] = useContext(totalFavCoursesContext);

    const colors = {
        themeRed: "red",
        themeBlack: "rgb(87, 86, 86)",
    }

    const [favIconStyle, setFavIconStyle] = useState(
        {
            color: colors.themeBlack
        }
    );

    const handleFavIconStyleChange = () => {

        if (favIconStyle.color === colors.themeBlack) {
            setFavIconStyle({ color: colors.themeRed });
            changeTotalFavCourses(totalFavCourses + 1);

        }
        else {
            setFavIconStyle({ color: colors.themeBlack });
            changeTotalFavCourses(totalFavCourses - 1);
        }
    }

    return (
        <StyledCardLi>

            <CardHeader thisheaderBgColor={bgColor}>
                <span style={{ color: txtColor }}>{name}</span>
            </CardHeader>

            <CardTitle>Learn {name}</CardTitle>

            <CardDescription>
                {description}
            </CardDescription>

            <Price>
                <p class="m-0 d-flex justify-content-start align-items-center">
                    <span>{price}</span>
                </p>
                <FavoriteIcon onClick={handleFavIconStyleChange} color='action' style={favIconStyle} fontSize="default" />
            </Price>

        </StyledCardLi>
    )
}

export default Card;


const Price = styled.div.attrs(pops => ({
    className: "",
}))`

    padding: 1.8em 0.6em;
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-template-rows: auto;
    
    & > p{
        color: ${props => props.theme.colors.themeGreen};
        font-weight: 700;
        font-size: 1.2rem;
        position: relative;

        &::before{
            content: "Self-paced";
            position: absolute;
            top: -15px;
            left: 0;
            color: black;
            font-size: 0.75em;
        }
    }

`;

const CardDescription = styled.p.attrs(props => ({
    className: "",
}))`

    padding: 1em 0.6em;
    padding-bottom: 5em;
    font-size: 0.85rem;
    font-weight: 400;
    position: relative;
    --img-size: 30px;

    &::after{
        content: "";
        position: absolute;
        display: inline-block;
        width: var(--img-size); 
        height: var(--img-size);
        background: url(${w3LogoImg}) center no-repeat;
        background-size: contain;
        bottom: 10px;
        left: 10px;
    }
`;

const CardTitle = styled.h3.attrs(props => ({
    className: "",
}))`

    padding: 1em 0.6em;
    font-size: 1.25rem;
    font-weight: 500;

`;

const CardHeader = styled.header.attrs(() => {

})`

    /* background-color: #232532; */
    background-color: ${props => props.thisheaderBgColor};
    display: flex;
    justify-content: center;
    align-items: center;

    & > span{
        color: white;
        font-size: 1.9rem;
        font-weight: 700;
        letter-spacing: 2px;
    }
`;

const StyledCardLi = styled.li.attrs(() => {

})`
  
    /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.4); */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px repeat(3, auto);
    grid-gap: 0;

    & > *{
        margin: 0 !important;
    }

    & > *:not(:first-child){
        border: 0.5px solid ${props => props.theme.colors.themeBlack};
        border: 0.5px solid rgb(235, 235, 235);
        border: 0.5px solid rgb(218, 218, 218);
    }

    & > *:nth-child(2),
    & > *:nth-child(3){
        border-bottom: 0;
    }

    position: relative;
    /* --bottom-line-visibility: none; */
    --bottom-line-height: 0px;

    :hover{
        /* outline: 2px solid red; */
        cursor: pointer;
        /* --bottom-line-visibility: inline-block; */
        --bottom-line-height: 5px;
    }
    
    &::after{
        content: "";
        position: absolute;
        z-index: 10;
        left: 0;
        bottom: 0;
        display: inline-block;
        width: 100%;
        transition: height 400ms ease-in-out 0s;
        height: var(--bottom-line-height);
        
        background-color: ${props => props.theme.colors.themeGreen};
    } 

`;


