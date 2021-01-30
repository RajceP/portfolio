import React from 'react';
import styled from 'styled-components';
import projects from '../assets/projects.json';
import Project from '../components/Project';
import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';

const Wrap = styled.div`
  padding: 0 15px;
`;

const Work = () => {
  const getImg = (img) => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const image = require(`../assets/images/${img}`);
    return image.default;
  };

  const workOutput = projects.map(({ title, image, description, build, live, repo }) => (
    <Project
      key={title}
      image={getImg(image)}
      alt={`${title} mockup image`}
      title={title}
      description={description}
      build={build}
      live={live}
      repo={repo}
    />
  ));

  return (
    <>
      <Anchor id="projects" />
      <Title>{'{ projects }'}</Title>
      <Wrap>{workOutput}</Wrap>
    </>
  );
};

export default Work;
