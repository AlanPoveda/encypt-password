import styled from 'styled-components'


export const InputPasswordStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    input{
        padding: 1rem;
        border: 0.1rem solid var(--background-button-color);
        border-radius: 0.5rem;
    }

    button{
        background: var(--background-button-color);
        border: none;
        padding: 0.9rem;
        border-radius: 0.2rem;

        color: white;

        margin: 0.5rem;

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