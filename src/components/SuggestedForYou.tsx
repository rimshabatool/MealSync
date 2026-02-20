import { Colors } from '@/src/constants/colors';
import { Meal } from '@/src/types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface SuggestedForYouProps {
  suggestedMeals: Meal[];
}

export default function SuggestedForYou({ suggestedMeals }: SuggestedForYouProps) {
  return (
    <View style={styles.suggestedSection}>
      <Text style={styles.suggestedTitle}>Suggested for You</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.suggestedScroll} 
        contentContainerStyle={styles.suggestedScrollContent}
      >
        {suggestedMeals.length > 0 ? (
          suggestedMeals.map((meal) => (
            <View key={meal.id} style={styles.suggestedCard}>
              <Text style={styles.suggestedMealName}>{meal.name}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noSuggestions}>No suggestions available</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  suggestedSection: {
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  suggestedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 12,
    color: Colors.navyDark,
  },
  suggestedScroll: {
    paddingLeft: 20,
  },
  suggestedScrollContent: {
    paddingRight: 20,
  },
  suggestedCard: {
    width: 140,
    marginRight: 12,
    padding: 16,
    backgroundColor: Colors.successLight,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestedMealName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.navyDark,
    textAlign: 'center',
  },
  noSuggestions: {
    fontSize: 14,
    color: Colors.gray,
    paddingHorizontal: 20,
  },
});
