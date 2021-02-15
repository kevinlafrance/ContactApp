import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { TextInput, Button, FlatList, Text } from 'react-native';
import list from '../json/list.json';
import ContactView from './ContactView';

const SearchView = styled.View`
    margin-top: 20px;
    flex: 1;
    `;

const TextSearch = styled.TextInput`
border-color: #000000;
border-width: 1px;
height: 50px;
padding-left: 5px;
margin: 0px 5px


`;

const SearchButton = styled.Button`
    height: 50px;
    
`

 
const Search = () => {
    return (
        <SearchView>
            <TextSearch placeholder="Nom du contact" />
            <SearchButton title="Rechercher" onPress={() => {}} />
            <FlatList
                data={list}
                keyExtractor={(item) => item.firstName}
                renderItem={({item}) => <ContactView contact={item}/>} />
        </SearchView>
    )
}
export default Search