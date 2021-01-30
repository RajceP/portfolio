import React from 'react';
import styled from 'styled-components';
import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';

const Wrap = styled.div`
  padding: 0 15px;
`;

const HandEmoji = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const About = () => (
  <>
    <Anchor id="about" />
    <Title>{'{ about }'}</Title>
    <Wrap>
      <h1>
        Hello, I&apos;m Petr Rajtslegr&nbsp;
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <HandEmoji role="img" aria-label="Waving hand">
          👋
        </HandEmoji>
      </h1>
      <h3>
        I am developer based in Prague, Czech Republic and I love to create things&nbsp;
        <span role="img" aria-label="Smile">
          🙂
        </span>
      </h3>
    </Wrap>
  </>
);

export default About;
