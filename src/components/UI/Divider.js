import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  background: ${({ theme: { colors } }) => colors.pink};
  border: 0;
  clear: both;
  display: block;
  margin: 1.2rem auto;
  text-align: center;
  width: 100%;
  height: 2px;
  overflow: hidden;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow};

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    margin: 2.4rem auto;
  }
`;

const Divider = () => <StyledHr />;

export default Divider;
