import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #f5f5f5;
    color: #333;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    emailjs.init('H8EJgslUK7a226R8h'); // Initialize EmailJS here with your public key
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
