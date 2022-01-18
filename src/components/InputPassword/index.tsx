import { useState } from "react";
import styles from './inputPassword.module.scss';
import { sha512 } from "js-sha512";

export function InputPassword() {
    const [password, setPassword] = useState("");
    const [passwordEncrypt, setEncryptPassword] = useState("");
    const [message, setMessage] = useState("");

    function generatePassword() {
        if (password.length == 0) return setMessage("Input a valid password");
        setEncryptPassword(sha512(password));
        setMessage("Password generate");
        setTimeout(() => {
            setMessage("");
        }, 2000);
    }

    function copyEncryptPassword() {
        if (password.length == 0) return setMessage("Input a valid password");
        navigator.clipboard.writeText(passwordEncrypt);
        setMessage("Password Copied");
        setTimeout(() => {
            setMessage("");
        }, 2000);
    }

    return (
        <div className={styles.InputPasswordStyle}>
            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            ></input>
            <button className={styles.generatedButton}type="submit" onClick={generatePassword}>
                Generate
            </button>
            <button type="button" onClick={copyEncryptPassword}>
                Copy new password
            </button>
            <p>{message}</p>
        </div>
    );
}
