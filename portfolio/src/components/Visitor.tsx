const Visitor: React.FC<{ text: string }> = ({ text }) => {
    return (
        <p>
            <span style={{ color: 'var(--visitor-color)' }}>visitor</span>
            @
            <span style={{ color: 'var(--green-color)' }}>terminal.edd.dev</span>
            :~$ {text}
        </p>
    )
};

export default Visitor;