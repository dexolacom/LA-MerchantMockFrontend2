import styled from 'styled-components';


export const Button = styled.div<{background?: string, padding?: string}>`
  background-color: ${({background}) => background ?? '#ff3e1d'};
  padding: ${({padding}) => padding ?? '4px 16px'};
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background-color: ${({background}) => background ?? '#de3838'};
  }
`

export const Link = styled.a<{background?: string, padding?: string, margin?: string}>`
  text-decoration: none;
  background-color: ${({background}) => background ?? '#ff3e1d'};
  padding: ${({padding}) => padding ?? '6px 16px'};
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  margin: ${({margin}) => margin ?? '0'};;

  &:hover {
    background-color: ${({background}) => background ?? '#de3838'};;
  }
`;

export const Title = styled.h3<{color?: string, fontSize?: string, margin?: string | number}>`
  font-size: ${({fontSize}) => fontSize ?? '#2c3f57'};
  color: ${({color}) => color ?? '#2c3f57'};
  margin: ${({margin}) => margin ?? '0 0 16px 0'};
`

export const Text = styled.span<{color?: string, margin?: string}>`
  font-size: 16px;
  margin: ${({margin}) => margin ?? '0'};
  color: ${({color}) => color ?? '#2c3f57'};
`

export const FlexRow = styled.div<{margin?: string}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: ${({margin}) => margin ?? '0'};
`