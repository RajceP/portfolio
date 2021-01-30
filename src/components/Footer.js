import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Facebook from '../assets/icons/facebook.svg';
import Github from '../assets/icons/github.svg';
import Instagram from '../assets/icons/instagram.svg';
import LastFm from '../assets/icons/last-dot-fm.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import SoundCloud from '../assets/icons/soundcloud.svg';
import Telegram from '../assets/icons/telegram.svg';
import Twitter from '../assets/icons/twitter.svg';
import WaveSvg from '../assets/wave.svg';

const FootCont = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Foot = styled.div`
  height: 140px;
  color: ${({ theme: { colors } }) => colors.purple};
  background-color: ${({ theme: { colors } }) => colors.pink};
  font-family: inherit;
  text-align: center;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    height: 120px;
  }
`;

const Wave = styled.img`
  width: 100%;
  margin-bottom: -1px;
  vertical-align: bottom;
`;

const Ul = styled.ul`
  display: block;
  padding: 3px 0;
  text-align: center;
  list-style: none;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    display: inline-block;
    padding: 16px 0;
  }
`;

const Li = styled.li`
  display: inline-block;
`;

const Icon = styled.a`
  margin: 8px;

  img {
    transition: all 250ms ease-out;
    filter: invert(9%) sepia(24%) saturate(1643%) hue-rotate(217deg) brightness(96%) contrast(94%);
  }

  @media (hover: hover) {
    :hover > img {
      -webkit-transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
  }
`;

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    const curYear = new Date().getFullYear();
    setYear(curYear);
  }, []);

  return (
    <FootCont>
      <Wave src={WaveSvg} alt="Wave SVG" />
      <Foot>
        <Ul>
          <Li>
            <Icon href="https://github.com/RajceP" rel="noopener noreferrer" target="_blank">
              <img width="32px" src={Github} alt="GitHub Icon" />
            </Icon>
          </Li>
          <Li>
            <Icon
              href="https://www.linkedin.com/in/petr-rajtšlégr-5aa84a16b"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img width="32px" src={Linkedin} alt="LinkedIn Icon" />
            </Icon>
          </Li>
          <Li>
            <Icon
              href="https://www.facebook.com/petr.rajtslegr"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img width="32px" src={Facebook} alt="Facebook Icon" />
            </Icon>
          </Li>
          <Li>
            <Icon href="https://twitter.com/RajceP" rel="noopener noreferrer" target="_blank">
              <img width="32px" src={Twitter} alt="Twitter Icon" />
            </Icon>
          </Li>
        </Ul>
        <Ul>
          <Li>
            <Icon href="https://www.instagram.com/rajce" rel="noopener noreferrer" target="_blank">
              <img width="32px" src={Instagram} alt="Instagram Icon" />
            </Icon>
          </Li>
          <Li>
            <Icon href="https://t.me/rajcep" rel="noopener noreferrer" target="_blank">
              <img width="32px" src={Telegram} alt="Telegram Icon" />
            </Icon>
          </Li>
          <Li>
            <Icon href="https://www.last.fm/user/RajceP" rel="noopener noreferrer" target="_blank">
              <img width="32px" src={LastFm} alt="Last.fm Icon" />
            </Icon>
          </Li>
          <Li>
            <Icon href="https://soundcloud.com/rajcep" rel="noopener noreferrer" target="_blank">
              <img width="32px" src={SoundCloud} alt="SoundCloud Icon" />
            </Icon>
          </Li>
        </Ul>
        <div>Petr Rajtslegr &copy; {year}</div>
      </Foot>
    </FootCont>
  );
};

export default Footer;
