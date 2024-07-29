import React from 'react';
import { Section, Title, Text, SkillText,SkillContainer } from '../styles';


const Skills = () => (
    <Section>
        <Title>My Skills</Title>
        <br></br>
        <Text>
            Here are some of the skills I possess:
        </Text>
        <br></br>
        <br></br>
        
            
        <SkillContainer>
      <SkillText>1. Programming</SkillText>
      <SkillText>2. Problem Solving and Analytical Thinking</SkillText>
      <SkillText>3. Software Design</SkillText>
      <SkillText>4. Software Architecture</SkillText>
      <SkillText>5. Coaching and Training</SkillText>
    </SkillContainer>
        
    </Section>
);

export default Skills;
