import { Redirect } from 'expo-router';

export default function Index() {
  // If you have auth logic, check it here. 
  // Otherwise, just redirect to your tabs.
  return <Redirect href="/(tabs)" />;
}