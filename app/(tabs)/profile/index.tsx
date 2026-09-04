import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { Spacing } from '@/theme';

export default function ProfileScreen() {
  const { session, clearSession } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>{session?.user?.email ?? 'No signed-in user'}</Text>
      <Button title="Sign out" onPress={() => { clearSession(); router.replace('/(auth)/login'); }} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: Spacing.four, gap: Spacing.three }, title: { fontSize: 28, fontWeight: '700' } });