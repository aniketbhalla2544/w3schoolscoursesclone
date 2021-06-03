import styled from 'styled-components';

const Container = styled.div.attrs(() => ({
    className: "container",
}))`

    border: ${props => props.border ? "2px solid red" : "none"};
`;

export default Container;