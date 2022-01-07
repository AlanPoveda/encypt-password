import { useState } from 'react'
import { InputPasswordStyle } from './styles'

export function InputPassword(){
    const [password, setPassword] = useState('');
    
    function generatePassword(){
        console.log(password);
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
            <button type="button">Copy new password</button>
        </InputPasswordStyle>
    );
    
}