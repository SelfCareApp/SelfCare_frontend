import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card,Icon, ButtonGroup} from 'react-native-elements';

import { Button,CardSection,Header} from  '../../components/common';
import theme from './../../utils/theme'

class ProfessionalsScreen extends Component{
    static navigationOptions ={
        headerTitle:"Sam's Account", 
        headerStyle:{
            backgroundColor:theme.primaryColor.headerColor
        },
        headerTintColor:"#fff"
    }
    constructor(props){
        super(props);
        this.changeDisplayHandle = this.changeDisplayArea.bind(this)
    }

    component1 = () => <Icon type='MaterialIcons' name="person" />
    component2 = () => <Icon type="MaterialIcons" name="message" />
    component3 = () => <Icon type="MaterialIcons" name="photo-library" />
    component4 = () => <Icon type="MaterialIcons" name="map" />

    state ={
        activeArea :"bio",   //this handles the area below handling the content rendered
        selectedIndex:0     // this is used to keep track of the selected button
    };

    renderArea(){
        //this handles the which section is active on screen
        //this component changes the active area state
        switch (this.state.activeArea){
            case "bio": return (
                <View>
                    <CardSection>
                        <Text style={{marginLeft:20, fontSize:20}}>Profession:</Text>
                        <Text style={{marginLeft:20, fontSize:20}}>Barber</Text>
                    </CardSection>
                </View>)
                break;
            case "portfolio": return (<CardSection><Text>This is the gallery area</Text></CardSection>);
                break;
            case "messages": return (<View><Text>This is the messages area</Text></View>);
                break;
            case "map": return (<CardSection>
                                    <Text>Map area</Text>
                                </CardSection>);
        }
    }

    changeDisplayArea (btnId){
//this handles the click event for the changing the area displayed on the page
/* params: btnId is param thats passed as a result of the button group element,
        this is courtesy of the button group element which takes an array of buttons to display
        this then allows use of array index system
*/
        switch(btnId){
            case 0:
                this.setState({activeArea:"bio", selectedIndex:btnId});
                break;
            case  1:
                this.setState({activeArea:"messages",selectedIndex:btnId});
                break;
            case 2:
            this.setState({activeArea:"portfolio",selectedIndex:btnId});
                break;
            case 3:
            this.setState({activeArea:"map",selectedIndex:btnId});
                break
        }
        console.log("changed area to: "+ this.state.activeArea)
    }


    render(){
        buttons =[{element:this.component1},{element:this.component2},{element:this.component3},{element:this.component4}]
        return (
            <View style={style.containerStyle}>
                {/* <Header headerText="Professionals" /> */}
                 <Card title="@realSlim"
                    style={style.cardStyle}
                     image={{uri:'https://i.cbc.ca/1.4948998.1545062510!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/black-barber-blood-pressure.jpg'}} >
                      <Text style={{marginBottom: 20, textAlign:"center"}}>
                         Im like a Doctor, but for your hair.
                      </Text>
                 </Card>
                <CardSection>
                    <Button >Book</Button>
                </CardSection>
                <ButtonGroup buttons={buttons}             
                    onPress={this.changeDisplayHandle}
                    containerStyle={{height:50}}
                    selectedIndex={this.state.selectedIndex}
                    selectedButtonStyle={{backgroundColor:"#F0EDE5"}}
                />
                <View >
                 {this.renderArea()}
                </View>
            </View>)
    }
}

const style ={
    containerStyle:{
        // marginTop:15
        
    },
    bottomButtons: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1
    },
    footerText: {
        color:'white',
        fontWeight:'bold',
        alignItems:'center',
        fontSize:18,
    },

};
export {ProfessionalsScreen};