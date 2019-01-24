import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {Card, CardSection,Button, Input} from './common'

class LoginForm extends Component{
    render(){
        return(
            <Card>
                <View style={style.viewMargins}>
                    <Text style={style.textStyle}>Self Care App</Text>
                </View>
                    <CardSection>
                        <Input label='Email'
                               placeholder='selfcare@gmail.com'></Input>
                    </CardSection>
                    <CardSection>
                        <Input label='password'
                               placeholder='password123'></Input>
                    </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
                <CardSection>
                    <Button>Dont have an account ?</Button>
                </CardSection>
            </Card>
        )
    }
}

const style ={
    textStyle :{
        fontSize :20,
        textAlign:'center',
        fontWeight:'600',
        paddingTop: 10,
        paddingBottom:20,
        color:'#00539C'
        
    },
    viewMargins :{
        marginTop:100
    }
}

export default LoginForm;