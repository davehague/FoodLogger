import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MealHistoryScreen = ({ meals }) => {
  const renderMeal = ({ item }) => (
    <View style={styles.mealContainer}>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.reason}>{item.reason}</Text>
      <Text style={styles.food}>{item.food}</Text>
    </View>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal History</Text>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMeal}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  mealContainer: {
    marginBottom: 8,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reason: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  food: {
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 4,
  },
});

export default MealHistoryScreen;
