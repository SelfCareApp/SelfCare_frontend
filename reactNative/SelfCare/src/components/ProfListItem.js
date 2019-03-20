/*
this component will be used to generate the list view of professionals
this will show the averate rating for the professional
*/
import React,{Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, Image, View} from 'react-native';
import {Rating} from 'react-native-elements'

import {CardSection} from './common';

class ProfListItem extends Component{

    listItemDetail(){
        //function will display more details of the selected list item
        console.log();
    }

    render(){
        return(  
                <TouchableOpacity onPress={this.props.navigator}>
                    <CardSection>
                      <Image style={styles.imgStyle} source={{uri:"https://i.cbc.ca/1.4509398.1517262943!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/dwight.jpg"}}/>
                        <View style={styles.viewStyle}>
                            <Text style={styles.username}>{this.props.firstname} {this.props.lastname}</Text>
                             <Text style={styles.textStyle}>{this.props.title}   >2km away</Text>
                            <Rating imageSize={24}/>
                        </View>
                    </CardSection>
                </TouchableOpacity>
            )
    }
   

}

export {ProfListItem}

const styles ={
    textStyle :{
        fontSize:14,
        color:"#B8B8B8",
        textAlign:"center"
    },
    username:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    },
    viewStyle :{
        marginLeft:40,
    },
    imgStyle:{
        marginLeft:30,
        width:60,
        height:60,
        marginTop:10
    }
}