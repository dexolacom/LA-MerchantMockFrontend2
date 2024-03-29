import React from 'react';
import { Wrapper } from './styled';
import { BackdropProps } from '../types';


const Backdrop:React.FC<BackdropProps> = ({children, setIsModalOpen}) => {
  return (
    <Wrapper onClick={() => setIsModalOpen(false)}>
      {children}
    </Wrapper>
  );
};

export default Backdrop;