import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar, TouchableOpacity, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import NavigationBar from 'navigationbar-react-native';
import { 
  Button,
  Card,
  Divider,
  FormInput,
  FormLabel,
  FormValidationMessage,
  Header,
  Icon,
  PricingCard,
  SocialIcon,
  Text
 } from 'react-native-elements';

const Cadastro = () => (
    <ScrollView>
        <Card title='Cadastro'>
            <FormLabel labelStyle={{fontWeight: 'bold'}}>Nome</FormLabel>
            <FormInput placeholder='Digite seu nome' shake={true}></FormInput>

            <FormLabel labelStyle={{fontWeight: 'bold'}}>E-mail</FormLabel>
            <FormInput placeholder='Digite seu e-mail' shake={true}></FormInput>

            <FormLabel labelStyle={{fontWeight: 'bold'}}>Senha</FormLabel>
            <FormInput placeholder='Digite sua senha' shake={true}></FormInput>

            <FormLabel labelStyle={{fontWeight: 'bold'}}>Confirme sua senha</FormLabel>
            <FormInput placeholder='Confirme sua senha' shake={true}></FormInput>

            <Text></Text>
            <Text></Text>
            <Text></Text>

            <Button
                large
                iconRight={{name: 'check', type: 'entypo'}}
                title='Cadastrar' 
                backgroundColor='rgb(0,185,230)'
                borderRadius= {10}
            />
        </Card>

    </ScrollView>
);

export default Cadastro;