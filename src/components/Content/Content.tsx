import React, { useEffect } from 'react';
import { Title, Text } from '../theme';
import { Wrapper, CardsContainer } from './styles';
import { LoginProps } from '../types';
import Card from '../Card/Card';

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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') as string);
    if (data) setIsUserLogged(true);
  }, [isUserLogged]);

  return (
    <Wrapper>
      {isUserLogged ?
        <>
          <Title margin={0}>Choose your plan</Title>
          <CardsContainer>
            {cardInfo.map(({title, price, text}, index) => (
              <Card key={index} title={title} price={price} text={text}/>
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