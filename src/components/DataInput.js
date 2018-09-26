

import React, { Component } from 'react';
 
import { StyleSheet, TextInput, View, Alert, Button } from 'react-native';
 
class MainProject extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      TextInputTitle: '',
      TextInputLocation: '',
      TextInputPrice: '',
      TextImgURL: ''
 
    }
 
  }
 
  InsertDataToServer = () =>{

 
 const { TextInputTitle }  = this.state ;
 const { TextInputLocation }  = this.state ;
 const { TextInputPrice }  = this.state ;
 const { TextInputImgURL }  = this.state ;

 

fetch('https://capstone-back-end.herokuapp.com/products', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    title: TextInputTitle,

    location: TextInputLocation,

    price: TextInputPrice,

    imgUrl: TextInputImgURL

  })

}).then((response) => response.json())
      .then((responseJson) => {

// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Product"
 
          onChangeText={TextInputTitle => this.setState({TextInputTitle})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Location"
 
          onChangeText={TextInputLocation => this.setState({TextInputLocation})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Offering or Wanting"
 
          onChangeText={TextInputPrice => this.setState({TextInputPrice})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Image URL"
 
          onChangeText={TextInputImgURL => this.setState({TextInputImgURL})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
<Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />
      
  
 
</View>
            
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#FF5722',
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});
 
//AppRegistry.registerComponent('MainProject', () => MainProject);

export default MainProject;