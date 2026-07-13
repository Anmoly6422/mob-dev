
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, FlatList, StyleSheet, Text, TextInput, useColorScheme, View, Pressable } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

//constants
import { currencyByRupee } from './constants'
//component
import CurrencyButton from './components/CurrencyButton';

import { Snackbar } from 'react-native-snackbar';
import { useState } from 'react';


function App() {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#EA7773",
        textColor: "#000000"
      })
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }
    else {
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>
            Currency Converter
          </Text>

          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>

            <TextInput
              style={styles.inputAmountField}
              maxLength={14}
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType="decimal-pad"
              placeholder="Enter amount"
              placeholderTextColor="#888"
              clearButtonMode="while-editing"
            />
          </View>

          <View style={styles.resultContainer}>
            {resultValue !== '' && (
              <>
                <Text style={styles.resultTxt}>{resultValue}</Text>

                <Pressable
                  style={styles.convertAgainButton}
                  onPress={() => {
                    setInputValue('');
                    setResultValue('');
                    setTargetCurrency('');
                  }}>
                  <Text style={styles.convertAgainText}>
                    Convert Again
                  </Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[styles.button,
                targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>

      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9b7de',
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#2d3436',
    marginBottom: 20,
  },

  topContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'flex-start', // <-- changed
    paddingTop: 60,               // <-- added
  },

  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000',
    fontWeight: '800',
  },

  inputAmountField: {
    width: 240,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 18,
    fontSize: 20,
    fontWeight: '600',
    elevation: 4,
  },

  resultContainer: {
    height: 120,          // Reserve space so layout doesn't jump
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultTxt: {
    fontSize: 32,
    color: '#000',
    fontWeight: '800',
    marginBottom: 15,
  },

  convertAgainButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  convertAgainText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  bottomContainer: {
    flex: 3,
  },

  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
