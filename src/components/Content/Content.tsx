import React, { useEffect, useState } from 'react';
import { Title, Text, Link } from '../theme';
import { Wrapper, CardsContainer } from './styles';
import { LoginProps } from '../types';
import Card from '../Card/Card';
import { getUrl, urlParams } from '../utils';

const cardInfo = [
  {
    title: 'Basic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Der mudo alofe mucho.',
    price: '5$',
  },
  {
    title: 'Premium',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Der mudo alofe mucho.',
    price: '15$',
  },
  {
    title: 'Ultimate',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Der mudo alofe mucho.',
    price: '30$',
  },
];


const Content:React.FC<LoginProps> = ({ isUserLogged, setIsUserLogged }) => {
  const [isSubPurchased, setIsSubPurchased] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') as string);
    if (data) setIsUserLogged(true);
  }, [isUserLogged]);

  return (
    <Wrapper>
      {isUserLogged ?
        isSubPurchased
          ? <>
            <Text>Subscription successfully purchased</Text>
            <Link href={getUrl(urlParams)} target='_blank'>Transform to NFT</Link>
          </>
          : <>
            <Title margin={0}>Choose your plan</Title>
            <CardsContainer>
              {cardInfo.map(({title, price, text}, index) => (
                <Card key={index} title={title} price={price} text={text} setIsSubPurchased={setIsSubPurchased}/>
              ))}
            </CardsContainer>
          </>
        : <>
          <Title>Connect to our merchant</Title>
          <Text>
            To see the subscription plans you must be logged in, enter your username and password and click Sing In
            button
          </Text>
        </>
      }
    </Wrapper>
  );
};

export default Content;