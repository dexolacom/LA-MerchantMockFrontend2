import React from 'react';
import { Content, Wrapper } from './styles';
import { CardProps } from '../types';
import { Title, Text, Button } from '../theme';
import { showFrame } from '../utils';


const Card:React.FC<CardProps> = ({title, price, text}) => {
  return (
    <Wrapper>
      <Content>
        <Title fontSize={'22px'}>{title}</Title>
        <Text>{text}</Text>
        <Title fontSize={'55px'}>{price}</Title>
        <Button padding={'8px 32px'} onClick={() => showFrame()}>Transform to NFT</Button>
      </Content>
    </Wrapper>
  );
};

export default Card;