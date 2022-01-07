import { createGlobalStyle} from 'styled-components'
import '../pages/_app'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-button-color: #33C3F0;
        --title-color: #222;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }

`