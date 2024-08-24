import React from 'react';
import { Section, Title, Text, EduText, PlaceText, SkillContainer } from '../styles';


const Skills = () => (
    <Section>
        <Title>My Skills</Title>
        <br></br>
        <Text>
            Here are some of the skills I possess:
        </Text>

        <SkillContainer>
            <EduText>Technical Skills</EduText>
            <PlaceText>Fluent in Python, java, javascript, swift, dart, c, react, RPGLE, HTML, CSS, nodeJS and SQL</PlaceText>
            <PlaceText>Experienced with Linux, GitHub, GitLab, Docker, AWS, Google Firebase, ClickUp, Jira</PlaceText>
            <EduText>Interpersonal Skills</EduText>
            <PlaceText>Adaptability, Motivation, Teamwork, Leadership, Integrity, Empathy, Problem Solving, Responsibility </PlaceText>

            {/* <SkillText>1. Programming</SkillText>
      <SkillText>2. Problem Solving and Analytical Thinking</SkillText>
      <SkillText>3. Software Design</SkillText>
      <SkillText>4. Software Architecture</SkillText>
      <SkillText>5. Coaching and Training</SkillText> */}
        </SkillContainer>

    </Section>
);

export default Skills;
