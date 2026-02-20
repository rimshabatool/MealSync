import ChildSelector from '@/src/components/ChildSelector';
import Header from '@/src/components/Header';
import SuggestedForYou from '@/src/components/SuggestedForYou';
import { Colors } from '@/src/constants/colors';
import childrenData from '@/src/mock-data/children.json';
import mealsData from '@/src/mock-data/meals.json';
import { getSuggestedMeals } from '@/src/utils/mealSuggestions';
import { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MealMenuScreen() {
  const [selectedChildName, setSelectedChildName] = useState('Liam');
  
  const selectedChild = useMemo(() => {
    return childrenData.find(child => child.name === selectedChildName) || childrenData[0];
  }, [selectedChildName]);

  const suggestedMeals = useMemo(() => {
    return getSuggestedMeals(mealsData, selectedChild);
  }, [selectedChild]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Meal Menu" />
      <ChildSelector 
        selectedChildName={selectedChildName}
        onSelectChild={setSelectedChildName}
      />
      <SuggestedForYou suggestedMeals={suggestedMeals} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteOff,
  },
});
