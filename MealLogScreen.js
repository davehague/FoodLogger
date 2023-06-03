import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const MealLogScreen = ({ onAddMeal }) => {
  const [food, setFood] = useState('');
  const [reason, setReason] = useState('Hunger');

  const handleAddMeal = () => {
    const meal = {
      id: new Date().getTime(),
      time: new Date().toLocaleString(),
      food,
      reason,
    };

    onAddMeal(meal);
    setFood('');
    setReason('Hunger');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Log</Text>
      <TextInput
        style={styles.input}
        placeholder="Food"
        value={food}
        onChangeText={setFood}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Reason:</Text>
      </View>
      <Picker
        style={styles.picker}
        selectedValue={reason}
        onValueChange={(itemValue) => setReason(itemValue)}
      >
        <Picker.Item label="Hunger" value="Hunger" />
        <Picker.Item label="Boredom" value="Boredom" />
        <Picker.Item label="Time" value="Time" />
        <Picker.Item label="Emotional" value="Emotional" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="Add Meal" onPress={handleAddMeal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  labelContainer: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12, // Adjust the font size to make the label smaller
    fontWeight: 'bold',
    marginBottom: 4,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16, // Add margin bottom to create space
  },
  buttonContainer: {
    marginBottom: 16, // Add margin bottom to create space
  },
});

export default MealLogScreen;
