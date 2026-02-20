import { Colors } from '@/src/constants/colors';
import { Meal } from '@/src/types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface MealListProps {
  meals: Meal[];
}

export default function MealList({ meals }: MealListProps) {
  const activeMeals = meals.filter(meal => meal.isActive);

  return (
    <ScrollView style={styles.mealList} showsVerticalScrollIndicator={false}>
      {activeMeals.map((meal) => (
        <View key={meal.id} style={styles.mealCard}>
          <View style={styles.mealCardHeader}>
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.mealPrice}>${meal.price.toFixed(2)} CAD</Text>
          </View>
          <View style={styles.mealCardBody}>
            <View style={styles.tagRow}>
              <Text style={styles.tagLabel}>Cuisine:</Text>
              <View style={styles.cuisineTag}>
                <Text style={styles.cuisineTagText}>{meal.cuisineTag}</Text>
              </View>
            </View>
            {meal.allergens.length > 0 && (
              <View style={styles.tagRow}>
                <Text style={styles.tagLabel}>Allergens:</Text>
                <View style={styles.allergenBadges}>
                  {meal.allergens.map((allergen, index) => (
                    <View key={index} style={styles.allergenBadge}>
                      <Text style={styles.allergenBadgeText}>{allergen}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mealList: {
    flex: 1,
    padding: 20,
  },
  mealCard: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.grayLight,
  },
  mealCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: Colors.black,
  },
  mealPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.success,
  },
  mealCardBody: {
    gap: 10,
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  tagLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.gray,
  },
  cuisineTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: Colors.accentLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  cuisineTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.accent,
  },
  allergenBadges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  allergenBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#fff3cd',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffc107',
  },
  allergenBadgeText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#856404',
  },
});
