/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 12px;
  margin: 8px;
  border: 2px solid #e91e63;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadow};
  outline: none;
  cursor: pointer;
`;

const StyledCounters = styled.span`
  float: right;
`;

const StyledDocumentEmoji = styled.span`
  margin-right: 4px;
`;

const StyledEmoji = styled.span`
  margin: 0 4px;
`;

const GitHubCard = ({ children, link, language, stars, watches }) => {
  return (
    <StyledCard>
      <a href={link} rel="noopener noreferrer" target="_blank">
        <h3>
          <StyledDocumentEmoji role="img" aria-label="Document emoji">
            📄
          </StyledDocumentEmoji>
          <span>{children}</span>
        </h3>
        <span>{language}</span>
        <StyledCounters>
          <StyledEmoji role="img" aria-label="Star emoji">
            ⭐
          </StyledEmoji>
          <span>{stars}</span>
          <StyledEmoji role="img" aria-label="Eye emoji">
            👁️
          </StyledEmoji>
          <span>{watches}</span>
        </StyledCounters>
      </a>
    </StyledCard>
  );
};

GitHubCard.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  watches: PropTypes.number.isRequired,
};

export default GitHubCard;
