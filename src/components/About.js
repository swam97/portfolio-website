import React from 'react';
import { Section, Title, Text, AboutContainer, AboutText, EduText, EduTitleText, PlaceText, PlaceText2 } from '../styles';

const About = () => (
    <Section>
        <Title>About Me</Title>
        <AboutContainer>
            <Text>
                As a junior software engineer, I am a passionate individual who strives for improvement along with the constantly changing modern technology. With various experiences and personal strengths, quality interactions among team members are key to my work ethic; my goal is to further inspire the world for the better along with the company’s aspirations.
            </Text>

            <EduText>Education</EduText>

            <EduTitleText>Bachelor of Software Engineering (Honours)</EduTitleText>
            <PlaceText>Monash University, Clayton Australia</PlaceText>
            <PlaceText>JPA Scholar</PlaceText>
            <PlaceText>Mar 2018 - Dec 2021</PlaceText>

            <EduTitleText>GCE A Levels</EduTitleText>
            <PlaceText>International Islamic School Malaysia</PlaceText>
            <PlaceText>JPA Scholar</PlaceText>
            <PlaceText>Jun 2015 - Sept 2017</PlaceText>

            <EduText>Achievements</EduText>
            <PlaceText>SAL Employee Recognition Programme Award - March 2024</PlaceText>
            <PlaceText2>Hackathon Winner - HackTable EchoAR - June 2021</PlaceText2>
        </AboutContainer>
    </Section>
);

export default About;
