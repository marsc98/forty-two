import styled from 'styled-components';

export const Title = styled.text`
    font-size: 1.4rem;
    font-weight: 600;
    font-family: 'Roboto';
    color: ${props => props.black ? 'black' : '#ffffff'};

    @media(min-width: 768px) {
        font-size: 2.4rem;
        font-weight: 700;
    }
`;