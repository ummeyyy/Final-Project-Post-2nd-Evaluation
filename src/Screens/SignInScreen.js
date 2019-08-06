import React from 'react';
import {KeyboardAvoidingView , Text,StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo';
import LoginForm from '../components/LoginForm';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';



export default class LoginScreen extends React.Component {
  
    render() {
      return (
        <KeyboardAvoidingView behavior= "padding" style={styles.wrapper}>
            <LinearGradient style={styles.container}  colors={['#87CEEB', 'white']}>
             <LoginForm navigation={this.props.navigation}/>
             <TouchableOpacity 
        
        onPress = {() => {this.props.navigation.navigate('SignUp')}}
        >
        <Text style={styles.signupText11}> Not A Member? Signup!</Text>
        </TouchableOpacity>
        </LinearGradient>
        </KeyboardAvoidingView>
      );
    }
  }

  
const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    signupText:{
        paddingTop: 40,
        color: '#0050a0',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16
      },
      // container: {
      //   flex: 1,
      //   backgroundColor: '#f23657',
      //   alignItems: 'center',
      //   //justifyContent: 'center'
      // }
    container: {
      flex: 1, 
      backgroundColor: '#f23657',
      alignSelf: 'stretch',
      width : null,
      justifyContent: 'center',
      alignItems: 'center'
      },
        signupText11:{
          paddingTop: 20,
          color: '#DEDEDE',
          alignSelf: 'center',
          fontWeight: '300',
          fontSize: 14
        } 
  });