import styles from './header.module.scss';

interface HeaderProps {
    title: string;
}

export function Header(props: HeaderProps){
    return(
        <header className={styles.HeaderStyle}>
            <title>Encrypt password 🔒</title>
            <h1>{props.title}</h1>
        </header>
    );
}