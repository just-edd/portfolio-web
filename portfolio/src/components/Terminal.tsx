import { useEffect, useState } from "react";
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

    {/* Key listener, so we don't have to use input... it will always listens for key */}
    useEffect(() => {
        const listenForKey = (e: KeyboardEvent) => {
            switch(e.key) {
                case 'Enter':
                    executeCommand();
                    return;
                case 'Backspace':
                    setInput(prev => prev.slice(0, -1));
                    return;
                case 'Tab':
                    e.preventDefault();
                    return;
                default:
                    e.preventDefault(); // prevent ctrl + a
                    if (
                        e.key.length === 1 &&
                        !e.ctrlKey &&
                        !e.altKey &&
                        !e.metaKey
                    ) setInput(prev => prev + e.key);
            };
        };

        window.addEventListener("keydown", listenForKey);

        return () => window.removeEventListener("keydown", listenForKey);
    }, [executeCommand]);

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
            <div style={{ display: 'inline-flex' }}>
                <p><span style={{ color: 'var(--yellow)' }}>visitor</span>@<span style={{ color: 'var(--green)' }}>terminal.edd.dev</span>:~$</p>
                <div className="input-wrapper">
                    <span>{input}</span>
                    <span className="custom-caret"></span>
                </div>
            </div>
        </>
    )
};

export default Terminal;