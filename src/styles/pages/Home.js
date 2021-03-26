import styled from 'styled-components';

export const Main = styled.div`
    height: 100vh;
    width: 100;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #C4C4C4;

    .TitleBox {
        width: 80%;
        
        @media(min-width: 768px) {
            width: 60%;
        }
    }

    .ButtonArea {
        width: 80%;
        height: 20vh;

        margin-top: 2rem;

        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: 3fr 1fr;

        @media(min-width: 768px) {
            width: 60%;
        }
    }
`;