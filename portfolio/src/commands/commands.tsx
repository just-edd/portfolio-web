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
    }
]