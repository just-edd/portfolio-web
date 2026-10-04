import { useEffect, useState } from "react";

const Typing: React.FC<{ text: string; speed?: number }> = ({ text, speed = 75 }) => {
    const [displayed, setDisplayed] = useState<string>("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayed(text.slice(0, index + 1));
            index++;

            if (index >= text.length)
                clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <p>
            <span>{displayed}</span>
            <span className="cursor"></span>
        </p>
    )
};

export default Typing;