import { useEffect, useState } from "react";

const messages = [
    "Initialize ETUSbot Systems...",
    "Loading AI Modules...",
    "Connecting Neural Network...",
    "Access Granted.",
    "Welcome to ETUSbot Software Headquarters."
];

function Typewriter() {
    const [text, setText] = useState("");
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

   useEffect(() => {
    if (messageIndex >= messages.length) return;

    const timer = setTimeout(() => {
        const currentMessage = messages[messageIndex];

        if (charIndex < currentMessage.length) {
            setText(currentMessage.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
    } else {
        setTimeout(() => {
            setMessageIndex(messageIndex + 1);
            setCharIndex(0);
            setText("");
        },1000);
    }
   }, 50);

   return () => clearTimeout (timer);
}, [charIndex, messageIndex]);

    return (
        <div className="typewriter">
            <h2>{text}<span>|</span></h2>
        </div>
    );
}

export default Typewriter;