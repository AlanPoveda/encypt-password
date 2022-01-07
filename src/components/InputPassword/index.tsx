import { useState } from 'react'
import { InputPasswordStyle } from './styles'
import { sha512 } from "js-sha512"


export function InputPassword(){
    const [password, setPassword] = useState('');
    const [passwordEncrypt, setEncryptPassword] = useState('');
    const [message, setMessage] = useState('');
    
    function generatePassword(){
        if(password.length == 0) return setMessage("Input valid password");
        setEncryptPassword(sha512(password));     
        setMessage("Password generate")
        setTimeout(() => {setMessage("")}, 2000)
    }

    function copyEncryptPassword(){
        if(passwordEncrypt.length == 0) return setMessage("Input valid password");
        navigator.clipboard.writeText(passwordEncrypt);
        setMessage("Password Copied")  
        setTimeout(() => {setMessage("")}, 2000)   
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
            <p>{message}</p>
        </InputPasswordStyle>
    );
    
}