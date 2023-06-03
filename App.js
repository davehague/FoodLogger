import React from 'react';
import MealHistoryScreen from './MealHistoryScreen';

export default function App() {
  // Dummy meal data for testing
  const meals = [
    { id: 1, time: '2023-06-01 12:00 PM', food: 'Salad', reason: 'Hunger' },
    { id: 2, time: '2023-06-01 6:30 PM', food: 'Pizza', reason: 'Boredom' },
    { id: 3, time: '2023-06-02 8:00 AM', food: 'Oatmeal', reason: 'Time' },
  ];

  return <MealHistoryScreen meals={meals} />;
}
