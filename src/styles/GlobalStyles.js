import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: white;
    }
    html, body, #root{
        width: 100%;
        height: 100%;
    }
    *, button, input{
        border: 0;
        background: none;
        font: 400 1.8rem/1 'Roboto', sans-serif;
        outline: none;
    }
    html{
        background: #C4C4C4;
    }
    :root{
        font-size: 62.5%;
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

`;
