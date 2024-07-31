import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Section, Title, Text, ProfileImageContainer } from '../styles';
// import Typist from 'react-typist';
import TypingEffect from '../components/TypingEffect';


const Home = () => {
    const [text, setText] = useState('Hi there, welcome to my portfolio page. Looking forward to work with you!');
    const [key, setKey] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setText('Hi there, welcome to my portfolio page. Looking forward to work with you!');
            setKey(prevKey => prevKey + 1);
        }, 15000); // Repeat every 60 seconds (1 minute)

        return () => clearInterval(interval);
    }, []);
    return (
        <Section>
            {/* <Title>Welcome to My Portfolio</Title> */}
            <ProfileImageContainer>
                <Image src="/images/am.jpeg" alt="Profile Picture" width={200} height={200} priority />
            </ProfileImageContainer>
            {/* <Typist key={key} cursor={{ show: true, blink: true, element: '|' }}> */}
            <TypingEffect text={text} cursor={{ show: true, blink: true, element: '|' }}>
            </TypingEffect>

            {/* </Typist> */}
        </Section >
    );
}

export default Home;
