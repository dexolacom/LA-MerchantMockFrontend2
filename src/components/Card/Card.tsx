import React from 'react';
import { Content, Wrapper } from './styles';
import { CardProps } from '../types';
import { Title, Text, Link } from '../theme';
import { getUrl, urlParams } from '../utils';


const Card:React.FC<CardProps> = ({title, price, text}) => {
  return (
    <Wrapper>
      <Content>
        <Title fontSize={'22px'}>{title}</Title>
        <Text>{text}</Text>
        <Title fontSize={'55px'}>{price}</Title>
        <Link href={getUrl(urlParams)}>Transform to NFT</Link>
      </Content>
    </Wrapper>
  );
};

export default Card;