import React from 'react';
import { Content, Wrapper } from './styles';
import { CardProps } from '../types';
import { Title, Text, Link, Button } from '../theme';
import { getUrl, urlParams } from '../utils';


const Card:React.FC<CardProps> = ({title, price, text, setIsSubPurchased}) => {
  return (
    <Wrapper>
      <Content>
        <Title fontSize={'22px'}>{title}</Title>
        <Text>{text}</Text>
        <Title fontSize={'55px'}>{price}</Title>
        <Button onClick={() => setIsSubPurchased(true)}>Transform to NFT</Button>
      </Content>
    </Wrapper>
  );
};

export default Card;