import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
  {
    uid: '1',
    name: 'John Smith',
    status: 'Available',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    uid: '2',
    name: 'Emma Johnson',
    status: 'Busy',
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    uid: '3',
    name: 'Michael Brown',
    status: 'At work',
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    uid: '4',
    name: 'Sophia Davis',
    status: 'Online',
    imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    uid: '5',
    name: 'Daniel Wilson',
    status: 'Away',
    imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl})=> (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.image}/>
                <View>
                <Text style={styles.userName}>{name}</Text>
                 <Text style={styles.userStatus}>{status}</Text>
                 </View>
            </View>
        ))}

      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginBottom:3
    },
    container:{
        paddingHorizontal:16,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#8D3DAF',
        marginBottom:1,
        padding:8,
        borderRadius:10

    },
    image:{
         width: 60, height: 60, borderRadius: 30,
         marginRight:14,
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'black',
    },
    userStatus:{
        fontSize:12
    }
})