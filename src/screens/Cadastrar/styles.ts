
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

export const Nav= styled.ScrollView`

    background-color:#F7F7F7;
   
   
`;
export const Container= styled.ScrollView`

    background-color:#F7F7F7;
    padding-left:24px;
    padding-right:24px;
   
`;



export const Header = styled(LinearGradient).attrs(({ theme }) => ({
    
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y: 1 },  
    end: { x: 0.5, y: 0.5 },
  
  }))`
    
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    height: 120px;
    padding: 23px;
`;
  export const Title = styled.Text`
  font-size: 24px;
  font-family: ${( { theme } ) => theme.FONTS.TITLE};
  color: #fff;
 
`;
  export const Title1 = styled.Text`
  font-size: 14px;
  font-family: ${( { theme } ) => theme.FONTS.TITLE};
  color: #fff;
 
`;

  export const PhotoPizza = styled.Image`
  margin-left:auto;
  margin-right:auto;
  width:160px;
  height:160px;
  margin-top: 30px;

  
`;
  export const Photo1 = styled.Image`
  width:40px;
  height: 40px;
`;
export const Button = styled(TouchableOpacity).attrs(({theme}) => ({
    
}))`
 
  border-radius:${RFValue(12)}px;
  align-items:center;

  `;
  export const NameNav = styled(Text).attrs(({theme})=>({

  }))`
  
    flex-wrap: wrap;
    font-size: 14px;
    font-family: ${( { theme } ) => theme.FONTS.TEXT};
    color: #572D31;
    margin-bottom: 16px;
 
  `;
  export const MaxDescription = styled(Text).attrs(({theme})=>({

  }))`
    
    font-size: 10px;
    font-family: ${( { theme } ) => theme.FONTS.TEXT};
    color: #572D31;
    margin-bottom: 16px;
 
  `;
  export const Input = styled(TextInput).attrs( ({
    
  }))`
    flex-wrap:wrap;
    height: 56px;
    padding: 18px 16px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    font-size: 14px;
    background-color:#ffff;
    color: ${({theme}) => theme.COLORS.TITLE}; 
    border:${RFValue(1)}px;
    border-color:${({theme}) => theme.COLORS.COLORBORDER};
    border-radius:${RFValue(12)}px;
    margin-bottom: ${RFValue(16)}px;
`;
export const TextDescription =styled(TextInput).attrs( ({
    
}))`
    height:80px;
    flex-wrap: wrap;
    padding: 18px 16px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    font-size: 14px;
    background-color:#ffff;
    color: ${({theme}) => theme.COLORS.TITLE}; 
    border:${RFValue(1)}px;
    border-color:${({theme}) => theme.COLORS.COLORBORDER};
    border-radius:${RFValue(12)}px;
    margin-bottom: ${RFValue(16)}px;


`;


export const Form = styled.View`

  flex: 2;
  flex-direction:row;

`;
export const FormDescription = styled.View`

  flex: 1;
  flex-direction:row;
  justify-content: space-between;
 
  `;

export const ButtonTamanhoPreco = styled(View).attrs(({theme}) => ({
    
  }))`
    width:100%;
    flex-direction:row;
    padding-right:23px;
    height: 56px;
    border-radius:${RFValue(12)}px;
    border:1px;
    border-color: ${({theme})=> theme.COLORS.COLORBORDER};
    background-color:#ffff;
    align-items:center;
    margin-bottom: 8px;
`;
export const ButtonTamanhos = styled(TouchableOpacity).attrs(({theme}) => ({
    
}))`
  width:56px;
  padding-left:23px;
  flex-direction:row;
  height: 56px;
  border:1px;
  border-bottom-left-radius:${RFValue(12)}px;
  border-top-left-radius:${RFValue(12)}px;
  border-color: ${({theme})=> theme.COLORS.COLORBORDER};
  align-items:center;
  
 
`;
export const Tamanhos = styled(Text).attrs(({theme})=>({

}))`
font-size:14px;
color: ${({theme}) => theme.COLORS.SECONDARY_900};
font-family: ${( { theme } ) => theme.FONTS.TEXT};

`
export const Preco = styled(TextInput).attrs( ({
    
}))`
margin-left:20px;
font-size:14px;
color: ${({theme}) => theme.COLORS.SECONDARY_900};
font-family: ${( { theme } ) => theme.FONTS.TEXT};


`;
export const ButtonAtualizar = styled(TouchableOpacity).attrs(({theme}) => ({
    
  }))`
    width:100%;
    padding: 16px;
    height: 56px;
    border-radius:${RFValue(12)}px;
    background-color: ${({theme})=> theme.COLORS.SUCCESS_900};
    align-items:center;
    margin-top:${RFValue(32)}px;
    margin-bottom:${RFValue(26)}px;
  
`;
export const TitleAtualizar = styled.Text`
  font-size: 14px;
  font-family: ${( { theme } ) => theme.FONTS.TEXT};
  color: #fff;
 
`;





  








