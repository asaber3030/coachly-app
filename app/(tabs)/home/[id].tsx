import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <View><Text>Home item: {id}</Text></View>;
}