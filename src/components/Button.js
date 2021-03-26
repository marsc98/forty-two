import styled from 'styled-components';
import Link from 'next/link';

export const Button = styled.button`
    padding: 0.5rem 0.8rem;

    background: ${props => props.blue ? '#00B1F7' : props.green ? '#00BF36' : props.yellow ? '#F7EB00' : 'red'};
    /* color: ${props => props.blue ? 'black' : '#ffffff'}; */
    color: black;
    opacity: 60%;

    border: none;
    border-radius: 5px;

    box-decoration-break: none;

    @media(min-width: 768px) {
        margin: 1rem 0.3rem;
    }
`;