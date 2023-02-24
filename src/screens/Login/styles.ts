import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { LinearGradient } from 'expo-linear-gradient';

// npm i react-native-iphone-x-helper --save
// import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Nav= styled.ScrollView`

    


`;
export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y: 1 },  
    end: { x: 0.5, y: 0.5 }
  
  }))`
    position: relative;
    flex: 1;
    align-items: center;
    width: 100%;
    height:867px;
    
  `;



export const Photo = styled.Image`
    width:311px;
    height: 364px;
    /* margin-left: ${RFValue(32)}px;
    margin-right: ${RFValue(32)}px; */
    margin-top: 85px;
    
`;

export const Title = styled.Text`
    font-size: 32px;
    font-family: ${( { theme } ) => theme.FONTS.TITLE};
    color: #fff;
    margin-top: 10px;
    margin-bottom: 23px;
`;

export const Form = styled.View`
    
    width: 311px;
    
`;

export const Text = styled.Text`
    color:${( { theme } ) => theme.COLORS.TITLE} ;
    margin-left: auto;
    font-family: ${( { theme } ) => theme.FONTS.TEXT};
    margin-top: 20px;
    font-size: 13px;
    
`;

export const User = styled.View`
    margin-left: 17px;

`;

