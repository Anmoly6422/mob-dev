import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingtext}>Trending Places</Text>
      <View style={[styles.card,styles.cardele]}>
        <Image
        source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTBfpO0BPkgm_qhKodVp5lg4daUbV8Ffo3eWwrd-K9g&s=10'
        }}
        style={styles.Cardimage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>China</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:400,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:6.5,

    },
    cardele:{
        backgroundColor:'white',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }

    },
    Cardimage:{
        height:180,
        marginBottom:8,
        borderTopEndRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#000000'
    }
})