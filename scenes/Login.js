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

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
  
    card: {
      backgroundColor: 'red',
    },
  });


const Login = () => (
    <ScrollView style={styles.container}>
        <Icon
          name='location-on'
          type='materialIcons'
          color='red'
          size={100}
        />

        <Text h3 style={{fontWeight: 'bold', textAlign: 'center'}}>PARA ONDE VOU?</Text>

        <Icon
          reverse
          name='lock'
          type='entypo'
          color='rgb(229,229,232)'
          size={25}
          iconStyle={{color:'grey'}}
          onPress={() => console.log('hello')}
        />

        <Card title='Login' titleStyle={{color:'#fff', fontWeight: 'bold'}} containerStyle={{backgroundColor: 'rgb(6,90,157)', borderRadius:20}}>
          <FormLabel labelStyle={{color:'#fff', fontWeight: 'bold'}}>EMAIL</FormLabel>
          <FormInput inputStyle={{color:'#fff'}} placeholderTextColor='#fff' placeholder='Digite seu e-mail' shake={true}></FormInput>

          <FormLabel labelStyle={{color:'#fff', fontWeight: 'bold'}}>SENHA</FormLabel>
          <FormInput inputStyle={{color:'#fff'}} placeholderTextColor='#fff' placeholder='Digite sua senha' shake={true}></FormInput>

          <Text></Text>
          
          <Button
            large
            iconRight={{name: 'check', type: 'entypo'}}
            title='Entrar' 
            backgroundColor='rgb(0,185,230)'
            borderRadius= {10}
            onPress={() => this.props.navigation.navigate('OndeEstouRoute')}
          />        
          <Text></Text>
          <Text></Text>
        </Card>

        <Text></Text>
        <Text></Text>
        <Text></Text>

        <Text style={{textAlign: 'center'}}>Não sei a minha senha</Text>
        <Text style={{textAlign: 'center'}}>Você é novo? Cadastre-se</Text>

        <Text></Text>
        
      </ScrollView>
);

export default Login;