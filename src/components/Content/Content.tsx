import React, { useEffect, useState } from 'react';
import { Title, Text, Link } from '../theme';
import { Wrapper } from './styles';
import { LoginProps } from '../types';
import { getUrl } from '../utils';
import Cards from '../Cards/Cards';


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
            <Link href={getUrl()} target='_blank'>Transform to NFT</Link>
          </>
          : <>
            <Link margin='0 0 48px 0' href={getUrl('activate')} target='_blank'>Activate subscription with LA</Link>
            <Title margin={0}>Choose your plan</Title>
            {/*@ts-ignore*/}
            <Cards setIsSubPurchased={setIsSubPurchased}/>
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