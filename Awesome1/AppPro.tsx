import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

function AppPro() {
  const [isDark, setIsDark] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? '#000' : '#fff'},
      ]}>
      <Text
        style={{
          color: isDark ? '#fff' : '#000',
          fontSize: 24,
        }}>
        Hello World
      </Text>

      <Button
        title={isDark ? 'Light Mode' : 'Dark Mode'}
        onPress={() => setIsDark(!isDark)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppPro;