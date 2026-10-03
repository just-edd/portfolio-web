import { useState } from "react";
import { commands } from "../commands/commands";

const Terminal: React.FC = () => {
    const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
    const [input, setInput] = useState<string>("");

    const executeCommand = () => {
        if (input.trim() === "") return;

        const command = commands.find((cmd) => cmd.name === input.trim());

        if (input.trim() === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        if (!command) {
            setHistory((prev) => [
                ...prev,
                {
                    command: input,
                    output: <p>Command `<span style={{ color: 'var(--guest-color)' }}>{input}</span>` not found!</p>
                }
            ]);
            setInput("");
            return;
        }

        const output = command.run!();

        setHistory((prev) => [...prev, { command: input, output }]);
        setInput("");
    };

    return (
        <div className="terminal">
            <div className="terminal-history">
                {history.map((line, index) => (
                    <>
                        <p key={index}>
                            <span style={{ color: 'var(--guest-color)' }}>visitor</span>@<span style={{ color: 'var(--green-color)' }}>terminal.edd.dev</span>:~$ {line.command}
                        </p>
                        {line.output}
                    </>
                ))}
            </div>

            <div className="terminal-input">
                <p><span style={{ color: 'var(--guest-color)' }}>visitor</span>@<span style={{ color: 'var(--green-color)' }}>terminal.edd.dev</span>:~$</p>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") executeCommand();
                    }}
                    autoFocus
                />
            </div>
        </div>
    )
};

export default Terminal;