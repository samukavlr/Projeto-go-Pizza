import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput).attrs( ({
    
  }))`
    width:100%;
    height: 56px;
    padding: 18px 16px;
    font-family: ${({theme}) => theme.FONTS.TEXT};
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.TITLE}; 
    border:${RFValue(1)}px;
    border-color:${({theme}) => theme.COLORS.PRIMARY_100};
    border-radius:${RFValue(12)}px;
    margin-bottom: ${RFValue(16)}px;
`;
