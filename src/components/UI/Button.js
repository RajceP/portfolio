import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 5px 12px;
  border-radius: 9999px;
  color: ${({ theme: { colors } }) => colors.purple};
  background-color: ${({ theme: { colors } }) => colors.pink};
  font: inherit;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 250ms ease-out;

  :first-of-type {
    margin-right: 6px;
  }

  @media (hover: hover) {
    :hover {
      background-color: ${({ theme: { colors } }) => colors.yellow};
    }
  }
`;

const Button = ({ link, children }) => (
  <a href={link} rel="noopener noreferrer" target="_blank">
    <StyledButton>{children}</StyledButton>
  </a>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
