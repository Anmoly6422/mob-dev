import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'


const App = () => {
  return (
    <ScrollView>
      
      
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      <ActionCard/>
    
    </ScrollView>
    
  )
}

export default App

const styles = StyleSheet.create({})