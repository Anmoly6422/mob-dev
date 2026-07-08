import { Linking, StyleSheet, Text, View,Image } from 'react-native'
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
            <Text numberOfLines={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim laudantium aliquid earum voluptatibus sint ad, accusamus saepe iure ex quidem beatae, mollitia maiores, dolores at. Modi asperiores illum totam.
            </Text>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headinText:{

    },
    card:{},
    elevated:{},
    headingContainer:{},
    headerText:{},
    cardImage:{
        height:100
    },
    bodyContainer:{},

})