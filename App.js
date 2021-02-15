import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;


export default function App() {


  return (
 
      <Search />

  );
}
