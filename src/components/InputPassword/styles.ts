import styled from 'styled-components'


export const InputPasswordStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:20%;

    input{
        width: 15rem;
        padding: 1rem;
        border: 0.1rem solid var(--background-button-color);
        border-radius: 0.2rem;
    }

    button{
        width: 10rem;
        background: var(--background-button-color);
        border: 0.1rem solid var(--background-button-color);
        padding: 0.9rem;
        border-radius: 0.2rem;

        color: white;

        margin-top: 1rem;

        cursor: pointer;

        transition: 0.4s;

        :hover{
            background: white;
            color: var(--background-button-color);
        }
    }

    button[type='button'] {
        width: 10rem;
        background: white;
        border: 0.1rem solid var(--background-button-color);
        padding: 0.9rem;
        border-radius: 0.2rem;

        color: var(--background-button-color);

        margin-top: 1rem;

        cursor: pointer;

        transition: 0.4s;

        :hover{
            background: var(--background-button-color);
            color: white;
        }
    }

    p{
        color: #2FDD92;
        font-size: 2rem;
        padding-top: 2rem;
    }

`
