import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SyledAnchor = styled.a`
  display: block;
  position: relative;
  top: -1.2rem;
  visibility: hidden;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    top: -2.4rem;
  }
`;

const Anchor = ({ id }) => <SyledAnchor id={id} />;

Anchor.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Anchor;
