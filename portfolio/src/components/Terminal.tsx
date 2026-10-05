import { useState } from "react";
import { commands } from "../config";
import Typing from "./Typing";

interface History {
    command: string;
    response?: string;
}

const Terminal: React.FC = () => {
    const [history, setHistory] = useState<History[]>([]);
    const [input, setInput] = useState<string>("");

    const executeCommand = () => {
        const command = input.trim();

        if (!command) return;

        if (command === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        const validCommand = commands.find((cmd) => cmd.name === command);

        if (!validCommand) {
            setHistory((prev) => [
                ...prev,
                {
                    command,
                    response: `Command '${command}' not found.`
                }
            ]);
            setInput("");
            return;
        }

        const response = typeof validCommand.response === "function" ? validCommand.response() : validCommand.response;

        setHistory((prev) => [
            ...prev,
            {
                command,
                response
            }
        ]);
        setInput("");
    };

    return (
        <>
            <div>
                {history.map((data, index) => (
                    <div key={index}>
                        <p><span style={{ color: 'var(--yellow)' }}>visitor</span>@<span style={{ color: 'var(--green)' }}>terminal.edd.dev</span>:~$ {data.command}</p>
                        {data.response && <Typing text={data.response} />}
                    </div>
                ))}
            </div>

            {/* Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <p><span style={{ color: 'var(--yellow)' }}>visitor</span>@<span style={{ color: 'var(--green)' }}>terminal.edd.dev</span>:~$</p>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") executeCommand();
                }}
                autoFocus
                />
            </div>
        </>
    )
};

export default Terminal;