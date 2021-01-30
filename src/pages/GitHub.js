/* eslint-disable camelcase */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GitHubCard from '../components/GitHubCard';
import Anchor from '../components/UI/Anchor';
import Title from '../components/UI/Title';

const Cont = styled.div`
  display: grid;
  grid-template-columns: repeat(1 auto);

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    grid-template-columns: repeat(2, auto);
  }

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    grid-template-columns: repeat(3, auto);
  }
`;

const Text = styled.div`
  color: ${({ theme: { colors } }) => colors.yellow};
  font: inherit;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const GitHub = () => {
  const [data, setData] = useState({
    ghData: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    const getData = async () => {
      if (data.loading) {
        await axios
          .get('https://api.github.com/users/rajcep/repos', {
            params: { per_page: 6, sort: 'pushed', direction: 'desc' },
          })
          .then((response) => {
            setData({
              ...data,
              ghData: response.data,
              loading: false,
            });
          })
          .catch((_error) => {
            setData({
              ...data,
              loading: false,
              error: true,
            });
          });
      }
    };

    getData();
  });

  let gitHubOutput = <Text>Loading Instagram post.</Text>;

  if (data.error) {
    gitHubOutput = <Text>Ouch, something went wrong!</Text>;
  }

  if (!data.loading && data.ghData.length > 0) {
    gitHubOutput = (
      <>
        <Anchor id="github" />
        <Title>{'{ gitHub }'}</Title>
        <Cont>
          {data.ghData.map(
            ({ node_id, full_name, html_url, language, stargazers_count, watchers_count }) => (
              <GitHubCard
                key={node_id}
                link={html_url}
                language={language}
                stars={stargazers_count}
                watches={watchers_count}
              >
                {full_name}
              </GitHubCard>
            ),
          )}
        </Cont>
      </>
    );
  }

  return gitHubOutput;
};

export default GitHub;
