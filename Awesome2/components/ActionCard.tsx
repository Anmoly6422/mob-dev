import { Linking, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'


const ActionCard = () => {
    function openWebsite(websiteLink :string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headinText}>Blog Card</Text>
      <View style={[styles.card , styles.elevated]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21-ES12
            </Text>
        </View>
        <Image
        source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-D0IJ0NR70IKofO43zwULzKMMgw73uAOESoW6YOGMn1sFmURAzAMQWCZ3&s=10'

       
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={6}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim laudantium aliquid earum voluptatibus sint ad, accusamus saepe iure ex quidem beatae, mollitia maiores, dolores at. Modi asperiores illum totam.
            </Text>
        </View>
        <View style={styles.footerContainer}>
           <TouchableOpacity onPress={()=> openWebsite('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-D0IJ0NR70IKofO43zwULzKMMgw73uAOESoW6YOGMn1sFmURAzAMQWCZ3&s=10')}>
            <Text style={styles.link}>
               Click Me
            </Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headinText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8

    },
    card:{
        width:350,
        height:340,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16

    },
    elevated:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'black',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:100
    },
    bodyContainer:{
        padding:10,

    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    link:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#fff',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:8,

    }

})