import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Spacing } from '@/theme';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Input placeholder="Name" />
        <Input autoCapitalize="none" keyboardType="email-address" placeholder="Email" />
        <Input secureTextEntry placeholder="Password" />
        <Button title="Create account" onPress={() => undefined} />
        <Link href="/(auth)/login">Already have an account?</Link>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', padding: Spacing.four } });