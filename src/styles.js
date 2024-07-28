import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Section = styled.section`
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const ProfileImageContainer = styled.div`
  margin-bottom: 20px;
  img {
    border-radius: 50%;
  }
`;
export const ImageContainer = styled.div`
display:flex;
justify-content: center;
gap: 20px;
`;


export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background: #444;
  color: #fff;
`;


export const FooterContainer = styled.footer`
  padding: 20px;
  background: #333;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 1rem;
    color: #333;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #444;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;

export const GlobalStyle = createGlobalStyle`
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
