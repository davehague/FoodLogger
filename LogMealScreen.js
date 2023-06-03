import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const LogMealScreen = () => {
  const [time, setTime] = useState('');
  const [food, setFood] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    // This function updates the time
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTime(timeString);
    };

    // Update the time right away
    updateTime();

    // And then update the time every second
    const timerId = setInterval(updateTime, 10000);

    // This function gets returned by the useEffect and is run before the next useEffect
    // and when the component unmounts. It's cleaning up by clearing the interval so it
    // doesn't keep trying to update the time after the component is gone.
    return () => clearInterval(timerId);
  }, []); // The empty array means this effect runs once when the component mounts, and not again.


  const submitMeal = () => {
    console.log({ time, food, reason });
  };

  return (
    <View style={styles.container}>
      <Text>Log a Meal</Text>
      <Text style={styles.input}>{time}</Text>
      <TextInput
        style={styles.input}
        placeholder="What are you eating?"
        value={food}
        onChangeText={setFood}
      />
      <Picker
        selectedValue={reason}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setReason(itemValue)}
      >
        <Picker.Item label="Select a reason..." value="" />
        <Picker.Item label="Hunger" value="Hunger" />
        <Picker.Item label="Boredom" value="Boredom" />
        <Picker.Item label="Time" value="Time" />
        <Picker.Item label="Emotional" value="Emotional" />
      </Picker>
      <Button title="Log Meal" onPress={submitMeal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default LogMealScreen;
