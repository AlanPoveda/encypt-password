import styled from 'styled-components'


export const InputPasswordStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:20%;

    input{
        width: 15rem;
        padding: 1rem;
        border: 0.1rem solid var(--background-button-color);
        border-radius: 0.5rem;
    }

    button{
        width: 10rem;
        background: var(--background-button-color);
        border: none;
        padding: 0.9rem;
        border-radius: 0.2rem;

        color: white;

        margin-top: 1rem;

        cursor: pointer;

        transition: 0.2s;

        :hover{
            background: #57a0d3;
        }
    }

    p{
        color: #2FDD92;
        font-size: 2rem;
        padding-top: 2rem;
    }

`