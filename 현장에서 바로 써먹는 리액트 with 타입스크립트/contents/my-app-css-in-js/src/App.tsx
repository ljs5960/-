import React from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: clac(10px + 2vmin);
  color: white;
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spinAnimation} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppLogo src={logo} alt='logo'></AppLogo>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink href='https://reactjs.org' target='blank' rel='noopener noreferrer'>Learn React</AppLink>
      </Header>
    </Container>
  );
}

export default App;
