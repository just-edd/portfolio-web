const Header: React.FC = () => {
    return (
        <div>
            <p><span style={{ color: 'var(--guest-color)' }}>visitor</span>@<span style={{ color: 'var(--green-color)' }}>terminal.edd.dev</span>:~$ welcome</p>
            <pre style={{ fontSize: '1rem' }}>{String.raw`

            __    __
  ___  ____/ /___/ /
 / _ \/ __  / __  / 
/  __/ /_/ / /_/ /  
\___/\__,_/\__,_/ 


            `}</pre>
            <p>Welcome to my terminal portfolio. (Version 1.0.0)</p>
            <br />
            <p>----</p>
            <br />
            <p>This project's source code can be seen in this project's <a href="https://github.com/just-edd/portfolio-web/tree/main" target="_blank">GitHub repo</a>.</p>
            <br />
            <p>----</p>
            <br />
            <p>For a list of available commands, type `<span style={{ color: 'var(--green-color)' }}>help</span>`.</p>
            <br />
        </div>
    )
};

export default Header;