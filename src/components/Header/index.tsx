import styles from './header.module.scss';



export function Header(){
    return(
        <div className={styles.HeaderStyle}>
            <h1>Encrypt password 🔐</h1>
        </div>
    );
}