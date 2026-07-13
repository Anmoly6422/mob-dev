import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import DiceOne from '../Assets/One.png';
import DiceTwo from '../Assets/Two.png';
import DiceThree from '../Assets/Three.png';
import DiceFour from '../Assets/Four.png';
import DiceFive from '../Assets/Five.png';
import DiceSix from '../Assets/Six.png';

// Index 0 unused so the roll value (1-6) maps directly to the array index
const DICE_IMAGES = [null, DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix] as const;

type DiceProps = {
  value: number;
  spin: Animated.Value;
};

const Dice = ({ value, spin }: DiceProps) => {
  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.diceContainer}>
      <Animated.Image
        style={[styles.diceImage, { transform: [{ rotate }, { scale: spin.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 1.15, 1] }) }] }]}
        source={DICE_IMAGES[value]!}
        accessibilityLabel={`Die showing ${value}`}
      />
    </View>
  );
};

function App() {
  const [diceValue, setDiceValue] = useState(1);
  const [rollCount, setRollCount] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const spin = useRef(new Animated.Value(0)).current;

  const rollDiceOnTap = () => {
    if (isRolling) return;
    setIsRolling(true);
    spin.setValue(0);

    Animated.timing(spin, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomNumber);
      setRollCount((c) => c + 1);
      setIsRolling(false);
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Roll the Dice</Text>

          <Dice value={diceValue} spin={spin} />

          <Text style={styles.resultText}>You rolled: {diceValue}</Text>
          <Text style={styles.countText}>Rolls: {rollCount}</Text>

          <Pressable
            style={({ pressed }) => [
              styles.rollDiceBtn,
              pressed && styles.rollDiceBtnPressed,
              isRolling && styles.rollDiceBtnDisabled,
            ]}
            onPress={rollDiceOnTap}
            disabled={isRolling}
            accessibilityRole="button"
            accessibilityLabel="Roll the dice"
          >
            <Text style={styles.rollDiceBtnText}>
              {isRolling ? 'Rolling…' : 'Roll the Dice'}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF2F2',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#4B3F72',
    marginBottom: 24,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  diceContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  diceImage: {
    width: 180,
    height: 180,
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4B3F72',
    marginTop: 4,
  },
  countText: {
    fontSize: 14,
    color: '#8EA7E9',
    marginBottom: 24,
  },
  rollDiceBtn: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    backgroundColor: '#8EA7E9',
    shadowColor: '#8EA7E9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  rollDiceBtnPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  rollDiceBtnDisabled: {
    backgroundColor: '#C9D5F2',
  },
  rollDiceBtnText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});