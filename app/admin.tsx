import Header from '@/src/components/Header';
import { Colors } from '@/src/constants/colors';
import { useMeals } from '@/src/context/MealContext';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AdminScreen() {
  const { meals, toggleMealActive } = useMeals();
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header title="Admin" />
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mealList} showsVerticalScrollIndicator={false}>
        {meals.map((meal) => (
          <View key={meal.id} style={styles.mealRow}>
            <View style={styles.mealInfo}>
              <Text style={styles.mealName}>{meal.name}</Text>
              <Text style={styles.mealDetails}>
                {meal.cuisineTag} • ${meal.price.toFixed(2)} CAD
              </Text>
            </View>
            <View style={styles.toggleContainer}>
              <Text style={[
                styles.statusText,
                meal.isActive ? styles.statusActive : styles.statusInactive
              ]}>
                {meal.isActive ? 'Active' : 'Inactive'}
              </Text>
              <Switch
                value={meal.isActive}
                onValueChange={() => toggleMealActive(meal.id)}
                trackColor={{ false: Colors.grayLight, true: Colors.success }}
                thumbColor={meal.isActive ? Colors.white : Colors.gray}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteOff,
  },
  headerContainer: {
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.gray,
    borderRadius: 20,
    zIndex: 10,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
  },
  mealList: {
    flex: 1,
    padding: 20,
  },
  mealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.grayLight,
  },
  mealInfo: {
    flex: 1,
    marginRight: 16,
  },
  mealName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.black,
  },
  mealDetails: {
    fontSize: 14,
    color: Colors.gray,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  statusActive: {
    color: Colors.success,
  },
  statusInactive: {
    color: Colors.gray,
  },
});
