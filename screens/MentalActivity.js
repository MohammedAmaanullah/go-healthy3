import React,{Component} from "react";
import {Text, View, StyleSheet} from "react-native";

export default class MentalActivity extends Component{
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Mental Activity</Text>
                       
                    </View>
                    <View>
                            <Text style={styles.subheading}>
                                Tips to relieve stress
                            </Text>       
                            <Text style={styles.list}>
                           <li>1. Drinking a cup of water helps too. If you feel stressed or tense before going to sleep at night, a glass of milk, warm or cold can make you feel more relaxed.</li> 
                           <li>2.Meditation will also help with stress</li> 
                          <li> 3.Talk/soialize with people and share your feelings</li> 
                                </Text>  
                                
                                     
                    </View>
                    <View>
                        <Text style={styles.subheading}>
                            Exercises for mental health
                        </Text>
                        <Text style={styles.list2}>
                            <li>1.Cycling</li>
                            <li>2. Aerobic Exercises</li>
                            <li>3.Team-oriented sports</li>
                        </Text>
            
                    </View>
                    {/* <View>
                    <Text style={styles.routeText}>WeightCheck</Text>
                        <Image source={require("../assets/weightcheck.png")} style={styles.iconImage}></Image>
                    </View>
                     */}
                    <View>
                        <Text style={styles.subheading}>
                            Exercises to improve memory
                        </Text>
                        <Text style={styles.list3}>
                            <li>1.Map drawing from memory</li>
                            <li>2.Doing math in your head</li>
                            <li>3.Switching hands</li>
                        </Text>
                    </View>
                  
            </View>

        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    subheading:{
       justifyContent:"right",
       alignItems:"right",
       fontWeight:'bold',
       fontSize: 36,
       color:'gray'
    },  
    
    list:{
        fontSize:24,
        color:'lightgreen',
        fontWeight:'bold',
        fontfamily: 'lucida grande',
    },
    list3 :{
        fontSize:24,
        color:'orange',
        fontWeight:'bold',
        fontfamily: 'arial',
    },
    list2 :{
        fontSize:24,
        color:'skyblue',
        fontWeight:'bold',
        fontfamily: 'lucida grande',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "purple"
    },
    images:{
        width: "25%",
        height:"25%"
    },
})
