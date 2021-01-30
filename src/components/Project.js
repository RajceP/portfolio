import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from './UI/Button';

const Img = styled.img`
  width: 100px;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    width: 200px;
    border-radius: 30px;
  }
`;

const Card = styled.div`
  margin-bottom: 1.2rem;
  border: 2px solid #e91e63;
  border-radius: 12px;
  position: relative;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const MockupColumn = styled.div`
  margin: 12px 0;
  text-align: center;
  width: 100%;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    width: 40%;
  }
`;

const TextColumn = styled.div`
  width: 95%;
  margin: auto;
  position: relative;
  text-align: left;
  right: 0;
  top: 0;
  bottom: 12px;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    position: absolute;
    width: 60%;
  }
`;

const Buttons = styled.div`
  float: none;
  text-align: center;
  margin: 12px;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    float: right;
    text-align: left;
  }
`;

const Title = styled.h1`
  text-align: center;
  text-decoration: underline;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    text-align: left;
  }
`;

const Desc = styled.h3``;

const Build = styled.p`
  position: relative;
  margin-top: 5px;
  bottom: 5px;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`;

const Project = ({ title, description, build, image, alt, live, repo }) => {
  const liveOutput = live ? <Button link={live}>LIVE</Button> : null;
  const repoOutput = repo ? <Button link={repo}>REPO</Button> : null;

  return (
    <Card>
      <MockupColumn>
        <Img src={image} alt={alt} />
      </MockupColumn>
      <TextColumn>
        <Buttons>
          {liveOutput}
          {repoOutput}
        </Buttons>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <Build>{build}</Build>
      </TextColumn>
    </Card>
  );
};

Project.propTypes = {
  alt: PropTypes.string.isRequired,
  build: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  live: PropTypes.string,
  repo: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Project.defaultProps = {
  live: null,
  repo: null,
};

export default Project;
