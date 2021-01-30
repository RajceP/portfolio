import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: 24vw;
  height: 24vw;
  margin-bottom: 3.5vh;
  border: 2px solid #e91e63;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadow};
  outline: none;
  cursor: pointer;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    width: 28.5vw;
    height: 28.5vw;
  }

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    width: 15vw;
    height: 15vw;
    margin-bottom: 2.5vh;
  }
`;

const Img = styled.img`
  width: calc(24vw - 4px);
  height: calc(24vw - 4px);
  border-radius: 10px;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    width: calc(28.5vw - 4px);
    height: calc(28.5vw - 4px);
  }

  @media ${({ theme: { mediaQueries } }) => mediaQueries.large} {
    width: calc(15vw - 4px);
    height: calc(15vw - 4px);
  }
`;

const Hover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  opacity: 0;
  transition: 0.5s ease;
  background-color: ${({ theme: { colors } }) => colors.purple};

  @media (hover: hover) {
    :hover {
      opacity: 0.5;
    }
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

const InstaCard = ({ cardData: { img, likes, link } }) => (
  <Card>
    <a href={link} rel="noopener noreferrer" target="_blank">
      <Img src={img} alt="Instagram photo" />
      <Hover>
        <Text>
          <span role="img" aria-label="Heart Emoji">
            🤍
          </span>
          {likes}
        </Text>
      </Hover>
    </a>
  </Card>
);

InstaCard.propTypes = {
  cardData: PropTypes.shape({
    alt: PropTypes.string,
    img: PropTypes.string,
    likes: PropTypes.number,
    link: PropTypes.string,
  }).isRequired,
};

export default InstaCard;
