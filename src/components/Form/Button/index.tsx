import React from 'react';
// import { TouchableOpacityProps } from 'react-native';

import { 
    Container,
    Title, 
} from './styles';



export function Button({ ...rest}){
  return (
      <Container {...rest}>
          <Title >Entrar</Title> 
      </Container>
  )
  
}
