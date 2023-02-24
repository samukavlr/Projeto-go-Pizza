import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity).attrs(({theme}) => ({
    
  }))`
    width:100%;
    padding: 15px;
    height: 56px;
    border-radius:${RFValue(12)}px;
    background-color: ${({theme})=> theme.COLORS.PRIMARY_800};
    align-items:center;
    margin-top:${RFValue(30)}px;
    

`;

export const Title = styled.Text`
  color:${({theme})=> theme.COLORS.TITLE};
  font-size: ${RFValue(14)}px;
  
    

`
