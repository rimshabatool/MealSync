import { MealProvider } from '@/src/context/MealContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <MealProvider>
      <Stack>
        <Stack.Screen name="mealmenu" options={{ headerShown: false }} />
        <Stack.Screen name="admin" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </MealProvider>
  );
}
