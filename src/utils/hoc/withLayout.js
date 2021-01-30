import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Toolbar from '../../components/Toolbar';

const View = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 95%;
  height: 100%;
  margin: auto;
  padding-bottom: 180px;
  font-size: 0.66em;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    padding-bottom: 300px;
    font-size: 1em;
  }

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    width: 50%;
  }
`;

const WithLayout = ({ children }) => (
  <View>
    <Toolbar />
    <Main>{children}</Main>
    <Footer />
  </View>
);

WithLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithLayout;
