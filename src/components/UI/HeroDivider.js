import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  background: ${({ theme: { colors } }) => colors.pink};
  border: 0;
  clear: both;
  display: block;
  margin: 0 auto 1.2rem;
  text-align: center;
  height: 2px;
  overflow: hidden;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  box-shadow: ${({ theme }) => theme.shadow};

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    margin: 0 auto 2.4rem;
  }
`;

const HeroDivider = () => <StyledHr />;

export default HeroDivider;
