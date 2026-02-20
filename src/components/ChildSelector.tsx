import { Colors } from '@/src/constants/colors';
import childrenData from '@/src/mock-data/children.json';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ChildSelectorProps {
  selectedChildName: string;
  onSelectChild: (childName: string) => void;
}

export default function ChildSelector({ selectedChildName, onSelectChild }: ChildSelectorProps) {
  return (
    <View style={styles.childSelector}>
      <Text style={styles.childSelectorLabel}>Select Child:</Text>
      <View style={styles.childButtons}>
        {childrenData.map((child) => (
          <TouchableOpacity 
            key={child.id}
            style={[styles.childButton, selectedChildName === child.name && styles.childButtonActive]}
            onPress={() => onSelectChild(child.name)}
          >
            <Text style={[styles.childButtonText, selectedChildName === child.name && styles.childButtonTextActive]}>
              {child.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  childSelector: {
    padding: 20,
    backgroundColor: Colors.white,
  },
  childSelectorLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: Colors.navyDark,
  },
  childButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  childButton: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.grayLight,
    borderWidth: 2,
    borderColor: Colors.grayLight,
    alignItems: 'center',
  },
  childButtonActive: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
  },
  childButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.gray,
  },
  childButtonTextActive: {
    color: Colors.white,
  },
});
