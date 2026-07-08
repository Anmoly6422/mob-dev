import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.HeadingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.Container}>
        <View style={[styles.card, styles.elevated]}>
            <Text>Tap</Text>
        </View>
         <View style={[styles.card, styles.elevated]}>
            <Text>To</Text>
        </View>
         <View style={[styles.card, styles.elevated]}>
            <Text>Scroll</Text>
        </View>
         <View style={[styles.card, styles.elevated]}>
            <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
            <Text>letsgo...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
     HeadingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:15,
        paddingVertical:10
    },
    Container:{
        padding:8

    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:7,
    },
    elevated:{
        backgroundColor:'#CAD5E2',
        elevation:8,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'red'
    }
})