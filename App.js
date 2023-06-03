import React, { useState } from 'react';
import { View } from 'react-native';
import MealLogScreen from './MealLogScreen';
import MealHistoryScreen from './MealHistoryScreen';

const App = () => {
  const [meals, setMeals] = useState([]);

  const handleAddMeal = (meal) => {
    setMeals([...meals, meal]);
  };

  return (
    <View style={{ flex: 1 }}>
      <MealLogScreen onAddMeal={handleAddMeal} />
      <MealHistoryScreen meals={meals} />
    </View>
  );
};

export default App;
