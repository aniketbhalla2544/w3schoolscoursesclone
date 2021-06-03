import styled from 'styled-components/macro';

const Input = styled.input.attrs(props => ({
    className: props.className,
    type: props.type || "text",
    name: props.name || undefined,
}))`

    padding: 0.1em 1em;
    border-radius: 1em;
    font-size: ${props => props.fs || props.theme.fontSizes.md};
    border: 0.5px solid rgb(170, 170, 170);

    &:focus{
        outline: none !important;
    }

`;

export default Input;