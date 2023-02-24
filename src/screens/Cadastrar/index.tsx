import React from 'react'
import img from '../../goPizza/margherita.png'
import seta from '../../goPizza/seta.png'
import { useNavigation } from '@react-navigation/native'



import {
    
    Nav,
    Container,
    Header,
    Title,
    Title1,
    PhotoPizza,
    Photo1,
    Button,
    NameNav,
    MaxDescription,
    Input,
    TextDescription,
    FormDescription,
    ButtonTamanhoPreco,
    ButtonTamanhos,
    ButtonAtualizar,
    TitleAtualizar,
    Tamanhos,
    Preco,

  } from './styles';






export function Cadastrar() {

    
  const navigation = useNavigation()

  function handleLogin() {
    navigation.navigate('Login')
  }
    return (
        <Nav>    
            <Header>
                <Button title="Voltar"onPress={handleLogin}>
                    <Photo1 source ={seta}/>   
                </Button>
                <Title> Cadastrar</Title>
                <Button>
                    <Title1> Deletear</Title1>          
                </Button>
            </Header>
            <Container>
                <PhotoPizza source ={img} />

                <NameNav> Nome </NameNav>
                <Input>
                    <NameNav>Margherita</NameNav>
                </Input>

                <FormDescription>
                    <NameNav> Descrição </NameNav>
                    <MaxDescription> Max 60 caracteres </MaxDescription>
                </FormDescription>

                <TextDescription>
                    <NameNav>Mussarela, manjericão fresco, parmesão e </NameNav>
                   
                    <NameNav>tomate.</NameNav>
                </TextDescription>
                

                <NameNav> Tamanhos e preços </NameNav>
                <ButtonTamanhoPreco>
                    <ButtonTamanhos>
                        <Tamanhos>P</Tamanhos>
                    </ButtonTamanhos>
                    <Preco>R$ 59,90</Preco>
                </ButtonTamanhoPreco>

                <ButtonTamanhoPreco>
                    <ButtonTamanhos>
                        <Tamanhos>M</Tamanhos>
                    </ButtonTamanhos>
                    <Preco>R$ 69,90</Preco>              
                </ButtonTamanhoPreco>

                <ButtonTamanhoPreco>
                    <ButtonTamanhos>
                        <Tamanhos>G</Tamanhos>
                    </ButtonTamanhos>
                    <Preco>R$ 79,90</Preco>
                </ButtonTamanhoPreco>
            
                <ButtonAtualizar>
                    <TitleAtualizar> Atualizar pizza</TitleAtualizar>          
                </ButtonAtualizar>
            </Container>

            
        </Nav>
       

          
       
          
       
    )
}