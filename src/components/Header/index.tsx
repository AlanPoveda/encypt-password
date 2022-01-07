import { HeaderStyle } from './styles'

interface HeaderProps {
    title: string;
}

export function Header(props: HeaderProps){
    return(
        <HeaderStyle>
            <title>Encrypt password 🔒</title>
            <h1>{props.title}</h1>
        </HeaderStyle>
    );
}