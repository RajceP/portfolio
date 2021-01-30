import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1.6rem;
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
