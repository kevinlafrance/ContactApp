import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image } from 'react-native';
import list from '../json/list.json';

const Container = styled.View`
    height: 190px;
    flex-direction: row;
   
`;
const ImgContainer = styled.View`
   
`;

const Img = styled.Image`
    width: 120px;
    height: 180px;
    margin: 5px;
`;

const Content = styled.View`
    flex: 1;
    margin 5px;
`;

const Header = styled.View`
    flex: 3;
    flex-direction: row;
    justify-content: space-between;
`;

const Name = styled.Text`
    font-size: 20px;
    flex: 1;
    flex-wrap: wrap;
    padding-right : 4px;
    font-weight: bold;
`;

const Id = styled.Text`
    
`;

const Description = styled.Text`
 
`;

const DescriptionContainer = styled.View`
   flex: 7;
`;

const NumberContainer = styled.View`
   flex: 4;
`;

const PhoneNumber = styled.Text`
   
`;


const ContactView = ({contact}) => {

    console.log(contact)

    return (
        <Container>

            <ImgContainer>
            <Img source={{uri: contact.img}} />
            </ImgContainer> 
            <Content>
                <Header>
                    
                    <Name>{contact.firstName.concat(' ', contact.lastName) }</Name> 
                    <Id> {contact.id} </Id>
                </Header>
                <DescriptionContainer>
                <Description>
                    {contact.description}
                </Description>
                </DescriptionContainer>
                <NumberContainer>
                    {contact.mobilePhone !==  "" ? <PhoneNumber>{contact.mobilePhone}</PhoneNumber> : <PhoneNumber>{contact.housePhone}</PhoneNumber>}
                </NumberContainer>
            </Content>

        </Container>
        
    )
}
export default ContactView