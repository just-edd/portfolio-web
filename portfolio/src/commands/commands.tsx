interface Command {
    name: string;
    description: string;
    run?: () => React.ReactNode;
}

export const commands: Command[] = [
    {
        name: "help",
        description: "List all available commands",
        run: () => (
            <>
                {commands.map((cmd) => (
                    <div key={cmd.name} style={{ marginLeft: "4rem" }}>
                        <p>`<span style={{ color: 'var(--green-color)' }}>{cmd.name}</span>`</p>
                        <p style={{ marginLeft: "3rem", color: "#c2c4c7" }}>- {cmd.description}</p>
                    </div>
                ))}
            </>
        )
    },
    {
        name: "clear",
        description: "Clear the terminal history"
    },
    {
        name: "about",
        description: "Short description about me",
        run: () => (
            <>
                <div style={{ lineHeight: '2rem' }}>
                    <p>Hi, my name is <span style={{ color: 'var(--green-color)' }}>Tim 'edd' Barabas</span>!</p>
                    <p>I'm an <b>indie programmer</b>, that enjoys turning ideas into code. Based in <b>Slovakia</b>.</p>
                    <p>I am passionate about writting codes and developing web applications to solve real-life.</p>
                </div>
            </>
        )
    }
]