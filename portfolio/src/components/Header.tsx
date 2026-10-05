import { VERSION } from "../version";
import Logo from "./Logo";

const Header: React.FC = () => {
    return (
        <>
            <p><span style={{ color: 'var(--yellow)' }}>visitor</span>@<span style={{ color: 'var(--green)' }}>terminal.edd.dev</span>:~$ welcome</p>
            <Logo />
            <p>Welcome to my terminal portfolio. (Version {VERSION})</p>
            <br />
            <p>-----</p>
            <br />
            <p>This project's source code can be seen in this <a href="https://github.com/just-edd/portfolio-web/tree/main/portfolio" target="_blank">GitHub repo</a>.</p>
            <br />
            <p>-----</p>
            <br />
            <p>Type '<span style={{ color: 'var(--green-dim)' }}>help</span>' for a list of available commands.</p>
            <br />
        </>
    )
};

export default Header;