import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { 
  Avatar,
  Button,
  Card,
  FormInput,
  FormLabel,
  Icon,
  List,
  ListItem,
  Text
 } from 'react-native-elements';
 //import QRCodeScanner from 'react-native-qrcode-scanner';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    listaLocais: {
        flex: 1,
        flexDirection: 'column',
        height: 300,
        backgroundColor: 'yellow'
    },
    listaLocaisFoto: {
        width: 128,
        height: 128,
        backgroundColor: 'red'
    },
    listaLocaisTitulo: {
        width: 200,
        backgroundColor: 'blue'
    },
});

const list = [
    {
        local: 'Átrio Central',
        image: 'https://para-onde-vou.herokuapp.com/imagem/11/imagem'
    },
    {
        local: 'Nelson Mandela',
        image: 'https://para-onde-vou.herokuapp.com/imagem/41/imagem'
    },
]

export default class Camera extends React.Component {
    
    static navigationOptions = { title: 'Camera' };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <Icon
                        name='location-on'
                        type='materialIcons'
                        color='red'
                        size={100} 
                    />
                </View>
                <View>
                    <Button 
                        large
                        iconRight={{name: 'check', type: 'entypo'}}
                        title='Ler QR CODE' 
                        backgroundColor='rgb(0,185,230)'
                        borderRadius={10}
                        //onPress={() => navigate('OndeEstouRoute')} 
                    />
                </View>
            </View>
        )
    };   
}