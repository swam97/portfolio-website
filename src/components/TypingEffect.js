import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 50, delay = 1000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        if (typing) {
            if (index < text.length) {
                setTimeout(() => {
                    setDisplayedText(displayedText + text[index]);
                    setIndex(index + 1);
                }, speed);
            } else {
                setTyping(false);
                setTimeout(() => {
                    setTyping(true);
                    setDisplayedText('');
                    setIndex(0);
                }, delay);
            }
        }
    }, [typing, index, text, speed, delay]);

    return <span>{displayedText}</span>;
};

export default TypingEffect;
