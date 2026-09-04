import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { useHomeFeed } from '@/features/home/hooks/use-home-feed';
import { Spacing } from '@/theme';

export default function HomeScreen() {
  const { data, isLoading } = useHomeFeed();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text>{isLoading ? 'Loading your feed...' : data?.message ?? 'Your coaching workspace'}</Text>
      <Link href="/(tabs)/home/example">Open a detail screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: Spacing.four, gap: Spacing.three }, title: { fontSize: 28, fontWeight: '700' } });