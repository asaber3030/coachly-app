import { Text } from 'react-native';

export function ProfileHeader({ name }: { name?: string }) {
  return <Text>{name ?? 'Profile'}</Text>;
}