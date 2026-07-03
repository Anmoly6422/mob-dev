import { StyleSheet, Text, View  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});