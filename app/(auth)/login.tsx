import { Link, router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/context/AuthContext';
import { useLogin } from '@/features/auth/hooks/use-auth';
import { Spacing } from '@/theme';

export default function LoginScreen() {
  const { setSession } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin({ onSuccess: (session) => { setSession(session); router.replace('/(tabs)/home'); } });

  return (
    <View style={styles.container}>
      <Card>
        <Input autoCapitalize="none" keyboardType="email-address" placeholder="Email" value={email} onChangeText={setEmail} />
        <Input secureTextEntry placeholder="Password" value={password} onChangeText={setPassword} />
        <Button title={login.isPending ? 'Signing in...' : 'Sign in'} onPress={() => login.mutate({ email, password })} disabled={login.isPending || !email || !password} />
        <Link href="/(auth)/register">Create an account</Link>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', padding: Spacing.four } });