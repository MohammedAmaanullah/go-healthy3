import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {
   state = {
      weight: '',
      glassesofWater: 0,
   }
 
   handleWeight = (text) => {
      this.setState({ weight: text })
   }
   calculate = (glassesofWater => {
      //calculation
      //display weight
      this.setState({weight: text })
      if(weight<18.5){
         this.setState({glassesofWater:4})
      }
      else if(weight>=25&&weight<40){
         this.setState({glassesofWater:6})
      }
      else if(weight>=40&&weight<70){
         this.setState({glassesofWater:8})
      }
      else if(weight>=70){
         this.setState({glassesofWater:12})
      }
      else{
         alert('Incorrect Input!');
         this.setState({weight:''})
      }
   })
   render() {
      return (
         <View style = {styles.container}>
<Text style={styles.title}>Fluids Consumed</Text>
            
            <Text  style = {styles.label}>Weight</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight(kgs)"
               autoCapitalize = "none"
               onChangeText = {this.handleHeight}/>
<Text  style = {styles.label}>Number of Glasses Drunk</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Number of Glasses drunk"
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.glassesofWater)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>
<Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.weightText}>{this.state.glassesofWater}</Text>
</View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      
   },
   input: {
      margin: 15,
      height: 40,
      borderWidth: 1,
      padding: 10,
   },
   submitButton: {
      backgroundColor: '#ff6666',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
     // fontWeight:"bold",
      fontSize: 18,
   },
   output:{
      textAlign: "center",
      fontSize: 30,
   },
   title:{
      paddingTop:30,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
   },
   weightText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'blue'
   },
   label:{
      marginLeft: 15,
   }
})