import Logo from "./Logo"
import Visitor from "./Visitor"

const Header: React.FC = () => {
    return (
        <>
            <Visitor text="welcome to my portfolio!" />
            <Logo />
            <p>Welcome to my terminal portfolio. (Version 1.0.0)</p>
            <br />
            <p>-----</p>
            <br />
            <p>This project's source code can be seen in this <a href="https://github.com/just-edd/portfolio-web" target="_blank">GitHub repository</a>.</p>
            <br />
            <p>-----</p>
            <br />
            <p>Type `<span style={{ color: 'var(--green-color)', filter: 'drop-shadow(0 0 8px var(--green-color))' }}>help</span>` for a list of available commands.</p>
        </>
    )
};

export default Header;