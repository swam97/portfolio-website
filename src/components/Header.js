import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #333;
  color: #fff;
`;

const HeaderTitle = styled.h1`
font-family: 'Roboto', sans-serif; /* Apply Roboto font */
  font-size: 2.0 rem; /* Adjust the font size as needed */
  color: #fff;
  margin: 0;
`;

const Header = () => (
    <>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <HeaderContainer>
            <HeaderTitle>Ammar Abdul Wahid</HeaderTitle>
        </HeaderContainer>
    </>
);

export default Header;
