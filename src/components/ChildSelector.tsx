import { Colors } from '@/src/constants/colors';
import childrenData from '@/src/mock-data/children.json';
import { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ChildSelectorProps {
  selectedChildName: string;
  onSelectChild: (childName: string) => void;
}

function ChildSelector({ selectedChildName, onSelectChild }: ChildSelectorProps) {
  return (
    <View style={styles.childSelector}>
      <Text style={styles.childSelectorLabel}>Select Child:</Text>
      <View style={styles.childButtons}>
        {childrenData.map((child) => {
          const isSelected = selectedChildName === child.name;
          return (
            <TouchableOpacity 
              key={child.id}
              style={[styles.childButton, isSelected && styles.childButtonActive]}
              onPress={() => onSelectChild(child.name)}
            >
              <Text style={[styles.childButtonText, isSelected && styles.childButtonTextActive]}>
                {child.name}
              </Text>
            </TouchableOpacity>
          );
        })}
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
    color: Colors.black,
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
    color: Colors.black,
  },
  childButtonTextActive: {
    color: Colors.white,
  },
});

export default memo(ChildSelector);
