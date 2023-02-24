import React from 'react'
import img from '../../goPizza/brand.png'
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { useNavigation } from '@react-navigation/native'
import {
  
  Title,
  Photo,
  Container,
  Form,
  Text,
  Nav
} from './styles';




export function Login() {

  const navigation = useNavigation()

  function handleCadastar() {
    navigation.navigate('Cadastrar')
  }
    return (
      
      <Nav>
        <Container>
            <Photo source={img} />
          <Form>
            <Title  >Login</Title>
            <Input placeholder='E-mail'placeholderTextColor='#fff'/>
            <Input placeholder='Senha'placeholderTextColor='#fff'/>
            <Text>Esqueci minha senha </Text>
            <Button title="Entrar" onPress={handleCadastar}/>
          </Form>
          
          </Container>
      </Nav>
    )
}