import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: 15vw;
  height: 15vw;
  margin-bottom: 3.5vh;
  border: 2px solid #e91e63;
  border-radius: 12px;
  position: relative;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.shadow};
  outline: none;
  cursor: pointer;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 28.5vw;
    height: 28.5vw;
    margin-bottom: 2.5vh;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    width: 24vw;
    height: 24vw;
  }
`;

const Img = styled.img`
  width: calc(15vw - 4px);
  height: calc(15vw - 4px);
  border-radius: 10px;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: calc(28.5vw - 4px);
    height: calc(28.5vw - 4px);
  }
  @media ${(props) => props.theme.mediaQueries.small} {
    width: calc(24vw - 4px);
    height: calc(24vw - 4px);
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
  background-color: ${(props) => props.theme.colors.purple};

  @media (hover: hover) {
    :hover {
      opacity: 0.5;
    }
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.colors.yellow};
  font: inherit;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const InstaCard = (props) => {
  return (
    <Card>
      <a href={props.cardData.link} rel="noopener noreferrer" target="_blank">
        <Img src={props.cardData.img} alt={props.cardData.alt} />

        <Hover>
          <Text>
            <span role="img" aria-label="Heart Emoji">
              🤍
            </span>
            {props.cardData.likes}
          </Text>
        </Hover>
      </a>
    </Card>
  );
};

export default InstaCard;
