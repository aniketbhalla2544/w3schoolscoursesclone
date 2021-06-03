import styled from 'styled-components';


const Wrapper = styled.section.attrs(props => ({
    className: "container-fluid",
}))`
    border: ${props => props.border ? "1px solid red" : "none"};
    margin: ${props => props.mx || "4rem"} 0;
`

export default Wrapper;
