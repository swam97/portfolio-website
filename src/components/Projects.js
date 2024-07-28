import React from 'react';
import Image from 'next/image';
import { Section, Title, Text, ImageContainer } from '../styles';

const Projects = () => (
    <Section>
        <Title>My Projects</Title>
        <Text>
            Here are some of the projects I have worked on:
        </Text>
        <br></br>

        <ul>
            <h2>2024 - Current</h2>
            <br></br>
            <ImageContainer>
                <Image src="/images/tap.png" alt="TAP" width={300} height={200} />

                <Image src="/images/mantap.png" alt="MANTAP" width={300} height={200} />
            </ImageContainer>
            <br></br>
            <li>Tabung Amanah Pekerja Brunei, DSP Digital Development (Tech Team Lead)</li>
            <li>Mandiri Taspen Indonesia, DSP Digital Development (Assistant Team Lead)</li>
            <br></br>
            <h2>2023 - 2024</h2>
            <br></br>
            <ImageContainer>
                <Image src="/images/sme.jpeg" alt="TAP" width={300} height={200} />
            </ImageContainer>
            <br></br>
            <li>SME Bank Thailand, DSP Digital Development (Assistant Team Lead)</li>
            <br></br>
            <h2>2023</h2>
            <br></br>
            <ImageContainer>
                <Image src="/images/bibd.jpeg" alt="TAP" width={300} height={200} />

                <Image src="/images/lhb.jpeg" alt="MANTAP" width={300} height={200} />
            </ImageContainer>
            <br></br>
            <li>Land and Houses Bank Thailand, DSP Digital Development (Assistant Team Lead)</li>
            <li>BIBD Bank Brunei, DSP Digital Development (Project Team)</li>
            <br></br>
            <h2>2022</h2>
            <br></br>
            <ImageContainer>
                <Image src={`${process.env.PUBLIC_URL}/uobciti.png`} alt="TAP" width={300} height={200} />

                <Image src={`${process.env.PUBLIC_URL}/ub.jpg`} alt="MANTAP" width={300} height={200} />
            </ImageContainer>
            <br></br>
            <li>Constellation Project UOB - Citibank (Project Team)</li>
            <li>Union Bank Sri Lanka, DSP Digital Development (Project Team)</li>
        </ul>
        <br></br>
    </Section>
);

export default Projects;
