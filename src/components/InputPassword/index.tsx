import { useState } from 'react'
import { InputPasswordStyle } from './styles'
import { sha512 } from "js-sha512"


export function InputPassword(){
    const [password, setPassword] = useState('');
    const [passwordEncrypt, setEncryptPassword] = useState('');
    
    function generatePassword(){
        setEncryptPassword(sha512(password));        
    }

    function copyEncryptPassword(){
        navigator.clipboard.writeText(passwordEncrypt);    
    }

    return(
        <InputPasswordStyle>
            <input
                type='password'
                placeholder='Enter Password'
                onChange={ e => setPassword(e.target.value)}
                value={password}
            ></input>
            <button type="submit" onClick={generatePassword}>Generate</button>
            <button type="button" onClick={copyEncryptPassword}>Copy new password</button>
        </InputPasswordStyle>
    );
    
}