import mealsData from '@/src/mock-data/meals.json';
import { Meal } from '@/src/types';
import { createContext, ReactNode, useContext, useReducer } from 'react';
const initialState = {
  meals: mealsData as Meal[],
};

type MealAction = {
  type: 'TOGGLE_MEAL_ACTIVE';
  payload: string;
};

type MealState = {
  meals: Meal[];
};

function mealReducer(state: MealState, action: MealAction): MealState {
  switch (action.type) {
    case 'TOGGLE_MEAL_ACTIVE':
      return {
        ...state,
        meals: state.meals.map(meal =>
          meal.id === action.payload
            ? { ...meal, isActive: !meal.isActive }
            : meal
        ),
      };
    default:
      return state;
  }
}

type MealContextType = {
  meals: Meal[];
  toggleMealActive: (mealId: string) => void;
};

const MealContext = createContext<MealContextType | null>(null);

export function MealProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(mealReducer, initialState);

  const toggleMealActive = (mealId: string) => {
    dispatch({ type: 'TOGGLE_MEAL_ACTIVE', payload: mealId });
  };

  const value: MealContextType = {
    meals: state.meals,
    toggleMealActive,
  };

  return <MealContext.Provider value={value}>{children}</MealContext.Provider>;
}

export function useMeals() {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error('useMeals must be used within MealProvider');
  }
  return context;
}
