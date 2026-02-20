# MealSync - React Native Hiring Assignment

## How to Run the App

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npx expo start
   ```

3. Open the app:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone
   - Press `w` for web browser


If I had more time, I would add **error handling and loading states** throughout the application. Currently, the app assumes data is always available. I would:

- Add loading spinners when processing meal suggestions
- Implement error boundaries to catch and display errors gracefully
- Add toast notifications for user feedback (e.g., "Meal toggled successfully")
- Implement retry mechanisms for failed operations
