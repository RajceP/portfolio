import React from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';

const Bar = styled.header`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  height: 56px;
  display: flex;
  box-sizing: border-box;
  z-index: 90;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.purple};

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    width: 75%;
    justify-content: space-between;
  }
`;

const Title = styled.p`
  margin: auto 0;
  cursor: pointer;
  animation: slide-in-left 2s;
  transition: all 250ms ease-out;

  @keyframes slide-in-left {
    0% {
      margin-left: -1000%;
    }
    50% {
      margin-left: -1000%;
    }
    100% {
      margin-left: 0px;
    }
  }

  @media (hover: hover) {
    :hover {
      color: ${({ theme: { colors } }) => colors.pink};
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

const Nav = styled.nav`
  margin: auto 0;
  display: none;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    display: block;
  }
`;

const Ul = styled.ul`
  list-style: none;
  animation: slide-in-top 2.5s;

  @keyframes slide-in-top {
    0% {
      margin-top: -1000%;
    }
    50% {
      margin-top: -1000%;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

const Li = styled.li`
  margin: 0 10px;
  display: inline-block;
  transition: all 250ms ease-out;
  cursor: pointer;

  @media (hover: hover) {
    :hover {
      color: ${({ theme: { colors } }) => colors.pink};
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

const Toolbar = () => (
  <Headroom>
    <Bar>
      <Title>
        <a href="#root">{'{ petr.rajtslegr }'}</a>
      </Title>
      <Nav>
        <Ul>
          <Li>
            <a href="#about">{'{ about }'}</a>
          </Li>
          <Li>
            <a href="#instagram">{'{ instagram }'}</a>
          </Li>
          <Li>
            <a href="#projects">{'{ projects }'}</a>
          </Li>
          <Li>
            <a href="#github">{'{ gitHub }'}</a>
          </Li>
          <Li>
            <a href="#contact">{'{ contact }'}</a>
          </Li>
        </Ul>
      </Nav>
    </Bar>
  </Headroom>
);

export default Toolbar;
