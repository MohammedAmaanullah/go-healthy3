import React,{Component} from "react";
import {Text, View, StyleSheet,TextInput, TouchableOpacity} from "react-native";

export default class PhyscialActivity extends Component{
   constructor(props){
       super(props);
       this.state = {
           lastrecord : "",
           nexttimeExercise:'',
       }
   }
    render(){
        return(
            <View style={styles.container}>
                       <View style={styles.titleBar}>
                        <Text style={styles.titleText}>PhysicalAcitivity</Text>
                        <TextInput
                    placeholder="Last time exercised(hours)"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            lastrecord: text,
                            nexttimeExercise: lastrecord+18
                        })
                    }}
                    style= {styles.inputbox}
                    />
                     <TouchableOpacity 
              style={styles.scanButton}
              onPress={()=>{
                this.getCameraPermissions("BookId")
              }}>
              <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity> 
                    <View>
                        <Text style={styles.RE}> 
                            Recommended Exercises:
                        </Text>
                        <Text>
                            <li>Jumping Jacks</li>
                            <li>Cycling</li>
                            <li>Running</li>
                            <li>Swimming</li>
                        </Text>
                        </View> 
                    </View>
           </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
        marginRight: 1350,
        marginTop:50,
        height:250,
        borderWidth: 2,
        margin: 10, 
        padding: 6,
        textAlignVertical: "top",
       
    },
    RE :{
        justifyContent:'right',
        alignItems:'right',
        fontSize: 36,
        color: 'orange',
        fontWeight:'bold'
    },
    list:{
        fontSize: 24,
        Color:'white',
        fontWeight:'bold',
        fontFamily:'arial'
    },
    inputbox:{
        height: 40,
        borderWidth: 2,
        marginRight: 1300,
        marginTop: 25,
        padding: 10,
        width: 200,
        borderWidth:2.5,
        borderColor:'green',
       
        
    }
})
