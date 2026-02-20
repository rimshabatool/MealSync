import ChildSelector from '@/src/components/ChildSelector';
import Header from '@/src/components/Header';
import MealList from '@/src/components/MealList';
import SuggestedForYou from '@/src/components/SuggestedForYou';
import { Colors } from '@/src/constants/colors';
import { useMeals } from '@/src/context/MealContext';
import childrenData from '@/src/mock-data/children.json';
import { getSuggestedMeals } from '@/src/utils/mealSuggestions';
import { useRouter } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MealMenuScreen() {
  const [selectedChildName, setSelectedChildName] = useState('Liam');
  const router = useRouter();
  const { meals } = useMeals();
  
  const selectedChild = useMemo(() => {
    return childrenData.find(child => child.name === selectedChildName) || childrenData[0];
  }, [selectedChildName]);

  const suggestedMeals = useMemo(() => {
    return getSuggestedMeals(meals, selectedChild);
  }, [meals, selectedChild]);

  const handleSelectChild = useCallback((childName: string) => {
    setSelectedChildName(childName);
  }, []);

  const handleAdminPress = useCallback(() => {
    router.push('/admin');
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Meal Menu" />
      <ChildSelector 
        selectedChildName={selectedChildName}
        onSelectChild={handleSelectChild}
      />
      <SuggestedForYou suggestedMeals={suggestedMeals} />
      <MealList meals={meals} />
      <TouchableOpacity 
        style={styles.adminButton}
        onPress={handleAdminPress}
      >
        <Text style={styles.adminButtonText}>Admin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteOff,
  },
  adminButton: {
    margin: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.success,
    borderRadius: 20,
    alignItems: 'center',
  },
  adminButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
});
