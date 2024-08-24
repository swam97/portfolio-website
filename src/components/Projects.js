// import React from 'react';
// import Image from 'next/image';
// import { Section, Title, Text, ImageContainer } from '../styles';

// const Projects = () => (
//     <Section>
//         <Title>My Projects</Title>
//         <Text>
//             Here are some of the projects I have worked on:
//         </Text>
//         <br></br>

//         <ul>
//             <h2>2024 - Current</h2>
//             <br></br>
//             <ImageContainer>
//                 <Image src="/images/tap.png" alt="TAP" width={300} height={200} />

//                 <Image src="/images/mantap.png" alt="MANTAP" width={300} height={200} />
//             </ImageContainer>
//             <br></br>
//             <li>Tabung Amanah Pekerja Brunei, DSP Digital Development (Tech Team Lead)</li>
//             <li>Mandiri Taspen Indonesia, DSP Digital Development (Assistant Team Lead)</li>
//             <br></br>
//             <h2>2023 - 2024</h2>
//             <br></br>
//             <ImageContainer>
//                 <Image src="/images/sme.jpeg" alt="TAP" width={300} height={200} />
//             </ImageContainer>
//             <br></br>
//             <li>SME Bank Thailand, DSP Digital Development (Assistant Team Lead)</li>
//             <br></br>
//             <h2>2023</h2>
//             <br></br>
//             <ImageContainer>
//                 <Image src="/images/bibd.jpeg" alt="TAP" width={300} height={200} />

//                 <Image src="/images/lhb.jpeg" alt="MANTAP" width={300} height={200} />
//             </ImageContainer>
//             <br></br>
//             <li>Land and Houses Bank Thailand, DSP Digital Development (Assistant Team Lead)</li>
//             <li>BIBD Bank Brunei, DSP Digital Development (Project Team)</li>
//             <br></br>
//             <h2>2022</h2>
//             <br></br>
//             <ImageContainer>
//                 <Image src="/images/uobciti.png" alt="TAP" width={300} height={200} />

//                 <Image src="/images/ub.jpg" alt="MANTAP" width={300} height={200} />
//             </ImageContainer>
//             <br></br>
//             <li>Constellation Project UOB - Citibank (Project Team)</li>
//             <li>Union Bank Sri Lanka, DSP Digital Development (Project Team)</li>
//         </ul>
//         <br></br>
//     </Section>
// );

// export default Projects;

import React from 'react';
import Image from 'next/image';
import { Section, Title, Text, ImageContainer, ProjectList, ProjectItem, ProjectItem2, ProjectYear } from '../styles';

const Projects = () => (
  <Section>
    <Title>My Projects</Title>
    <br></br>
    <Text>Here are some of the projects I have worked on:</Text>
    <ProjectList>
      <ProjectYear>2024 - Current</ProjectYear>
      <br></br>
      <ImageContainer>
        <Image src="/images/tap.png" alt="TAP" width={300} height={200} />
        <Image src="/images/mantap.png" alt="MANTAP" width={300} height={200} />
      </ImageContainer>
      <ProjectItem>Tabung Amanah Pekerja Brunei, DSP Digital Development (Tech Team Lead)</ProjectItem>
      <ProjectItem>Mandiri Taspen Indonesia, DSP Digital Development (Assistant Team Lead)</ProjectItem>

      <ProjectYear>2023 - 2024</ProjectYear>
      <br></br>
      <ImageContainer>
        <Image src="/images/sme.jpeg" alt="TAP" width={300} height={200} />
        <Image src="/images/sme.png" alt="TAP" width={300} height={100} />
      </ImageContainer>
      <ProjectItem>SME Bank Thailand, DSP Digital Development (Assistant Team Lead)</ProjectItem>

      <ProjectYear>2023</ProjectYear>
      <br></br>
      <ImageContainer>
        <Image src="/images/bibd.jpeg" alt="TAP" width={300} height={200} />
        <Image src="/images/lhb.jpeg" alt="MANTAP" width={300} height={200} />
      </ImageContainer>
      <ProjectItem>Land and Houses Bank Thailand, DSP Digital Development (Assistant Team Lead)</ProjectItem>
      <ProjectItem>BIBD Bank Brunei, DSP Digital Development (Project Team)</ProjectItem>

      <ProjectYear>2022</ProjectYear>
      <br></br>
      <ImageContainer>
        <Image src="/images/uobciti.png" alt="TAP" width={300} height={200} />
        <Image src="/images/ub.jpg" alt="MANTAP" width={300} height={200} />
      </ImageContainer>
      <ProjectItem>Constellation Project UOB - Citibank (Project Team)</ProjectItem>
      <ProjectItem2>Union Bank Sri Lanka, DSP Digital Development (Project Team)</ProjectItem2>
    </ProjectList>
  </Section>
);

export default Projects;